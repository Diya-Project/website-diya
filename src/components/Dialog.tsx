'use client'
import React, { ReactNode } from 'react'
import { HiOutlineXMark } from "react-icons/hi2"

function Dialog({ show, toggle, children,setMargin }: { show: boolean, toggle: (e: boolean) => void, children: ReactNode,setMargin:string }) {
    return (
        <div className={`bg-black fixed top-0 left-0 z-10 w-full bg-opacity-10 h-full flex justify-center transition-all ease-in-out duration-300 ${show ? "visible" : "invisible"} overflow-y-auto`}>
            <div className='flex my-10 flex-col '>
                <div className={`bg-white shadow-2xl relative ite rounded-md mx-1 z-50  ${show ? `visible bg-opacity-100 text-opacity-100 ${setMargin}` : "md:-mt-[170vw] -mt-[400vw]"} transition-all ease-in-out duration-700`}>
                    <div className={`absolute md:right-6 right-3 top-3 cursor-pointer transition-all ease-in-out duration-300`} onClick={() => toggle(false)}><HiOutlineXMark className='w-8 h-8' /></div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialog