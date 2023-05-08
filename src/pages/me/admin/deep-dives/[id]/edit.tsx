import Layout from "@/components/Layout";
import EditArticleForm from "@/components/articles/EditArticleForm";
import EditDeepArticleForm from "@/components/deep-dives/EditDeepArticleForm";
import { useRouter } from "next/router";

export default function EditArticle() {
    const {query} = useRouter()

    const article = JSON.parse(query.article as string)

    console.log("Article",article)
    return (
        <Layout>
            <h1 className="text-xl text-slate-200 font-semibold text-center">Edit Article</h1>
            <EditDeepArticleForm formValues={article} />
        </Layout>
    )
}