import Layout from "@/components/Layout";
import { Project_Tag } from "@/schemas/project.schema";
import { api } from "@/utils/api";
import { useRouter } from "next/router";


export default function Projects() {
    const {query} = useRouter()
    const tag = query.tag as Project_Tag
    const {data: projects, isFetching} = useGetProjects(tag)

    return (
        <Layout>
            <div className="w-full md:w-3/4">

            </div>
            
        </Layout>
    )
}

function Project() {

}

export function useGetProjects(tag: Project_Tag) {
    return api.projects.list.useQuery({tag})
}