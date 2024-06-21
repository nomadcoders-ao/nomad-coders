'use client'
import Link from "next/link";
import { Backpack, BadgeInfo, BookUser, CalendarFold, Home, SquareMenu, } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Nav(){
    const router = usePathname()
    const [state, setState] = useState(false)
    const menu = useRef<HTMLUListElement>(null)
    return(
        <header className="w-full max-sm:h-[18vw] max-lg:h-[10vw] h-[4vw] bg-white flex justify-between items-center max-lg:px-[7vw] px-[7vw]  max-sm:relative">
            <Link href={"/"} className="h-full w-fit flex justify-start items-center">
                <Image className="object-contain max-sm:h-[50%] max-lg:h-[50%] h-[80%] w-auto" width={1000} height={500} alt="" src={"/assets/favicon.png"} />
                <span className="text-[#0a1763] text-[1.2vw] max-sm:text-[4vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold">Nomad Coders</span>
            </Link>
            <button className="flex-none hidden max-sm:flex group max-sm:h-[8vw] max-sm:w-[8vw] max-sm:items-center max-sm:justify-center" onClick={()=>setState(!state)}>
                <SquareMenu size={36} className={`${!state?"text-gray-700":"text-white fill-blue-700"} max-sm:text-[100vw] duration-500`} />
            </button>
            <ul ref={menu} className={`${state?"max-sm:left-0":"max-sm:left-[1000px]"} duration-300 flex gap-[3vw] max-sm:h-[calc(100%_-_18vw)] max-sm:items-start max-sm:py-[1.5vw] max-sm:gap-0 max-sm:w-full max-sm:flex-col max-sm:flex-none max-sm:z-50 max-sm:fixed max-sm:bottom-0 bg-white max-sm:left-0`}>
                 <li className="max-sm:h-fit max-sm:w-full">
                    <Link href={"/"} className="max-sm:w-full max-sm:h-[12vw] flex max-sm:gap-[1.5vw] max-sm:flex group max-sm:items-center max-sm:px-[6.5vw]">
                        <Home  className={`${router==="/"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/"&&"max-2xl:text-blue-700 max-lg:text-blue-700 max-md:text-blue-700 text-blue-700"} text-[1.2vw] max-sm:text-[5vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Home</span>
                    </Link>
                </li>
                 <li className="max-sm:h-fit max-sm:w-full">
                    <Link href={"sobre-nos"} className="max-sm:w-full max-sm:h-[12vw] flex max-sm:gap-[1.5vw] max-sm:flex group max-sm:items-center max-sm:px-[6.5vw]">
                        <BadgeInfo className={`${router==="/sobre-nos"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/sobre-nos"&&"max-2xl:text-blue-700 max-lg:text-blue-700 max-md:text-blue-700 text-blue-700"} text-[1.2vw] max-sm:text-[5vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Sobre Nós</span>
                    </Link>
                </li>
                 <li className="max-sm:h-fit max-sm:w-full">
                    <Link href={"eventos"} className="max-sm:w-full max-sm:h-[12vw] flex max-sm:gap-[1.5vw] max-sm:flex group max-sm:items-center max-sm:px-[6.5vw]">
                        <CalendarFold className={`${router==="/eventos"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/eventos"&&"max-2xl:text-blue-700 max-lg:text-blue-700 max-md:text-blue-700 text-blue-700"} text-[1.2vw] max-sm:text-[5vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Eventos</span>
                    </Link>
                </li>
                 <li className="max-sm:h-fit max-sm:w-full">
                    <Link href={"portifolio"} className="max-sm:w-full max-sm:h-[12vw] flex max-sm:gap-[1.5vw] max-sm:flex group max-sm:items-center max-sm:px-[6.5vw]">
                        <Backpack className={`${router==="/portifolio"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/portifolio"&&"max-2xl:text-blue-700 max-lg:text-blue-700 max-md:text-blue-700 text-blue-700"} text-[1.2vw] max-sm:text-[5vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Portifólio</span>
                    </Link>
                </li>
                 <li className="max-sm:h-fit max-sm:w-full">
                    <Link href={"contacto"} className="max-sm:w-full max-sm:h-[12vw] flex max-sm:gap-[1.5vw] max-sm:flex group max-sm:items-center max-sm:px-[6.5vw]">
                        <BookUser className={`${router==="/contacto"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/contacto"&&"max-2xl:text-blue-700 max-lg:text-blue-700 max-md:text-blue-700 text-blue-700"} text-[1.2vw] max-sm:text-[5vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Contacto</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}