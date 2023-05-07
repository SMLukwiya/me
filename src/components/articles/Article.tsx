import { ArticleResponse } from "@/schemas/article.schema";
import Link from "next/link";


export default function Article(article: ArticleResponse) {
    const {title, description, authorName} = article
    return (
        <Link href="/articles">
            <div className="bg-[url(/shades-cat.png)] bg-cover bg-no-repeat w-full h-64 rounded-lg overflow-hidden border border-slate-400">
                <div className="flex flex-col justify-end bg-gradient-to-t from-black/80 to-black/20 h-full p-4">
                    <h1 className="text-slate-100 font-semibold text-lg">{title}</h1>
                    <h2 className="text-slate-200">{description}</h2>
                    <p className="text-slate-300 text-sm">By {authorName}</p>
                </div>
            </div>
        </Link>
    )
}