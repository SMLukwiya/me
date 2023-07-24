import Layout from "@/components/Layout";
import ProjectComponent from "@/components/project/ProjectComponent";
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
            <div className="flex flex-wrap gap-3 w-4/5 mx-auto justify-between px-10">
                {projects?.map((project) => 
                    <div key={project.id} className="w-[45%]">
                        <ProjectComponent
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            tag={project.tag as Project_Tag}
                            slug={project.slug}
                         />
                    </div>)}
            </div>
        </Layout>
    )
}

export function useGetProjects(tag: Project_Tag) {
    return api.projects.list.useQuery({tag})
}