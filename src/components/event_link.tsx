import Link from "next/link";

export default function Event_Link() {
  return(
    <div className="w-full h-full rounded-xl bg-[url(/bg2.svg)] bg-cover bg-no-repeat">
      <Link href={""} className="w-full h-full p-[2vw] flex flex-col justify-end">
        <div className="flex gap-[1vw]">
          <span className="text-white text-[1vw] max-lg:text-[1.7vw] max-sm:text-[3.5vw]">2/5AM</span>
          <span className="text-white text-[1vw] max-lg:text-[1.7vw] max-sm:text-[3.5vw]">05/07/2024</span>
        </div>
        <div>
          <h1 className="font-extrabold text-white text-[2.5vw] max-lg:text-[4vw] max-sm:text-[6.5vw] max-sm:my-[0.5vw]">Eat Sleep Repeat</h1>
          <span className="text-white text-[1vw] max-lg:text-[1.7vw] max-sm:text-[3.5vw]">Eat Sleep Repeat um evento de desenvolvedores aqui na comunidade</span>
        </div>
      </Link>
    </div>
  );
}