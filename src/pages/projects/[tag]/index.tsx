import Layout from "@/components/Layout";
import Project from "@/components/project/Project";
import { WrapperLoader } from "@/components/ui/Loader";
import { Project_Tag } from "@/schemas/project.schema";
import { api } from "@/utils/api";
import { useRouter } from "next/router";


export default function Projects() {
    const {query} = useRouter()
    const tag = query.tag as Project_Tag
    const {data: projects, isFetching} = useGetProjects(tag)

    if (isFetching) return <WrapperLoader />

    return (
        <Layout>
            <div className="w-full flex md:w-3/4 mx-auto">
                {projects?.map((project) => 
                    <div key={project.id} className="w-[45%]">
                        <Project
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            tag={project.tag as Project_Tag}
                         />
                    </div>)}
            </div>
        </Layout>
    )
}

export function useGetProjects(tag: Project_Tag) {
    return api.projects.list.useQuery({tag})
}