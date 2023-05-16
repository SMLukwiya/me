import { ArticleResponse } from "@/schemas/article.schema";
import Image from "next/image";
import Link from "next/link";


export default function Article(article: ArticleResponse) {
    const {title, description, authorName, slug} = article;

    return (
        <Link href={`/articles/${slug}`}>
            <div className="relative bg-cover bg-no-repeat w-full md:w-[45%] h-64 rounded-lg overflow-hidden border border-slate-400">
                <Image src="/code.png" alt="article" fill />
                <div className="absolute w-full flex flex-col justify-end bg-gradient-to-t from-black/80 to-black/40 h-full p-4">
                    <h1 className="text-slate-100 font-semibold text-lg">{title}</h1>
                    <h2 className="text-slate-200 line-clamp-4 overflow-hidden">{description}</h2>
                    <p className="text-slate-300 text-sm">By {authorName}</p>
                </div>
            </div>
        </Link>
    )
}