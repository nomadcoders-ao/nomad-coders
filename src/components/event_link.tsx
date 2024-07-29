import Link from "next/link";

interface List_Item{
  time?:string;
  date?:string;
  bg?:string;
  name?:string;
  descrition?:string;
}

export default function Event_Link({time, date, bg, name, descrition}:List_Item) {
  return(
    <div style={{backgroundImage:bg}} className={'w-full h-full rounded-xl bg-cover bg-no-repeat bg-center'}>
      <Link href={""} className="w-full h-full p-[2vw] flex flex-col justify-end">
        <div className="w-full max-lg:h-[30%]">
          <div className="flex gap-[1vw] w-full h-[25%] overflow-hidden items-start">
            <span className="text-white text-[1vw] max-lg:text-[1.7vw] max-sm:text-[3.5vw]">{time}</span>
            <span className="text-white text-[1vw] max-lg:text-[1.7vw] max-sm:text-[3.5vw]">{date}</span>
          </div>
          <div className="w-full h-[50%] overflow-hidden items-start max-lg:items-center flex">
            <h1 className="font-extrabold text-white text-[2vw] max-lg:text-[2.8vw] max-sm:text-[6.5vw] max-sm:my-[0.5vw]">{name}</h1>
          </div>
          <div className="w-full h-[25%] overflow-hidden items-start flex">
            <span className="text-white text-[1vw] max-lg:text-[1.7vw] max-sm:text-[3.5vw]">{descrition}</span> 
          </div>
        </div>
      </Link>
    </div>
  );
}