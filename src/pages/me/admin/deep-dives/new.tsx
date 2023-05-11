import Layout from "@/components/Layout";
import NewDeepDiveForm from "@/components/deep-dives/NewDeepDiveForm";
import { env } from "@/env.mjs";
import { getServerAuthSession } from "@/server/auth";
import { GetServerSidePropsContext } from "next";


export default function CreateArticle() {
    return (
        <Layout>
            <NewDeepDiveForm />
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