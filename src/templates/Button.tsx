import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

interface ButtonAttributes {
    show: boolean
    title: string
    mouseEnter?: () => void
    mouseOut?: () => void
    color?: boolean
}

export default function Button({ show, mouseEnter, mouseOut, color, title }: ButtonAttributes) {
    return (
        <div className={`w-[40%] h-[40%] border-4 border-slate-100 flex justify-start items-center px-5 ${color ? "bg-white text-[#00698f]" : ""}`} onMouseEnter={mouseEnter} onMouseLeave={mouseOut}>
            <h1 className={`text-2xl font-lato font-semibold transition-all ease-in-out duration-300 text-center mx-auto w-[100%] ${show ? "" : ""}`}>{title}</h1>
            <FaArrowRightLong className={`w-32 h-8 transition-all ease-in-out duration-300 md:block hidden ${show ? color ? "ml-[10%] fill-[#00698f]" : "ml-[10%] fill-white" : "-ml-[70%] fill-transparent"}`} />
        </div>
    )
}
