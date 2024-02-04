import React from 'react'

interface VisiAttributes{
    show:boolean;
    fill:string
}

export default function Visi({show,fill}:VisiAttributes) {
    return (
        <div className={`absolute md:w-[63.5%] w-[90%] top-[15%] md:h-[55%] h-[90%] md:mt-0 -mt-10 md:overflow-y-hidden overflow-y-auto transition-all ease-in-out duration-300 font-lato ${show ? "h-[55%]" : "h-[0%]"} `}>
            <div className={`transition-all ease-in-out duration-300 md:p-8 p-4 ${show ? "text-black" : "text-transparent"}`}>
                <h1 className='md:text-xl font-light'>{fill}</h1>
            </div>
        </div>
    )
}
