import { GrHomeRounded } from "react-icons/gr";
import Link from "next/link";

export default function Nav(){
    return(
        <header className="w-full max-sm:h-[18vw] h-[4vw] bg-white flex justify-between items-center px-[7vw]">
            <Link href={""}>dfgsfgsf</Link>
            <ul className="flex gap-[3vw] max-sm:h-[18vw] max-sm:items-center max-sm:py-[1.5vm] max-sm:gap-0 max-sm:w-full max-sm:justify-between px-[7vw] max-sm:absolute max-sm:bottom-0 bg-white max-sm:left-0">
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"/"} className="flex gap-[0.3vw] max-sm:gap-[0.1vw] max-sm:flex-col group items-center">
                        <GrHomeRounded  className="text-[1.2vw] max-sm:text-[7vw] text-gray-700 group-hover:text-blue-700 group-hover:duration-500 group-hover:decoration-solid group-hover:underline" />
                        <span className="text-[1.2vw] max-sm:text-[3.5vw] max-sm:font-bold font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500">Home</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"sobre-nos"} className="flex gap-[2vw] group items-center">
                        <span className="text-[1.2vw] font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500 max-sm:flex-none max-sm:hidden">Sobre Nós</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"eventos"} className="flex gap-[2vw] group items-center">
                        <span className="text-[1.2vw] font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500 max-sm:flex-none max-sm:hidden">Eventos</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"portifolio"} className="flex gap-[2vw] group items-center">
                        <span className="text-[1.2vw] font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500 max-sm:flex-none max-sm:hidden">Portifolio</span>
                    </Link>
                </li>
                 <li className="max-sm:py-[2.5vw]">
                    <Link href={"contacto"} className="flex gap-[2vw] group items-center">
                        <span className="text-[1.2vw] font-semibold text-gray-700 group-hover:text-blue-700 group-hover:duration-500 max-sm:flex-none max-sm:hidden">Contacto</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}