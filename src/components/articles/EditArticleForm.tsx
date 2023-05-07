import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import Input from "../ui/Input";
import Textbox from "../ui/Textbox";
import Button from "../ui/Button";
import { api } from "@/utils/api";
import { ArticleRequest, ArticleUpdate, articleCreateSchema } from "@/schemas/article.schema";

interface FormValues {
    formValues: ArticleUpdate
}

export default function EditArticleForm({formValues}: FormValues) {
    const form = useForm<ArticleRequest>({
        defaultValues: formValues,
        resolver: zodResolver(articleCreateSchema)
    })
    const createArticle = useCreateArticle()

    async function onSubmitHandler(data: ArticleRequest) {
        createArticle.mutate(data, {
            onSuccess: () => {
                form.reset()
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
                <div className="flex justify-between">
                    <Button
                        type="submit"
                        disabled={createArticle.isLoading}>
                        Create
                    </Button>
                    <Button>Preview</Button>
                </div>
            </div>
        </form>
    )
}

export function useCreateArticle() {
    const utils = api.useContext()

    return api.articles.create.useMutation({
        onSuccess: async () => {
            await utils.articles.list.invalidate()
        }
    })
}