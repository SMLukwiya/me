import { ArticleResponse } from "@/schemas/article.schema";
import ArticleCard from "../ui/ArticleCard";


export default function Article(article: ArticleResponse) {
    const {title, description, authorName, slug} = article;

    return (
        <ArticleCard
            href={`/articles/${slug}`}
            title={title}
            description={description}
            authorName={authorName}
        />
    )
}