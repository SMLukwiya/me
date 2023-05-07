import Layout from "@/components/Layout";
import { api } from "@/utils/api";
import Article from "@/components/articles/article";

// 
import {sampleArticles} from "../../../.data/sampleArticles"

export default function Articles() {
    return (
        <Layout>
            <h1 className="text-slate-200 text-xl text-center my-7">These articles cover different programming concepts and ideologies</h1>
            <div className="flex flex-wrap gap-3 w-4/5 m-auto justify-between">
                {sampleArticles.map((article) => 
                    <div 
                        className="w-full sm:w-[45%] lg:w-[30%] rounded-lg" key={article.id}
                        >
                        <Article {...article} />
                    </div>)
                }
            </div>
        </Layout>
    )
}

export function useGetArticles() {
    return api.articles.list.useQuery()
}