import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { WrapperLoader } from "@/components/ui/Loader";

const DynamicForm = dynamic(() => import("../../../../../components/deep-dives/EditDeepArticleForm"), {
    loading: () => <WrapperLoader />
})

export default function EditArticle() {
    const {query} = useRouter()

    const article = JSON.parse(query.article as string)

    return (
        <Layout>
            <h1 className="text-xl text-slate-200 font-semibold text-center">Edit Article</h1>
            <DynamicForm formValues={article} />
        </Layout>
    )
}