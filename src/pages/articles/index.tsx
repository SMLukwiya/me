import Layout from "@/components/Layout";
import { api } from "@/utils/api";
import ArticleComponent from "@/components/articles/ArticleComponent";
import { WrapperLoader } from "@/components/ui/Loader";

export default function Articles() {
    const {data: articles, isFetching} = useGetArticles()

    if (isFetching) return <WrapperLoader />

    return (
        <Layout>
            <div className="w-full px-10 md:px-0 md:w-3/4 mx-auto">
                <h1 className="text-slate-200 text-xl text-center my-5">These articles cover different programming concepts and ideologies</h1>
                <div className="flex flex-wrap gap-3 mx-auto justify-between">
                    {articles?.map((article) => 
                        <div 
                            className="w-full rounded-lg" 
                            key={article.id}
                            >
                            <ArticleComponent {...article} />
                        </div>)
                    }
                </div>
            </div>
        </Layout>
    )
}

export function useGetArticles() {
    return api.articles.list.useQuery()
}