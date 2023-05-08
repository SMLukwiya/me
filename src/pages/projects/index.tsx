import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { PROJECT_TAG } from "@/schemas/project.schema";

export default function Projects() {
    return (
        <Layout>
            <div className="w-3/4 mx-auto flex flex-wrap gap-4">
                <Card
                    image="/community.png"
                    title="Community"
                    path="/projects/community"
                    tag="community"
                    description="Open source community Projects"
                />
                <Card
                    image="/personal.png"
                    title="Personal"
                    path="/projects/personal"
                    tag="personal"
                    description="Personal projects"
                />
            </div>
        </Layout>
    )
}

interface CardParams {
    image: string;
    title: string;
    path: string;
    tag: PROJECT_TAG;
    description: string;
}

function Card({image, title, path, description, tag}: CardParams) {
    return (
        
        <div className="w-full md:w-[45%] h-64 bg-contain bg-no-repeat border border-slate-300 rounded-xl overflow-hidden">
            <Link 
                href={{
                    pathname: path,
                    query: {tag}
                }} 
                className="w-full h-full flex overflow-hidden items-center justify-center relative p-2">
                <div className="w-1/2 h-full relative ">
                    <Image src={image} alt="product-logo" fill />
                </div>
                <div className=" h-full w-full bg-gradient-to-t from-black/80 to-black/30 absolute flex flex-col items-start justify-end p-4">
                    <h1 className="text-slate-200 font-semibold text-3xl">{title}</h1>
                    <p className="text-slate-300">{description}</p>
                </div>
            </Link>
        </div>
    )
}