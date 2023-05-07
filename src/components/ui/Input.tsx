import React from "react"

export default React.forwardRef((props: any, ref) => {
    return (
        <div className="my-4">
            {props.label && <label className="text-slate-300 text-sm ml-2">{props.label}</label>}
            <input
                {...props}
                ref={ref}
                className="bg-transparent outline-none border border-slate-300 w-full p-3 rounded-md text-slate-200"
            />
        </div>
    )
})