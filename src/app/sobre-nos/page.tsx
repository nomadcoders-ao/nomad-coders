import ContadorAuto from "@/components/contadorauto";
import Image from "next/image";

export default function SobreNos(){
    return(
        <>
          <div className="w-full h-fit flex max-sm:flex-col-reverse items-end px-[7vw] gap-[2vw] bg-white relative pt-[35vw] max-sm:pt-[4vw]">
            <div className="w-full h-fit">
              <Image className="w-full h-fit object-contain border-4 border-white rounded-xl z-40" alt="" width={1000} height={700} src={"/assets/boyz mobile.jpg"} />
            </div>
            <div className="w-full h-fit flex flex-col pb-[24vw] max-sm:pb-[7vw]">
              <Image className="w-full h-fit object-contain border-4 border-white rounded-xl z-30" alt="" width={1000} height={700} src={"/assets/img1.jpg"} />
              <h1 className="font-black text-blue-700 text-[4.4vw] max-lg:text-[4.2vw] max-sm:text-[8.8vw] max-sm:text-justify">Somos uma equipa jovem e experiente</h1>
              <span className="text-gray-700 text-[1.5vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] max-sm:my-[1vw] text-justify mt-[0.8vw]">Bem-vindo à Nomadcoders, uma comunidade vibrante e colaborativacriada para desenvolvedores de todos os níveis de habilidade e especialidades.</span>
              <span className="text-gray-700 text-[1.5vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] max-sm:my-[1vw] text-justify mt-[0.8vw]">Nossa missão é fomentar a inovação, o aprendizado contínuo e o compartilhamento de conhecimento em um ambiente inclusivo e de apoio.</span>
            </div>
            <Image className="w-[45vw] max-lg:w-[50vw] h-fit object-contain border-4 border-white rounded-xl absolute top-[5%] left-[30%] z-0 max-sm:hidden max-sm:flex-none" alt="" width={1000} height={700} src={"/assets/img2.jpg"} />
          </div>
          <div className="w-full h-fit flex justify-between px-[20vw] max-sm:px-[7vw] max-sm:py-[3vw]">
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold text-blue-700 text-[4.4vw] max-lg:text-[4.2vw] max-sm:text-[8.8vw] text-center">+<ContadorAuto target={1} /></h1>
              <span className="text-gray-700 text-[1.5vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] text-center">Ano juntos <br /> Na Comunidade</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold text-blue-700 text-[4.4vw] max-lg:text-[4.2vw] max-sm:text-[8.8vw] text-center">+<ContadorAuto target={16} /></h1>
              <span className="text-gray-700 text-[1.5vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] text-center">Projectos <br /> Feitos por nós</span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="font-extrabold text-blue-700 text-[4.4vw] max-lg:text-[4.2vw] max-sm:text-[8.8vw] text-center">+<ContadorAuto target={30} /></h1>
              <span className="text-gray-700 text-[1.5vw] max-lg:text-[1.5vw] max-sm:text-[3.5vw] text-center">Membros <br /> Activos</span>
            </div>
          </div>
        </>
    );
}