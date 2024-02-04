import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

interface CardGraduateAttributes {
    image: StaticImageData;
    scroll: boolean;
    setScroll: (e: boolean) => void;
    name: string;
    job: string
    text1: string;
    text2: string;
}

function CardGraduate({ image, scroll, setScroll, name, job, text1, text2 }: CardGraduateAttributes) {
    return (
        <div className='border border-dashed border-spacing-x-px border-slate-800 bg-white shadow-xl flex md:flex-row flex-col md:w-[50vw] mx-auto rounded-lg'>
            <div className='my-auto md:w-[50%] h-[100%] flex justify-center items-center'>
                <Image src={image} alt='' className='p-2 w-[90%]' />
            </div>
            <div className={`md:w-[50%] p-4 text-slate-100 bg-[#00274a] relative md:rounded-r-lg rounded-r-none md:rounded-b-none rounded-b-lg`}>
                <h1 className={`text-xl font-semibold font-lato transition-all ease-in-out duration-300 ${scroll ? "text-transparent" : ""}`}>{name}</h1>
                <h1 className={`transition-all ease-in-out duration-300 md:text-lg font-lato text-sm ${scroll ? "text-transparent" : ""}`}>{job}</h1>
                <div className={`w-[100%] md:mt-4 mt-1 md:text-lg text-sm transition-all ease-in-out duration-300 ${scroll ? "text-transparent" : ""}`}>
                    {text1}
                    <h1 className='md:block hidden'>{text2}</h1>
                </div>
                <div className={`absolute right-0 top-0 md:hidden block  h-[100%] text-sm p-4 transition-all ease-in-out duration-300 ${scroll ? "w-[100%]" : "text-transparent"}`}>
                    {text2}
                </div>
                <div className='md:h-5 h-10 md:hidden block'>
                    <div className={`absolute bottom-3  ${scroll ? "left-3" : "right-3"}`}>
                        <FaArrowRight className={`w-7 h-7 cursor-pointer transition-all ease-in-out duration-300 ${scroll ? "rotate-180" : "rotate-0"}`} onClick={() => setScroll(!scroll)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardGraduate