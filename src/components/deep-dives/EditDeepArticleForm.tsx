import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import Input, {Select} from "../ui/Input";
import Textbox from "../ui/Textbox";
import Button from "../ui/Button";
import { api } from "@/utils/api";
import { DeepDiveRequest, DeepDiveUpdate, deepDiveCreateSchema, } from "@/schemas/deep-dive.schema";
import { useRouter } from "next/router";
import { useGetAllCategories } from "./NewDeepArticleForm";
import { formatSlug } from "@/utils/formatSlug";

interface FormValues {
    formValues: DeepDiveUpdate
}

export default function EditDeepArticleForm({formValues}: FormValues) {
    const router = useRouter()
    const form = useForm<DeepDiveRequest>({
        defaultValues: formValues,
        resolver: zodResolver(deepDiveCreateSchema)
    })
    const updateArticle = useEditDeepArticle()
    const {data: categories} = useGetAllCategories()

    async function onSubmitHandler(data: DeepDiveRequest) {
        updateArticle.mutate({...data, id: formValues.id, slug: formatSlug(data.title)}, {
            onSuccess: (response) => {
                form.reset()
                router.push(`/deep-dives/${response.categorySlug}/${response.id}`)
            }
        })
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmitHandler, (e) => console.log(e))}>
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
                <Textbox
                    {...form.register("content")}
                    ref={form.register("content").ref}
                    name="content"
                    label="Content"
                    rows={10}
                />
                <Input 
                    {...form.register("tags")}
                    ref={form.register("tags").ref}
                    name="tags"
                    label="Tags"
                    placeholder="React, Typescript, nextjs, etc"
                />
                <Input 
                    {...form.register("authorName")}
                    ref={form.register("authorName").ref}
                    name="authorName"
                    label="Author's Name"
                />
                <Select 
                    {...form.register("categoryId")}
                    ref={form.register("categoryId").ref}
                    name="categoryRef"
                    label="Category"
                >
                    {categories?.map((category) => 
                        <option className="text-black" key={category.id} value={category.id}>{category.name}</option>
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

export function useEditDeepArticle() {
    const utils = api.useContext()

    return api.deepDives.update.useMutation({
        onSuccess: async () => {
            await utils.articles.list.invalidate()
        }
    })
}