import { data } from "@/data/data"

type Id={
    id:any
}
export default function AskarrCard({id}:Id){
    const dat=data[0].cards[Number(id)].elements
    const count=data[0].cards[Number(id)].count
    const mini=data[0].cards[Number(id)].mini
    const name=data[0].cards[Number(id)].name

    return(
        <div className="container mx-auto p-8 flex flex-col justify-center
        items-center gap-[50px] bg-gray-950 text-sky-200 text-[20px]
        dark:bg-gray-300  dark:text-gray-950
         ">
           
           <h1 className="text-gray-50 fixed top-14 w-full p-4 bg-gray-800 opacity-85 text-center dark:bg-gray-400 dark:text-gray-900">{name}</h1>
           <br/>
            {dat.map((e:string,i:number)=>(
                    <div key={i} className="bg-gray-800 dark:bg-gray-200 w-full p-4 rounded-xl shadow-lg shadow-sky-900 ">
                        <p key={i}
                         className="w-full md:w-[50%] font-extralight " >
                             {e}  </p>
                        <p className="text-red-500 font-bold pt-2 text-end ">{count[i]}</p>     
                        <p className="text-red-500 font-bold pt-2 text-start text-[15px]">{mini[i]}</p>     
                    </div>
            ))}
            
        </div>
    )
}