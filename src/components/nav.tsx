import Link from "next/link";
import { Backpack, BadgeInfo, BookUser, CalendarFold, Home, } from "lucide-react";

export default function Nav(){
    return(
        <header className="w-full max-sm:h-[18vw] h-[4vw] bg-white flex justify-between items-center px-[7vw]">
            <Link href={""}>dfgsfgsf</Link>
            <ul className="flex gap-[3vw] max-sm:h-[18vw] max-sm:items-center max-sm:py-[1.5vm] max-sm:gap-0 max-sm:w-full max-sm:justify-between px-[7vw] max-sm:absolute max-sm:bottom-0 bg-white max-sm:left-0">
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"/"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <Home  className="text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex" />
                        <span className="text-[1.2vw] max-sm:text-[3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500">Home</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"sobre-nos"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <BadgeInfo className="text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-focus:duration-500 hidden flex-none max-sm:flex" />
                        <span className="text-[1.2vw] max-sm:text-[3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500">Sobre Nós</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"eventos"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <CalendarFold className="text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-hover:duration-500 hidden flex-none max-sm:flex" />
                        <span className="text-[1.2vw] max-sm:text-[3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500">Eventos</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"portifolio"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <Backpack className="text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-hover:duration-500 hidden flex-none max-sm:flex" />
                        <span className="text-[1.2vw] max-sm:text-[3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500">Portifólio</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"contacto"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <BookUser className="text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-focus:fill-blue-700 group-focus:text-white group-hover:duration-500 hidden flex-none max-sm:flex" />
                        <span className="text-[1.2vw] max-sm:text-[3vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500">Contacto</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}