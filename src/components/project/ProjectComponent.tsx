import { Project } from "@/schemas/project.schema";
import Link from "next/link";
import CardShell from "../ui/CardShell";
import { useAuth } from "@/hooks/useAuth";
import { api } from "@/utils/api";
import Button from "../ui/Button";


export default function Project(props: Project) {
    const {title, description, githubLink, liveLink} = props
    const isAdmin = useAuth();

    const deleteProject = useDeleteProject();

    async function onDeleteHandler() {
        deleteProject.mutate({id: props.id}, {});
    }

    return (
        <CardShell>
            <div className="flex flex-col justify-end bg-gradient-to-t from-black/80 to-black/40 h-full p-4">
                <h1 className="text-slate-100 font-semibold text-lg">{title}</h1>
                <h2 className="text-slate-200 line-clamp-4 overflow-hidden">{description}</h2>
                <div className="flex items center justify-between mb-2">
                    {
                        liveLink && 
                        <Link href={liveLink} target="_blank">
                            <p className="bg-green-600 text-white py-2 px-5 rounded-md">Live Link</p>
                        </Link>
                    }
                    {
                        githubLink && 
                        <Link href={githubLink} target="_blank">
                            <p className="bg-gray-600 text-white py-2 px-5 rounded-md">Github</p>
                        </Link>
                    }                    
                </div>
                {
                    isAdmin && 
                    <div className="flex justify-center">
                        <Button 
                            type="submit"
                            onClick={onDeleteHandler}
                            disabled={deleteProject.isLoading}>
                            Delete
                        </Button>
                    </div>
                }
            </div>
        </CardShell>
    )
}

export function useDeleteProject() {
    const utils = api.useContext()
    return api.projects.delete.useMutation({
        onSuccess: async () => {
            await utils.projects.list.invalidate()
        }
    })
}