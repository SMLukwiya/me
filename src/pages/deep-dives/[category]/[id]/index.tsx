import Layout from "@/components/Layout"
import DeepDiveArticleDetail from "@/components/deep-dives/DeepArticleDetail"
import { WrapperLoader } from "@/components/ui/Loader"
import { api } from "@/utils/api"
import { useRouter } from "next/router"


export default function Article() {
    const router = useRouter()
    const {query: {id}} = router
    const {data: article, isFetching} = useGetDeepDiveArticle(id as string)

    if (isFetching) return <WrapperLoader />

    return (
        <Layout>
            <div className="w-3/4 mx-auto px-10">
                {!article ? <h2>Not found</h2> : <DeepDiveArticleDetail article={article} />}
            </div>
        </Layout>
    )
}

function useGetDeepDiveArticle(id: string) {
    return api.deepDives.read.useQuery({id})
}