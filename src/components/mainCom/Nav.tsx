"use client"
import Link from "next/link";
import { useState } from "react";

export default function Nav(){
    const [option,setOption]=useState<string>("a")
    const [mood,setmood]=useState<boolean>(true)
    const dark=(event:React.MouseEvent<HTMLDivElement>)=>{
        setmood(!mood)
        
        if(mood===false){
        const root = window.document.body;
        root.classList.add("dark")
        }
        else if(mood===true){
            const root = window.document.body;
        root.classList.remove("dark")
        }

    }
  
    return(
        <>
        <div className="container mx-auto p-2 h-[10vh]
        flex flex-row justify-between  items-center 
        bg-gray-900 dark:bg-gray-200 text-gray-200 fixed right-0 left-0 z-10 
         ">

            <Link 
            href={"/"} className="w-[13%] text-center text-[23px] text-sky-500 dark:text-gray-950 ">وعي</Link>
            <div className="flex flex-row justify-evenly items-center w-[65%] md:w-[50%]
            gap-[10px]
             ">
                <Link  onClick={()=>{setOption("a")}}  className={option==="a"?"active":"noactive"} href={"/a"}>الاذكار</Link>
                <Link onClick={()=>{setOption("d")}} className={option==="d"?"active":"noactive"} href={"/d"}>الأدعية</Link>
                <Link  onClick={()=>{setOption("b")}} className={option==="b"?"active":"noactive"} href={"/b"}>بودكاست</Link>
            </div>
            <div
            
             >
                <label 
                 className="relative cursor-pointer">
                    <input className="peer hidden" type="checkbox"/>
                    <div className=" w-10 h-8 "></div>
                    <div   onClick={dark}
                    className="absolute top-1 left-2 opacity-100 peer-checked:opacity-0 transition duration-300 bg-gray-800 px-2 rounded-full "><i className="icon-moon-o  text-sky-500 "></i></div>
                    <div   onClick={dark}
                   className="absolute top-1 left-2 opacity-0 peer-checked:opacity-100 transition duration-300 bg-gray-800 px-2 rounded-full dark:bg-gray-400"><i className="icon-sun  text-yellow-400 "></i></div>
                </label>
            </div>
        </div>
        <div className="h-[10vh] w-full bg-gray-900 dark:bg-gray-200"></div>
        </>
    )
}