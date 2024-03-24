import React from 'react'

interface MisiAttributes{
    show:boolean;
    fill:Array<string>
}

export default function Misi({show,fill}:MisiAttributes) {
    return (
        <div className={`absolute md:w-[63.5%] w-[90%] top-[15%] md:h-[55%] h-[90%] md:overflow-y-hidden overflow-y-auto md:mt-0 -mt-10 transition-all ease-in-out duration-300 font-lato ${show ? "h-[55%]" : "h-[0%]"}`}>
            <div className={`transition-all ease-in-out duration-100 p-8 ml-2 ${show ? "text-black" : "text-transparent"}`}>
                <ul className={`list-decimal md:text-sm text-[1rem] text-justify space-y-2`}>
                    {fill.map((d,i)=>(
                        <li key={i}>{d}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
