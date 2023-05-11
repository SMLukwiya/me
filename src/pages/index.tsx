import NavBar from "@/components/nav/Navbar";
import Button from "@/components/ui/Button";
import { api } from "@/utils/api";
import axios from "axios";
import { useEffect, useState } from "react";

interface Quote {
  content: string;
  author: string;
}

let quote = {
  content: 'We make a living by what we get, but we make a life by what we give.',
  author: "Winston Churchill"
}

export default function Home({quotes}: {quotes: Quote[]}) {
  const [count, setCount] = useState(0)

  const cats = ['dab', 'skate', 'shades']
  const cat = cats[Math.floor(Math.random() * 3)]

  useEffect(() => {
    if (quotes && quotes.length) {
      const interval = setInterval(() => {
        if (quotes && count < quotes.length) {
          setCount(count => count+1)
        }
      }, 15000)

      return () => clearInterval(interval)
    }
  }, [])

  if (quotes && quotes.length) {
    quote = {...quote, ...quotes[count]}
  }
  
  return (
    <div className="flex flex-wrap flex-col bg-[url('/bg-morphism.png')] h-screen w-screen bg-cover bg-no-repeat md:block overflow-hidden text-center lg:text-left">
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
              <Button>React</Button>
              <Button>JavaScript</Button>
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

export async function getStaticProps() {
  try {
    const {data} = await axios.get("https://api.quotable.io/quotes/random?limit=25");

    return {
      props: {
        quotes: data,
        revalidate: 300
      }
    }
  } catch (e) {
    return {
      props: {
        quotes: []
      }
    }
  }
  
}