'use client'
import React, { ReactNode } from 'react'
import { JackInTheBox } from 'react-awesome-reveal';

interface PrivilageCardAttributes {
    logo: ReactNode
    title: string;
    fill: string;
    duration: number
}

function PrivilageCard({ logo, title, fill, duration }: PrivilageCardAttributes) {
    return (
        <JackInTheBox duration={duration} >
            <div className='w-[100%] bg-white shadow-xl border border-dashed border-spacing-x-px border-slate-800 rounded-3xl p-3 hover:-mt-3 transition-all ease-in-out duration-300'>
                <div className=''>
                    {logo}
                </div>
                <div className='ml-2'>
                    <h1 className='text-xl font-semibold my-2 font-lato'>{title}</h1>
                    <p className='text-md my-2 font-lato'>{fill}</p>
                </div>
            </div>
        </JackInTheBox> 
    )
}

export default PrivilageCard