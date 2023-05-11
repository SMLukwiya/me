import { Project } from "@/schemas/project.schema";
import Link from "next/link";


export default function Project(props: Project) {
    const {title, description, githubLink, liveLink} = props
    return (
        <div className="bg-[url(/shades-cat.png)] bg-cover bg-no-repeat w-full h-64 rounded-lg overflow-hidden border border-slate-400">
            <div className="flex flex-col justify-end bg-gradient-to-t from-black/80 to-black/40 h-full p-4">
                <h1 className="text-slate-100 font-semibold text-lg">{title}</h1>
                <h2 className="text-slate-200 line-clamp-4 overflow-hidden">{description}</h2>
                <div className="flex items center justify-between">
                    {liveLink && <Link href={liveLink} target="_blank">
                        <p className="bg-green-600 text-white py-2 px-5 rounded-md">Live Link</p>
                    </Link>}
                    {githubLink && <Link href={githubLink} target="_blank">
                        <p className="bg-gray-600 text-white py-2 px-5 rounded-md">Github</p>
                    </Link>}
                    
                </div>
            </div>
        </div>
    )
}