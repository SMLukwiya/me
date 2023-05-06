import NavBar from "@/components/nav/Navbar";
import { api } from "@/utils/api";

let quote = {
  content: 'We make a living by what we get, but we make a life by what we give.',
  author: "Winston Churchill"
}

export default function Home() {
  const {data: quotes, isFetching} = useGetQuotes();

  const cats = ['dab', 'skate', 'shades']
  const cat = cats[Math.floor(Math.random() * 3)]

  if (quotes) {
    quote = quotes[Math.floor(Math.random() * 25)]
  }
  
  return (
    <div className="flex flex-col bg-[url('/bg-morphism.png')] h-screen w-screen bg-cover bg-no-repeat px-7 md:block flex-wrap overflow-hidden text-center lg:text-left">
      <NavBar />
      <div className="flex lg:flex-1 flex-col-reverse lg:flex-row justify-between items-center mx-16 lg:mx-24 lg:mt-20">
        <div className="w-full lg:w-1/2">
          <div className="h-32 lg:h-40">
            <h1 className="text-slate-200 md:text-lg lg:text-xl">{quote.content}</h1>
            <p className="text-slate-300">- {quote.author}</p>
          </div>

          <div className="mt-8 lg:mt-12">
            <h1 className="text-slate-100 text-2xl">Check out the latest in depth articles</h1>
            <div className="flex items-center justify-center lg:justify-start mt-4">
                <button 
                  className="rounded-full bg-white/80 px-14 py-4 text-center text-slate-800 font-semibold no-underline transition hover:bg-white/20 hover:text-slate-100 mr-4"
                  >
                  React
                </button>
                <button
                  className="rounded-full bg-white/80 px-14 py-4 text-center text-slate-800 font-semibold no-underline transition hover:bg-white/20 ml-4 hover:text-slate-100"
                >
                  JavaScript
                </button>
            </div>
          </div>
        </div>

        <div className="xl:mr-24 w-full lg:w-1/2 flex justify-center lg:justify-end">
          {cat === "dab" && <DearCats name="/dab-cat.png" />}
          {cat === "skate" && <DearCats name="/skate-cat.png" />}
          {cat === "shades" && <DearCats name="/shades-cat.png" />}
        </div>
      </div>
      <div className="mx-16 lg:mx-24 absolute bottom-5 text-sm md:text-base">
        <p className="text-slate-400">All rights reserved © SMLukwiya 2023</p>
      </div>
    </div>
  )
}

function DearCats({name}: {name: string}) {
  return <img src={name} alt="cool-cats" className="w-[200px] lg:w-[325px]"/>
}

function useGetQuotes() {
  return api.quotes.list.useQuery()
}