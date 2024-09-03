import Image from 'next/image'
import React from 'react'

type Prop={
  link:string
}

export default function CompanyCard({link}:Prop) {
  return (
    <div className='md:w-[32%] w-[100%] h-[90%] p-8 flex flex-col items-center justify-center border-2 border-dashed border-sky-600 rounded-lg'>
        <Image src={link} alt='mdev' width={500} height={500} loading='lazy'/>
    </div>
  )
}
