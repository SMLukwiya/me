import {useForm} from "react-hook-form";
import Input, {Select} from "../ui/Input";
import Textbox from "../ui/Textbox";
import Button from "../ui/Button";
import { api } from "@/utils/api";
import { ProjectRequest } from "@/schemas/project.schema";
import { useRouter } from "next/router";
import { formatSlug } from "@/utils/formatSlug";

const tags = ["personal", "community"]

export default function NewProjectForm() {
    const router = useRouter()
    const form = useForm<ProjectRequest>()
    const createProject = useCreateProject()

    async function onSubmitHandler(data: ProjectRequest) {
        createProject.mutate({...data, slug: formatSlug(data.title)}, {
            onSuccess: (response) => {
                form.reset()
                router.push(`/projects/${response.tag}`)
            }
        })
    }

    return (
        <>
            <form onSubmit={form.handleSubmit(onSubmitHandler)}>
                <h1 className="text-xl text-center text-slate-200">New Article</h1>
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
                        {tags.map((category) => 
                            <option className="text-black" key={category} value={category}>{category}</option>
                        )}
                    </Select>
                    <div className="flex justify-between">
                        <Button
                            type="submit"
                            disabled={createProject.isLoading}>
                            Create
                        </Button>
                        <Button>Preview</Button>
                    </div>
                </div>
            </form>
        </>
    )
}

export function useCreateProject() {
    const utils = api.useContext()

    return api.projects.create.useMutation({
        onSuccess: async () => {
            await utils.projects.list.invalidate()
        }
    })
}