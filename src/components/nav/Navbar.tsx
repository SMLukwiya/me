import Link from "next/link"
import { useEffect, useState } from "react"
import {slide as Menu} from "react-burger-menu"

export default function NavBar() {
    const [width, setWidth] = useState<number>();

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {window.removeEventListener('resize', handleResize)}
    }, [])

    return (
        <div className="flex items-center justify-between py-10 px-7">
            <div className="w-1/5">
                <Link href="/">
                    <img src={'/logo-gradient.png'} alt="logo" height={50} width={100} />
                </Link>
            </div>
            {width && width < 768 ? 
                <NavBarMobile />
                :
                <div className="flex items-center justify-end text-slate-200 w-4/5 text-lg">
                    <Link href="/articles"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Articles</p></Link>
                    <Link href="/deep-dives"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Deep dives</p></Link>
                    <Link href="/projects"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Projects</p></Link>
                    <Link href="/me"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">About</p></Link>
                    <Link href="/"><button className="w-8 h-8 rounded-full bg-slate-600" disabled></button></Link>
            </div>
            }
        </div>
    )
}

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: 'rgb(226 232 240)'
    },
    bmBurgerBarsHover: {
      background: 'red'
    },
    bmCrossButton: {
      height: '64px',
      width: '64px'
    },
    bmCross: {
      background: 'rgba(203, 213, 225, 1)'
    },
    bmMenu: {
      background: 'rgba(15, 23, 42, 1)',
      padding: '2.5em 0',
      fontSize: '1.35em'
    },
    bmMenuWrap: {
        top: "0px"
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'rgb(203, 213, 225)',
      padding: '0.8em',
      display: "flex",
      flexDirection: "column",
      alignItems: "end"
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

export function NavBarMobile() {
    return (
        <Menu width={250} styles={styles} right>
            <Link href="/articles"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Articles</p></Link>
            <Link href="/deep-dives"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Deep dives</p></Link>
            <Link href="/projects"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">Projects</p></Link>
            <Link href="/me"><p className="mx-3 hover:text-white hover:underline hover:underline-offset-4 transition">About</p></Link>
        </Menu>
    )
}