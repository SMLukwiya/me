import Layout from "@/components/Layout";
import { api } from "@/utils/api";
import ArticleComponent from "@/components/articles/ArticleComponent";
import { WrapperLoader } from "@/components/ui/Loader";

export default function Articles() {
    const {data: articles, isFetching} = useGetArticles()

    if (isFetching) return <WrapperLoader />

    return (
        <Layout>
            <div className="flex flex-wrap gap-3 w-4/5 mx-auto justify-between px-10">
                {articles?.map((article) => 
                    <div className="w-full md:w-[45%]" key={article.id}>
                        <ArticleComponent {...article} />
                    </div>)
                }
            </div>
        </Layout>
    )
}

export function useGetArticles() {
    return api.articles.list.useQuery()
}