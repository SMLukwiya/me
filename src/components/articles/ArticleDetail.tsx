import { ArticleResponse } from "@/schemas/article.schema";
import ReactMarkdown from "react-markdown"
import indexCss from "../../styles/markdown.module.css"
import { formatTime } from "@/utils/days";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../ui/Button";
import { api } from "@/utils/api";


export default function ArticleDetail({article}: {article: ArticleResponse}) {
    const {status} = useSession()

    return (
        <div>
            <h1 className="text-3xl text-slate-100 mb-4">{article.title}</h1>
            <p className="text-slate-100">{article.description}</p>
            <div className="flex items-center justify-between mb-14">
                <p className="text-sm text-slate-300">By {article.authorName}</p>
                {article.updatedAt && <p className="text-sm text-slate-300">Posted: {formatTime(article.updatedAt)}</p>}
                
            </div>
            <ReactMarkdown children={article.content} className={indexCss["markdown-body"]} />
            {status === "authenticated" &&
                <div className="mt-7 flex items-center gap-4">
                    <Link href={{
                        pathname: `/me/admin/articles/${article.id}/edit`,
                        query: {article: JSON.stringify(article)}
                    }}> 
                        <p className="text-green-300">Update</p>
                    </Link>
                    <Button><p className="text-red-600">Delete</p></Button>
                </div>
            }
        </div>
    )
}

export function useDeleteArticle() {
    return api.articles.update.useMutation()
}