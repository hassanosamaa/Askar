
import Image from 'next/image'
import Marquee from "react-fast-marquee";


export default function ScrollAni(){
    const data:any=[...Array(1).fill(5)]
    
    return(
<>
                <div className='h-[15vh]'>

                </div>
        <div className=" mx-auto px-16 flex justify-center items-center gap-[50px] bg-gray-900 fixed bottom-0 left-0 right-0
        dark:bg-gray-200">
                
                    <div className="flex flex-row mx-auto p-2 ">
                        {data.map((e:any)=>(
                            
                            <div  className="flex flex-row w-full " key={e}>
                                <div className='w-[50px] h-[50px] mx-2'>
                                    <Image className='w-full h-full ' src={require("./../../../public/image/scroll/m1.png")} alt='m'/>
                                </div> 
                                <div className='w-[50px] h-[50px] mx-2'>
                                    <Image className='w-full h-full ' src={require("./../../../public/image/scroll/mm1.png")} alt='m'/>
                                </div><div className='w-[50px] h-[50px] mx-2'>
                                    <Image className='w-full h-full ' src={require("./../../../public/image/scroll/mmm1.png")} alt='m'/>
                                </div>
                                <div className='w-[50px] h-[50px] mx-2'>
                                    <Image className='w-full h-full ' src={require("./../../../public/image/scroll/m2.png")} alt='m'/>
                                </div>
                                <div className='w-[50px] h-[50px] mx-2'>
                                    <Image className='w-full h-full ' src={require("./../../../public/image/scroll/mm2.png")} alt='m'/>
                                </div>
                                <div className='w-[50px] h-[50px] mx-2'>
                                    <Image className='w-full h-full ' src={require("./../../../public/image/scroll/mmm2.png")} alt='m'/>
                                </div>
                                <div className='w-[50px] h-[50px] mx-2'>
                                    <Image className='w-full h-full ' src={require("./../../../public/image/scroll/m3.png")} alt='m'/>
                                </div>
                            </div>
                        ))}
                    </div>
        </div>
</>
    )
}