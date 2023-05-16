import { ArticleResponse } from "@/schemas/article.schema";
import Link from "next/link";
import Image from "next/image";

interface DeepDiveParams {
    article: ArticleResponse,
    category: string
}


export default function DeepDiveArticle({article, category}: DeepDiveParams) {
    const {title, description, authorName, slug} = article;

    return (
        <Link href={`/deep-dives/${category}/${slug}`}>
            <div className="relative bg-cover bg-no-repeat w-full h-64 rounded-lg overflow-hidden border border-slate-400">
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