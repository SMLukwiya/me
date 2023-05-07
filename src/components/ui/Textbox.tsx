import React from "react"


export default React.forwardRef((props: any, ref) => {
    return (
        <div className="my-4">
            {props.label && <label className="text-slate-300 text-sm ml-2">{props.label}</label>}
            <textarea
                {...props}
                ref={ref}
                className="bg-transparent outline-none w-full border border-slate-300 rounded-md p-4 text-slate-200"
                rows={props.rows}>
            </textarea>
        </div>
    )
})