import { data } from "@/data/data"
import Image from "next/image"
import Link from "next/link"

export default function Bodcast(){
    const dat=data[2].cards

    return(
        <div className="container mx-auto px-8 md:px-52 py-8 grid grid-cols-1 md:grid-cols-3
        gap-[60px] place-items-center bg-gray-950 dark:bg-gray-300">
            {dat.map((e:any,i:number)=>(
                <Link href={e.li}
                className=" w-full h-[300px] relative overflow-hidden
                flex justify-center items-center rounded-xl shadow-lg shadow-sky-900" 
                key={i}>
                    <div className="w-full h-[100%] rounded-xl">
                        <Image className="w-full h-full rounded-xl" src={require(`./../../../public/image/b/${e.img}.jpg`)} alt="m"/>
                    </div>
                    <p className="absolute bottom-0 w-full text-center text-gray-50 text-[25px] shadow-lg  shadow-black  p-2 py-12 bg-gray-950 opacity-80   ">{e.name}</p>

                </Link>
            ))}

        </div>
    )
}