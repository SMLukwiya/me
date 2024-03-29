import React from "react";
import NavBar from "./nav/Navbar";


export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="bg-slate-900 min-h-screen">
            <NavBar />
            {children}
        </div>
    )
}