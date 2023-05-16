import Layout from "@/components/Layout"
import { useGetAllCategories } from "@/components/deep-dives/NewDeepArticleForm";
import { WrapperLoader } from "@/components/ui/Loader";
import Image from "next/image"
import Link from "next/link";

export default function DeepDives() {
    const {data: categories, isFetching} = useGetAllCategories()

    if (isFetching) return <WrapperLoader />

    return (
        <Layout>
            <div className="w-full md:w-3/4 m-auto flex flex-wrap gap-4 px-10 justify-start">
                {categories?.map((category) => 
                    <Card
                        key={category.id}
                        image={`/${category.name.toLowerCase()}.png`}
                        title={category.name}
                        bgColor="bg-sky-500"
                        active
                        path={`deep-dives/${category.slug}`}
                    />
                )}
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
        
        <div className="w-full md:w-[45%] h-64 bg-contain bg-no-repeat border border-slate-300 rounded-xl overflow-hidden">
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