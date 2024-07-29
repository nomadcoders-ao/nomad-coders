import Image from "next/image";
import Link from "next/link";


export default function Portifolio(){
    return(
        <>
            <div className="w-full h-[45vw] max-lg:h-[55vw] max-sm:h-[150vw] px-[7vw] max-lg:pl-[7vw] max-sm:pl-[7vw] flex items-center">
                <div className="w-full h-fit flex max-sm:flex-col-reverse max-sm:gap-[0.5vw] justify-between">
                    <div className="w-[45%] max-sm:w-full h-full gap-[0.1vw] max-lg:gap-[0.1vw] flex flex-col">
                        <h1 className="font-extrabold text-blue-700 text-[4.5vw] max-lg:text-[4vw] max-sm:text-[8.8vw]">Nosso Portifólio</h1>
                        <span className="text-gray-700 text-[1vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] max-sm:my-[1vw] text-justify mt-[0.8vw]">Quer você seja uma empresa em busca de desenvolvedores habilidosos, um empreendedor com uma visão revolucionária ou um entusiasta da tecnologia em busca de um ambiente colaborativo para aprender e crescer, o Nerdy Coders é o nosso compromisso com a excelência.</span>
                        <span className="text-gray-700 text-[1vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] max-sm:my-[1vw] text-justify mt-[0.8vw]">Se você está em busca de parceiros para projetos tecnológicos ou deseja saber mais sobre a nossa comunidade, entre em contato conosco. Estamos sempre abertos a novas ideias e oportunidades de</span>
                    </div>
                    <div className="w-[50%] max-sm:w-full h-full">
                        <Image className="w-full rounded-xl object-cover" src={"/bg4.svg"} width={700} height={1000} alt=""/>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit px-[7vw] flex flex-col gap-[0.5vw] max-sm:gap-[3vw]">
                <h1 className="font-extrabold text-blue-700 text-[2vw] max-lg:text-[3vw] max-sm:text-[5.5vw] mb-3">Projectos em que nós trabalhamos</h1>
                <div className="w-full h-fit grid gap-[2vw] max-sm:gap-6 grid-cols-2 max-sm:grid-cols-1">
                <Link href={""} className="w-full h-fit"><Image className="w-full rounded-xl object-cover" src={"/bg5.svg"} width={700} height={1000} alt=""/></Link>
                <Link href={""} className="w-full h-fit"><Image className="w-full rounded-xl object-cover" src={"/bg6.svg"} width={700} height={1000} alt=""/></Link>
                <Link href={""} className="w-full h-fit"><Image className="w-full rounded-xl object-cover" src={"/bg7.svg"} width={700} height={1000} alt=""/></Link>
                <Link href={""} className="w-full h-fit"><Image className="w-full rounded-xl object-cover" src={"/bg8.svg"} width={700} height={1000} alt=""/></Link>
                </div>
                <Link href={""} className="text-blue-700 text-[1.5vw] max-lg:text-[2.5vw] max-sm:text-[4vw] max-sm:my-[1vw] text-center mt-[0.8vw]">Ver Mais</Link>
            </div>
        </>
    );
}