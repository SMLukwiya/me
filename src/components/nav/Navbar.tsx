import Link from "next/link"

export default function NavBar() {
    return (
        <div className="flex items-center justify-between py-10 px-3">
            <div className="w-1/5">
                <Link href="/">
                    <img src={'/logo-gradient.png'} alt="logo" height={50} width={100} />
                </Link>
            </div>
            <div className="flex items-center justify-end text-slate-200 w-4/5 text-lg">
                <Link href="/articles"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Articles</p></Link>
                <Link href="/deep-dives"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Deep dives</p></Link>
                <Link href="/projects"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Projects</p></Link>
                <Link href="/me"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">About</p></Link>
                <Link href="/"><button className="w-8 h-8 rounded-full bg-slate-600"></button></Link>
            </div>
        </div>
    )
}