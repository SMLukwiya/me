import {useForm} from "react-hook-form";
import Input, {Select} from "../ui/Input";
import Textbox from "../ui/Textbox";
import Button from "../ui/Button";
import { api } from "@/utils/api";
import { DeepDiveRequest } from "@/schemas/deep-dive.schema";
import { WrapperLoader } from "../ui/Loader";
import { useRouter } from "next/router";

export default function NewDeepDiveForm() {
    const router = useRouter()
    const form = useForm<DeepDiveRequest>()
    const categoryForm = useForm<{category: string}>()
    const {data: categories, isFetching} = useGetAllCategories()
    const createArticle = useCreateArticle()
    const createCategory = useCreateCategory()

    if (isFetching) return <WrapperLoader />

    async function onSubmitHandler(data: DeepDiveRequest) {
        createArticle.mutate(data, {
            onSuccess: () => {
                form.reset()
            }
        })
    }

    async function onCategorySubmitHandler(data: {category: string}) {
        createCategory.mutate(data, {
            onSuccess: () => {
                categoryForm.reset()
                router.push("/deep-dives")
            }
        })
    }

    return (
        <>
            <form onSubmit={categoryForm.handleSubmit(onCategorySubmitHandler)}>
                <h1 className="text-xl text-center text-slate-200">New Category</h1>
                <div className="w-4/5 md:w-1/2 m-auto">
                    <Input 
                        {...categoryForm.register("category")}
                        ref={categoryForm.register("category").ref}
                        name="category"
                        label="New category"
                    />
                    <Button
                        type="submit"
                        disabled={createCategory.isLoading}>
                        Create
                    </Button>
                </div>
            </form>
            <hr className="w-4/5 md:w-1/2 mx-auto my-4"/>
        
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
                        name="categoryId"
                        label="Category"
                    >
                        {categories?.map((category) => 
                            <option className="text-black" key={category.id} value={category.id}>{category.name}</option>
                        )}
                    </Select>
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
        </>
    )
}

export function useCreateArticle() {
    const utils = api.useContext()

    return api.deepDives.create.useMutation({
        onSuccess: async () => {
            await utils.deepDives.list.invalidate()
        }
    })
}

export function useCreateCategory() {
    const utils = api.useContext()

    return api.deepDives.createCategory.useMutation({
        onSuccess: async () => {
            await utils.deepDives.listCategory.invalidate()
        }
    })
}

export function useGetAllCategories() {
    return api.deepDives.listCategory.useQuery()
}