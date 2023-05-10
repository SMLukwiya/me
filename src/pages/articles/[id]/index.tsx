import Layout from "@/components/Layout"
import ArticleDetail from "@/components/articles/ArticleDetail"
import { WrapperLoader } from "@/components/ui/Loader"
import { api } from "@/utils/api"
import { useRouter } from "next/router"


export default function Article() {
    const router = useRouter()
    const {query: {id}} = router
    const {data: article, isFetching} = useGetArticle(id as string)

    if (isFetching) return <WrapperLoader />

    return (
        <Layout>
            <div className="w-3/4 mx-auto">
                {!article ? <h2>Not found</h2> : <ArticleDetail article={article} />}
            </div>
        </Layout>
    )
}

function useGetArticle(id: string) {
    return api.articles.read.useQuery({id})
}