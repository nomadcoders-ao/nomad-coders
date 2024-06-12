import Link from "next/link";

export default function Nav(){
    return(
        <header className="w-full h-[4vw] bg-white flex justify-between items-center px-[4vw]">
            <Link href={""}>dfgsfgsf</Link>
            <ul className="flex gap-4">
                 <li><Link href={""}>fdkfhbldfjbgskdfj</Link></li>
                 <li><Link href={""}>fdkfhbldfjbgskdfj</Link></li>
                 <li><Link href={""}>fdkfhbldfjbgskdfj</Link></li>
                 <li><Link href={""}>fdkfhbldfjbgskdfj</Link></li>
                 <li><Link href={""}>fdkfhbldfjbgskdfj</Link></li>
            </ul>
        </header>
    );
}