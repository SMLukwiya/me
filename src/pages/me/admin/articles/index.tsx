import NewArticleForm from "@/components/articles/NewArticleForm";


export default function CreateArticle() {
    return (
        <div className="bg-slate-900 py-5">
            <h1 className="text-xl text-center text-slate-200">New Article</h1>
            <NewArticleForm />
        </div>
    )
}