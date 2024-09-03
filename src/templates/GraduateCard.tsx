import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

interface CardGraduateAttributes {
    image: StaticImageData|string;
    scroll: boolean;
    setScroll: (e: boolean) => void;
    name: string;
    job: string
    text1: string;
    text2: string;
}

function CardGraduate({ image, scroll, setScroll, name, job, text1, text2 }: CardGraduateAttributes) {
    return (
        <div className='bg-white flex md:flex-row flex-col md:w-[55vw] mx-auto rounded-lg gap-2'>
            <div className='my-auto md:w-[55%] flex justify-center items-center'>
                <Image src={image} alt='' className='w-[100%] h-[100%] rounded-xl' width={'500'} height={'500'} />
            </div>
            <div className={`md:w-[45%] p-4 relative rounded-xl md:h-[80%] h-[25rem] overflow-y-auto overflow-x-hidden flex flex-col`}>
                <div>
                <h1 className={`md:text-2xl text-lg w-full font-bold font-lato transition-all ease-in-out duration-300 text-slate-800 ${scroll ? "text-transparent" : ""}`}>{name}</h1>
                <h1 className='h-[0.5px] w-[100%] bg-slate-400 my-2'></h1>
                <h1 className={`ease-in-out duration-300 md:text-sm font-lato text-xs text-blue-500 ${scroll ? "text-transparent" : ""}`}>{job}</h1>
                <h1 className='h-[0.5px] w-[100%] bg-slate-400 my-2'></h1>
                </div>
                <div className={`w-[100%] md:mt-4 mt-1 md:text-sm text-xs transition-all ease-in-out duration-300 md:py-0 py-2 space-y-5 ${scroll ? "text-transparent" : ""}`}>
                    <p>
                    {text1}
                    </p>
                    <p>
                    {text2}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardGraduate