
export default function CardShell({children}: {children: React.ReactNode}) {
    return (
        <div className="relative bg-cover bg-no-repeat w-full h-64 rounded-lg overflow-hidden border border-slate-400 mb-10">
            {children}     
        </div>
    )
}