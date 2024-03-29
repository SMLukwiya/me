

export default function Loader({color}: {color?: string} = {color: "text-slate-800"}) {
    return (
        <div
            className={`inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current ${color} border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
            role="status">
            <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                Loading...
            </span>
        </div>
    )
}

export const WrapperLoader = () => {
    return (
        <div className="flex bg-slate-900 min-h-screen items-center justify-center">
            <Loader color="text-slate-100" />
        </div>
    )
}