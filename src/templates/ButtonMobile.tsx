import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

interface ButtonMobileAttributes {
    show:boolean
    title:string
    mouseEnter?:()=>void
    mouseOut?:()=>void
    color?:boolean
    className?:string;
}

export default function ButtonMobile({show,mouseEnter,mouseOut,color,title,className}:ButtonMobileAttributes) {
    return (
        <div className={`${className} border-4 border-slate-100 px-5 flex ${color ? "bg-white text-[#00698f]" : ""}`} onMouseEnter={mouseEnter} onMouseLeave={mouseOut}>
            <h1 className={`text-2xl font-lato font-semibold transition-all ease-in-out duration-300 text-center w-[100%] ${show ? "" : ""}`}>{title}</h1>
            <FaArrowRightLong className={`w-32 h-8 transition-all ease-in-out duration-300 ${show ? color ?  "ml-[10%] fill-[#00698f]" : "ml-[10%] fill-white" : "-ml-[70%] fill-transparent"}`} />
        </div>
    )
}
