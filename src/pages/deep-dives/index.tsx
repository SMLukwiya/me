import Layout from "@/components/Layout"
import Image from "next/image"
import Link from "next/link";

export default function DeepDives() {
    return (
        <Layout>
            <div className="w-full md:w-3/4 m-auto flex gap-4">
                <Card 
                    image="/react.png"
                    title="React"
                    bgColor="bg-sky-500"
                    active
                    path="deep-dives/react"
                    />
                <Card
                    image="/javascript.png"
                    title="JS"
                    bgColor="bg-sky-500"
                    active
                    path="deep-dives/javascript"
                />
            </div>
        </Layout>
    )
}

interface CardParams {
    image: string;
    title: string;
    bgColor: string;
    active: boolean
    path: string;
}

function Card({image, title, bgColor, active, path}: CardParams) {
    return (
        
        <div className="w-1/2 h-52 bg-contain bg-no-repeat border border-slate-300 rounded-md overflow-hidden">
            <button 
                className="w-full h-full"
                disabled={!active}
                >
                    <Link href={path} className="w-full h-full flex overflow-hidden items-center justify-center relative p-2">
                        <div className="w-1/2 h-full relative ">
                            <Image src={image} alt="product-logo" fill />
                        </div>
                        <h1 className={`absolute top-0 left-0 ${bgColor} rounded-md p-2 text-slate-200`}>{title}</h1>
                    </Link>
            </button>
        </div>
    )
}