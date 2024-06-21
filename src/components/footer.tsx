import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="h-fit w-full py-[6vw] px-[10vw] bg-white grid gap-4 max-lg:gap-6 max-sm:gap-8 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="w-full h-[20vw] max-lg:h-[26vw] max-sm:h-fit gap-[0.2vw] flex flex-col">
                <Link href={"/"} className="h-fit w-fit flex justify-start">
                    <span className="text-[#0a1763] text-[1.7vw] max-sm:text-[4.5vw] max-lg:text-[2.3vw] font-bold">Nomad Coders</span>
                </Link>
                <span className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700">
                    Utilizamos pensamento crítico, <br />
                    planejamento estratégico, <br />
                    metodologias ágeis para criar <br />
                    soluções tecnológicas para a <br />
                    sua empresa.
                </span>
            </div>
            <div className="w-full h-[20vw] max-lg:h-[26vw] max-sm:h-fit gap-[0.2vw] flex flex-col">
                <h1 className="text-[1.7vw] max-sm:text-[4.5vw] max-lg:text-[2.3vw] font-bold text-black">Menu</h1>
                <ul className="">
                    <li>
                        <Link href={"/"} className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 hover:text-blue-700 hover:underline hover:decoration-solid hover:decoration-blue-700">home</Link>
                    </li>
                    <li>
                        <Link href={"/sobre-nos"} className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 hover:text-blue-700 hover:underline hover:decoration-solid hover:decoration-blue-700">sobre</Link>
                    </li>
                    <li>
                        <Link href={"/eventos"} className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 hover:text-blue-700 hover:underline hover:decoration-solid hover:decoration-blue-700">eventos</Link>
                    </li>
                    <li>
                        <Link href={"/portifolio"} className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 hover:text-blue-700 hover:underline hover:decoration-solid hover:decoration-blue-700">portifólio</Link>
                    </li>
                    <li>
                        <Link href={"/contacto"} className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 hover:text-blue-700 hover:underline hover:decoration-solid hover:decoration-blue-700">contacto</Link>
                    </li>
                </ul>
            </div>
            <div className="w-full h-[20vw] max-lg:h-[26vw] max-sm:h-fit gap-[0.2vw] flex flex-col">
                <h1 className="text-[1.7vw] max-sm:text-[4.5vw] max-lg:text-[2.3vw] font-bold text-black">Contactos</h1>
                <div className="flex flex-col gap-[0.7vw]">
                    <Link href={""} className="flex items-center group">
                        <Mail className="text-[1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 group-hover:text-blue-700" />
                        <span className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 group-hover:text-blue-700">nomadcoders@gmail.com</span>
                    </Link>
                    <Link href={""} className="flex items-center group">
                        <PhoneCall className="text-[1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 group-hover:text-blue-700" />
                        <span className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700 group-hover:text-blue-700">+244 999 999 999</span>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[20vw] max-lg:h-[26vw] max-sm:h-fit gap-[0.2vw] flex flex-col">
                <h1 className="text-[1.7vw] max-sm:text-[4.5vw] max-lg:text-[2.3vw] font-bold text-black">Localização</h1>
                <span className="text-[1.1vw] max-sm:text-[4vw] max-lg:text-[2.3vw] text-gray-700">
                    Edifício Sky One, 4º andar, <br />
                    Kinaxixi.Luanda - Angola.
                </span>
            </div>
        </footer>
    );
}