import Layout from "@/components/Layout"
import { useRouter } from "next/router"


export default function Category() {
    const router = useRouter()
    console.log(router)

    return (
        <Layout>
            Category
        </Layout>
    )
}