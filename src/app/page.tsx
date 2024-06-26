import ContadorAuto from "@/components/contadorauto";
import SlideAuto from "@/components/slideauto";
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
      <div className="w-full h-fit bg-white flex flex-col pb-[19vw] pt-[5vw] pl-[10vw] max-lg:pl-[7vw] max-sm:px-[7vw] relative">
        <div className="flex w-full h-fit gap-[0.5vw] items-start max-sm:flex-col">
          <Image className="w-[45vw] h-[30vw] max-lg:w-[50vw] max-sm:w-full max-sm:h-[50vw] rounded-xl object-cover" alt="" width={1000} height={700} src={"/assets/menina1.jpg"} />
          <div className="h-fit w-fit flex flex-col justify-start pl-[1vw]">
            <h1 className="font-extrabold text-blue-700 text-[3.5vw] max-lg:text-[3vw] max-sm:text-[8.8vw]">
              Na Nomadcoders, <br className="max-sm:hidden max-sm:flex-none" />
              você encontra todo <br className="max-sm:hidden max-sm:flex-none" />
              tipo de coisa
            </h1>
            <span className="text-gray-700 text-[1vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] max-sm:my-[1vw] text-justify mt-[0.8vw]">
              Permite que histórias sejam <br className="max-sm:hidden max-sm:flex-none" />
              compartilhadas Permite quehistórias sejam <br className="max-sm:hidden max-sm:flex-none" />
              compartilhadas Permite que histórias sejamcompartilhadas <br className="max-sm:hidden max-sm:flex-none" />
              Permite que histórias sejam compartilhadas 
            </span>
          </div>
        </div>
        <Image className="w-[35vw] h-[20vw] max-sm:w-full max-sm:h-[50vw] rounded-xl object-cover max-sm:static absolute border-4 border-white top-[30vw] left-[45vw] max-lg:top-[30vw] max-lg:left-[47vw] max-sm:hidden max-sm:float-none" alt="" width={1000} height={700} src={"/assets/menina no pc.jpg"} />
      </div>
      <div className="w-full h-fit bgblue flex justify-center items-center">
        <div className="w-full h-fit px-[7vw] py-[3vw] max-sm:py-[7vw] bg-blue-700 bg-opacity-50 flex flex-col gap-[2vw] max-sm:gap-[7vw] items-center">
          <h1 className="font-extrabold text-white text-[3vw] max-lg:text-[4.5vw] max-sm:text-[5.5vw] text-center">
            Melhor área para ver o que nossa <br className="max-sm:hidden max-sm:flex-none" />
            Comunidade oferece!
          </h1>
          <div className="w-full h-fit grid gap-4 max-lg:gap-6 max-sm:gap-14 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <Link href={""} className="w-full h-fit flex flex-col items-center justify-center gap-[0.3vw] max-lg:gap-[0.5vw] max-sm:gap-[1vw]">
              <div className="w-[10vw] h-[10vw] max-lg:w-[15vw] max-lg:h-[15vw] max-sm:h-[30vw] max-sm:w-[30vw] rounded-full border-4 m-[0.5vw] border-white flex items-center justify-center">
                <div className="w-[94%] h-[94%] rounded-full bg-white flex items-center justify-center">
                  <Image className="h-[60%] w-fit container" alt="" height={1000} width={1000} src={"/icon1.svg"}/>
                </div>
              </div>
              <span className="text-center text-[1.3vw] max-lg:text-[2.7vw] max-sm:text-[4vw] font-bold text-white">Informações e feedback</span>
              <span className="text-center text-[0.8vw] max-lg:text-[1.8vw] max-sm:text-[3vw] text-white">Os membros podem preencher para expressar suas preferências ou necessidades, ajudando a comunidade a entender melhor como servir seus membros1</span>
            </Link>
            <Link href={""} className="w-full h-fit flex flex-col items-center justify-center gap-[0.3vw] max-lg:gap-[0.5vw] max-sm:gap-[1vw]">
              <div className="w-[10vw] h-[10vw] max-lg:w-[15vw] max-lg:h-[15vw] max-sm:h-[30vw] max-sm:w-[30vw] rounded-full border-4 m-[0.5vw] border-white flex items-center justify-center">
                <div className="w-[94%] h-[94%] rounded-full bg-white flex items-center justify-center">
                  <Image className="h-[60%] w-fit container" alt="" height={1000} width={1000} src={"/icon2.svg"}/>
                </div>
              </div>
              <span className="text-center text-[1.3vw] max-lg:text-[2.7vw] max-sm:text-[4vw] font-bold text-white">Desenvolvedores experientes</span>
              <span className="text-center text-[0.8vw] max-lg:text-[1.8vw] max-sm:text-[3vw] text-white">Um desenvolvedor verificado ou aprovado, indicando confiabilidade e autenticidade.</span>
            </Link>
            <Link href={""} className="w-full h-fit flex flex-col items-center justify-center gap-[0.3vw] max-lg:gap-[0.5vw] max-sm:gap-[1vw]">
              <div className="w-[10vw] h-[10vw] max-lg:w-[15vw] max-lg:h-[15vw] max-sm:h-[30vw] max-sm:w-[30vw] rounded-full border-4 m-[0.5vw] border-white flex items-center justify-center">
                <div className="w-[94%] h-[94%] rounded-full bg-white flex items-center justify-center">
                  <Image className="h-[60%] w-fit container" alt="" height={1000} width={1000} src={"/icon3.svg"}/>
                </div>
              </div>
              <span className="text-center text-[1.3vw] max-lg:text-[2.7vw] max-sm:text-[4vw] font-bold text-white">Suporte Personalizado</span>
              <span className="text-center text-[0.8vw] max-lg:text-[1.8vw] max-sm:text-[3vw] text-white">Desenvolvedores podem esperar receber assistência direcionada e personalizada ao escolher o serviço.</span>
            </Link>
            <Link href={""} className="w-full h-fit flex flex-col items-center justify-center gap-[0.3vw] max-lg:gap-[0.5vw] max-sm:gap-[1vw]">
              <div className="w-[10vw] h-[10vw] max-lg:w-[15vw] max-lg:h-[15vw] max-sm:h-[30vw] max-sm:w-[30vw] rounded-full border-4 m-[0.5vw] border-white flex items-center justify-center">
                <div className="w-[94%] h-[94%] rounded-full bg-white flex items-center justify-center">
                  <Image className="h-[60%] w-fit container" alt="" height={1000} width={1000} src={"/icon4.svg"}/>
                </div>
              </div>
              <span className="text-center text-[1.3vw] max-lg:text-[2.7vw] max-sm:text-[4vw] font-bold text-white">Profissional de suporte </span>
              <span className="text-center text-[0.8vw] max-lg:text-[1.8vw] max-sm:text-[3vw] text-white">Há profissionais disponíveis para ajudar a escolher os serviços mais adequados às necessidades específicas.</span>
            </Link>
          </div>
        </div>
      </div>
      <SlideAuto/>
    </>
  );
}
