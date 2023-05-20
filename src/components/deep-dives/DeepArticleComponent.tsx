import { ArticleResponse } from "@/schemas/article.schema";
import ArticleCard from "../ui/ArticleCard";

interface DeepDiveParams {
    article: ArticleResponse,
    category: string
}

export default function DeepDiveArticle({article, category}: DeepDiveParams) {
    const {title, description, authorName, slug} = article;

    return (
        <ArticleCard 
            href={`/deep-dives/${category}/${slug}`}
            title={title}
            description={description}
            authorName={authorName}
        />
    )
}