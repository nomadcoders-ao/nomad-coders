'use client'
import Link from "next/link";
import { Backpack, BadgeInfo, BookUser, CalendarFold, Home, } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Nav(){
    const router = usePathname()
    return(
        <header className="w-full max-sm:h-[18vw] max-lg:h-[10vw] h-[4vw] bg-white flex justify-between items-center max-lg:px-[2vw] px-[7vw]">
            <Link href={""}>dfgsfgsf</Link>
            <ul className="flex gap-[3vw] max-sm:h-[18vw] max-sm:items-center max-sm:py-[1.5vm] max-sm:gap-0 max-sm:w-full max-sm:justify-between max-sm:px-[7vw] max-sm:z-50 max-sm:absolute max-sm:bottom-0 bg-white max-sm:left-0">
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"/"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <Home  className={`${router==="/"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/"&&"text-blue-700 max-sm:decoration-white underline decoration-solid"} text-[1.2vw] max-sm:text-[3vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Home</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"sobre-nos"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <BadgeInfo className={`${router==="/sobre-nos"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/sobre-nos"&&"text-blue-700 max-sm:decoration-white underline decoration-solid"} text-[1.2vw] max-sm:text-[3vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Sobre Nós</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"eventos"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <CalendarFold className={`${router==="/eventos"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/eventos"&&"text-blue-700 max-sm:decoration-white underline decoration-solid"} text-[1.2vw] max-sm:text-[3vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Eventos</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"portifolio"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <Backpack className={`${router==="/portifolio"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/portifolio"&&"text-blue-700 max-sm:decoration-white underline decoration-solid"} text-[1.2vw] max-sm:text-[3vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Portifólio</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"contacto"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <BookUser className={`${router==="/contacto"&&"fill-blue-700 text-white"} text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex`} />
                        <span className={`${router==="/contacto"&&"text-blue-700 max-sm:decoration-white underline decoration-solid"} text-[1.2vw] max-sm:text-[3vw] max-lg:text-[2.3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500`}>Contacto</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}