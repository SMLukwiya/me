import Layout from "@/components/Layout";
import { PROJECT_TAG } from "@/schemas/project.schema";
import { api } from "@/utils/api";
import { useRouter } from "next/router";


export default function Projects() {
    const {query} = useRouter()
    const tag = query.tag as PROJECT_TAG
    const {data: projects, isFetching} = useGetProjects(tag)

    console.log(projects)

    return (
        <Layout>
            <div className="w-full md:w-3/4">

            </div>
            
        </Layout>
    )
}

function Project() {

}

export function useGetProjects(tag: PROJECT_TAG) {
    return api.projects.list.useQuery({tag})
}