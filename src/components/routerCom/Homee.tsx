"use client"
import Qur from "../../../public/quran.json"
import  Lottie  from "lottie-react";
export default function Homee(){
    return(
        <div className="container mx-auto p-16 h-[75vh]
        flex justify-center items-center bg-gray-950
        dark:bg-gray-300">
                <Lottie className="w-full h-full "
                animationData={Qur}/>

                
        </div>
    )
}