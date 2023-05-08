import { ArticleResponse } from "@/schemas/article.schema";
import ReactMarkdown from "react-markdown"
import indexCss from "../../styles/markdown.module.css"
import { formatTime } from "@/utils/days";


export default function ArticleDetail({article}: {article: ArticleResponse}) {
    return (
        <div>
            <h1 className="text-3xl text-slate-100 mb-4">{article.title}</h1>
            <p className="text-slate-100">{article.description}</p>
            <div className="flex items-center justify-between mb-14">
                <p className="text-sm text-slate-300">By {article.authorName}</p>
                {article.updatedAt && <p className="text-sm text-slate-300">Posted: {formatTime(article.updatedAt)}</p>}
                
            </div>
            <ReactMarkdown children={article.content} className={indexCss["markdown-body"]} />
        </div>
    )
}