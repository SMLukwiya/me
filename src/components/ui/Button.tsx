import React from "react";
import Loader from "./Loader";

interface Button {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit" | "button";
}


export default function Button(props: Button) {
    return (
        <button 
            className="rounded-full bg-white/80 px-14 py-4 text-center text-slate-800 font-semibold no-underline transition hover:bg-white/20 hover:text-slate-100 mr-4 disabled:bg-slate-600"
            onClick={props.onClick}
            type={props.type || "button"}
            disabled={props.disabled || false}
            >
            {props.children}
        </button>
    )
}