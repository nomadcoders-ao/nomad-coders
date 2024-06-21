import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-[704px] boysbg pl-[15vw] max-lg:pl-[10vw] max-sm:pl-[7vw] flex flex-col justify-center">
        <h1 className="font-extrabold text-white text-[3.5vw] max-lg:text-[4.5vw] max-sm:text-[6.5vw]">
          Na <span className="underline decoration-solid decoration-blue-700">NomadCoders,</span> <br />
          reunimos desenvolvedores
        </h1>
        <span className="text-white text-[1.2vw] max-lg:text-[2.2vw] max-sm:text-[3.2vw]">Permite que histórias sejam compartilhadas</span>
        <Link href={""} className="w-[18vw] h-[3vw] max-lg:w-[24vw] max-lg:h-[5vw] max-sm:w-[44vw] max-sm:h-[10vw] bg-blue-700 rounded-full flex justify-center items-center gap-[0.7vw] mt-[4vw] max-lg:mt-[6vw] max-sm:mt-[15vw] group focus:bg-white focus:duration-300">
          <span className="text-white text-[1vw] max-lg:text-[1.6vw] max-sm:text-[3vw] group-focus:text-blue-700 group-focus:duration-300">Sobre a comunidade</span>
          <MoveRight className="text-white text-[1vw] max-lg:text-[1.6vw] max-sm:text-[3vw] pt-[0.1vw] group-focus:text-blue-700 group-focus:duration-300" />
        </Link>
      </div>
    </>
  );
}
