import React from "react";


export default function Button({children}: {children: React.ReactNode}) {
    return (
        <button 
            className="rounded-full bg-white/80 px-14 py-4 text-center text-slate-800 font-semibold no-underline transition hover:bg-white/20 hover:text-slate-100 mr-4"
            >
            {children}
        </button>
    )
}