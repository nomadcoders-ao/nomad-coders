import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-[704px] boysbg pl-[15vw] max-lg:pl-[10vw] max-sm:pl-[7vw] flex flex-col justify-center">
        <h1 className="font-extrabold text-white text-[3.5vw] max-lg:text-[4.5vw] max-sm:text-[6.5vw]">
          Na <span className="underline decoration-solid decoration-blue-700">NomadCoders,</span> <br />
          reunimos desenvolvedores <br />
          feito por Afonso Esteves
        </h1>
        <span className="text-white text-[1.2vw] max-lg:text-[2.2vw] max-sm:text-[3.2vw]">Permite que histórias sejam compartilhadas</span>
        <Link href={""} className="w-[18vw] h-[3vw] max-lg:w-[24vw] max-lg:h-[5vw] max-sm:w-[44vw] max-sm:h-[10vw] bg-blue-700 rounded-full flex justify-center items-center gap-[0.7vw] mt-[4vw] max-lg:mt-[6vw] max-sm:mt-[15vw] group focus:bg-white focus:duration-300">
          <span className="text-white text-[1vw] max-lg:text-[1.6vw] max-sm:text-[3vw] group-focus:text-blue-700 group-focus:duration-300">Sobre a comunidade</span>
          <MoveRight className="text-white text-[1vw] max-lg:text-[1.6vw] max-sm:text-[3vw] pt-[0.1vw] group-focus:text-blue-700 group-focus:duration-300" />
        </Link>
      </div>
      <div className="w-full h-fit bg-white flex flex-col pb-[15vw] pt-[5vw] pl-[10vw] max-lg:pl-[7vw] max-sm:px-[10vw] relative">
        <div className="flex w-full h-fit gap-[0.5vw] items-start max-sm:flex-col-reverse max-sm:mb-[6vw]">
          <Image className="w-[45vw] h-[30vw] max-lg:w-[50vw] max-sm:w-full max-sm:h-[50vw] rounded-xl object-cover" alt="" width={1000} height={700} src={"/assets/menina1.jpg"} />
          <div className="h-fit w-fit flex flex-col justify-start pl-[1vw]">
            <h1 className="font-extrabold text-blue-700 text-[3.5vw] max-lg:text-[3vw] max-sm:text-[6.5vw] max-sm:text-center max-sm:mb-[6vw]">
              Na Nomadcoders, <br />
              você encontra todo <br />
              tipo de coisa
            </h1>
            <span className="text-gray-700 text-[1vw] max-lg:text-[1.5vw] max-sm:text-[3.2vw] max-sm:text-center max-sm:my-[3vw]">
              Permite que histórias sejam <br />
              compartilhadas Permite quehistórias sejam <br />
              compartilhadas Permite que histórias sejamcompartilhadas <br />
              Permite que histórias sejam compartilhadas 
            </span>
          </div>
        </div>
        <div className="flex gap-[4vw] max-lg:gap-[1.2vw] max-sm:justify-between pt-[1vw]">
          <div className="h-fit w-fit">
            <h1 className="font-extrabold text-blue-700 text-[3vw] max-lg:text-[3vw] max-sm:text-[6.5vw]">50 +</h1>
            <span className="text-gray-700 text-[1.2vw] max-lg:text-[1.5vw] max-sm:text-[3.2vw]">Projetos feitos</span>
          </div>
          <div className="h-fit w-fit">
            <h1 className="font-extrabold text-blue-700 text-[3vw] max-lg:text-[3vw] max-sm:text-[6.5vw]">30 +</h1>
            <span className="text-gray-700 text-[1.2vw] max-lg:text-[1.5vw] max-sm:text-[3.2vw]">Clientes datisfeitos</span>
          </div>
          <div className="h-fit w-fit">
            <h1 className="font-extrabold text-blue-700 text-[3vw] max-lg:text-[3vw] max-sm:text-[6.5vw]">50 +</h1>
            <span className="text-gray-700 text-[1.2vw] max-lg:text-[1.5vw] max-sm:text-[3.2vw]">Projetos feitos</span>
          </div>
        </div>
        <Image className="w-[35vw] h-[20vw] max-sm:w-full max-sm:h-[50vw] rounded-xl object-cover max-sm:static absolute border-4 border-white top-[30vw] left-[45vw] max-lg:top-[30vw] max-lg:left-[47vw]" alt="" width={1000} height={700} src={"/assets/menina no pc.jpg"} />
      </div>
    </>
  );
}
