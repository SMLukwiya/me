import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import Input, {Select} from "../ui/Input";
import Textbox from "../ui/Textbox";
import Button from "../ui/Button";
import { api } from "@/utils/api";
import { ProjectUpdate, ProjectRequest, projectCreateSchema } from "@/schemas/project.schema";
import { useRouter } from "next/router";

const tags = ["personal", "community"]

interface FormValues {
    formValues: ProjectUpdate
}

export default function EditDeepArticleForm({formValues}: FormValues) {
    const router = useRouter()
    const form = useForm<ProjectUpdate>({
        defaultValues: formValues,
        resolver: zodResolver(projectCreateSchema)
    })
    const updateArticle = useEditProject()

    async function onSubmitHandler(data: ProjectRequest) {
        updateArticle.mutate({...data, id: formValues.id}, {
            onSuccess: (response) => {
                form.reset()
                router.push(`/community/${response.tag}/${response.id}`)
            }
        })
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmitHandler)}>
            <div className="w-4/5 md:w-1/2 m-auto">
                <Input 
                    {...form.register("title")}
                    ref={form.register("title").ref}
                    name="title"
                    label="Title"
                />
                <Textbox
                    {...form.register("description")}
                    ref={form.register("description").ref}
                    name="description"
                    label="Description"
                    rows={5}
                />
                <Input 
                    {...form.register("githubLink")}
                    ref={form.register("githubLink").ref}
                    name="githubLink"
                    label="Github Link"
                />
                <Input 
                    {...form.register("liveLink")}
                    ref={form.register("liveLink").ref}
                    name="liveLink"
                    label="Live Link"
                />
                <Select 
                    {...form.register("tag")}
                    ref={form.register("tag").ref}
                    name="tag"
                    label="Tag"
                >
                    {tags.map((tag) => 
                        <option className="text-black" key={tag} value={tag}>{tag}</option>
                    )}
                </Select>
                <div className="flex justify-between">
                    <Button
                        type="submit"
                        disabled={updateArticle.isLoading}>
                        Update
                    </Button>
                    <Button>Preview</Button>
                </div>
            </div>
        </form>
    )
}

export function useEditProject() {
    const utils = api.useContext()

    return api.projects.update.useMutation({
        onSuccess: async () => {
            await utils.projects.list.invalidate()
        }
    })
}