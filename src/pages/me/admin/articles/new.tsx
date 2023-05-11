import { WrapperLoader } from "@/components/ui/Loader";
import { env } from "@/env.mjs";
import { getServerAuthSession } from "@/server/auth";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const DynamicForm = dynamic(() => import("../../../../components/articles/NewArticleForm"), {
    loading: () => <WrapperLoader />
})


export default function CreateArticle() {
    return (
        <div className="bg-slate-900 py-5">
            <h1 className="text-xl text-center text-slate-200">New Article</h1>
            <DynamicForm />
        </div>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const session = await getServerAuthSession(ctx)

    if (!session || session.user.email !== env.WHITELIST_EMAIL) {
        return {
            redirect: {
                destination: "/"
            }
        }
    }
    
    return {
        props: {}
    }
}