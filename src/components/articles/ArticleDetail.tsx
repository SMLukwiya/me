import { ArticleResponse } from "@/schemas/article.schema";
import ReactMarkdown from "react-markdown"
import indexCss from "../../styles/markdown-dark.module.css"
import { formatTime } from "@/utils/days";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../ui/Button";
import { api } from "@/utils/api";
import { useAuth } from "@/hooks/useAuth";


export default function ArticleDetail({article}: {article: ArticleResponse}) {
    const isAdmin = useAuth()

    let tags: string[] = []

    if (article.tags) {
        tags = article.tags.split(",")
    }

    return (
        <div>
            <h1 className="text-3xl text-slate-100 mb-4">{article.title}</h1>
            <p className="text-slate-100">{article.description}</p>
            {tags.length && tags.map((tag) => <span key={tag} className="bg-slate-200 p-1 rounded-lg mr-2 text-slate-600">{tag}</span>)}
            <div className="flex items-center justify-between mb-14 mt-4">
                <p className="text-sm text-slate-300">By {article.authorName}</p>
                {article.updatedAt && <p className="text-sm text-slate-300">Posted: {formatTime(article.updatedAt)}</p>}
                
            </div>
            <ReactMarkdown children={article.content} className={indexCss["markdown-body"]} />
            {isAdmin &&
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