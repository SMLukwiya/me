import Layout from "@/components/Layout";
import { WrapperLoader } from "@/components/ui/Loader";
import { env } from "@/env.mjs";
import { getServerAuthSession } from "@/server/auth";
import { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

const DynamicForm = dynamic(() => import("../../../../components/deep-dives/NewDeepArticleForm"), {
    loading: () => <WrapperLoader />
})


export default function CreateArticle() {
    return (
        <Layout>
            <DynamicForm />
        </Layout>
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