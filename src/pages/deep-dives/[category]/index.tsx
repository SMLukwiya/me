import Layout from "@/components/Layout"
import DeepDiveArticle from "@/components/deep-dives/DeepDiveArticle"
import { WrapperLoader } from "@/components/ui/Loader"
import { api } from "@/utils/api"
import { useRouter } from "next/router"


export default function Category() {
    const {query} = useRouter()
    const category = query.category as string
    const {data: articles, isFetching} = useGetDeepDiveArticles(category)

    if (isFetching) return <WrapperLoader />

    return (
        <Layout>
            <div className="flex flex-wrap gap-3 w-4/5 m-auto justify-start">
                {articles?.map((article) => <div key={article.id} className="w-full md:w-[45%]"><DeepDiveArticle key={article.id} article={article} category={category} /></div>)}
            </div>
        </Layout>
    )
}

export function useGetDeepDiveArticles(id: string) {
    return api.deepDives.list.useQuery({categoryId: id})
}