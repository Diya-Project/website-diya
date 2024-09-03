import Image from 'next/image'
import React from 'react'

type Prop={
  link:string,
  borderR?:boolean
}

export default function CompanyCard({link,borderR}:Prop) {
  return (
    <div className={`md:w-[32%] w-[100%] h-[90%] p-8 flex flex-col items-center justify-center ${borderR ? 'md:border-r md:border-b-0 border-b border-sky-700':''}`}>
        <Image src={link} alt='mdev' width={500} height={500} loading='lazy'/>
    </div>
  )
}
