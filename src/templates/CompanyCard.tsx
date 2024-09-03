import Image from 'next/image'
import React, { ReactNode } from 'react'

type Prop={
  borderR?:boolean,
  children:ReactNode
}

export default function CompanyCard({borderR,children}:Prop) {
  return (
    <div className={`md:w-[32%] w-[100%] h-[90%] p-8 flex flex-col items-center justify-center ${borderR ? 'md:border-r md:border-b-0 border-b border-sky-700':''}`}>
        {children}
    </div>
  )
}
