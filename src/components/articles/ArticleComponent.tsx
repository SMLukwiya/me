import { ArticleResponse } from "@/schemas/article.schema";
import Link from "next/link";


export default function Article(article: ArticleResponse) {
    const {id, title, description, authorName} = article;

    return (
        <Link href={`/articles/${id}`}>
            <div className="bg-[url(/shades-cat.png)] bg-cover bg-no-repeat w-full md:w-[45%] h-64 rounded-lg overflow-hidden border border-slate-400">
                <div className="flex flex-col justify-end bg-gradient-to-t from-black/80 to-black/40 h-full p-4">
                    <h1 className="text-slate-100 font-semibold text-lg">{title}</h1>
                    <h2 className="text-slate-200 line-clamp-4 overflow-hidden">{description}</h2>
                    <p className="text-slate-300 text-sm">By {authorName}</p>
                </div>
            </div>
        </Link>
    )
}