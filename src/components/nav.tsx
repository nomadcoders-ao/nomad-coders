import Link from "next/link";

export default function Nav(){
    return(
        <header className="w-full max-sm:h-[18vw] h-[4vw] bg-white flex justify-between items-center px-[7vw] max-sm:relative">
            <Link href={""}>dfgsfgsf</Link>
            <button className="flex-none hidden max-sm:flex">gg</button>
            <ul className="flex gap-[3vw] max-sm:w-full max-sm:flex-col max-sm:absolute max-sm:top-full bg-white">
                 <li><Link href={""} className="text-[1.2vw] max-sm:text-[4vw] font-semibold text-gray-700 hover:text-blue-700 hover:duration-500 hover:decoration-solid hover:underline">Home</Link></li>
                 <li><Link href={""} className="text-[1.2vw] max-sm:text-[4vw] font-semibold text-gray-700 hover:text-blue-700 hover:duration-500 hover:decoration-solid hover:underline">Sobre Nós</Link></li>
                 <li><Link href={""} className="text-[1.2vw] max-sm:text-[4vw] font-semibold text-gray-700 hover:text-blue-700 hover:duration-500 hover:decoration-solid hover:underline">Eventos</Link></li>
                 <li><Link href={""} className="text-[1.2vw] max-sm:text-[4vw] font-semibold text-gray-700 hover:text-blue-700 hover:duration-500 hover:decoration-solid hover:underline">Portifolio</Link></li>
                 <li><Link href={""} className="text-[1.2vw] max-sm:text-[4vw] font-semibold text-gray-700 hover:text-blue-700 hover:duration-500 hover:decoration-solid hover:underline">Contacto</Link></li>
            </ul>
        </header>
    );
}