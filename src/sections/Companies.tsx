import CompanyCard from '@/templates/CompanyCard'
import React from 'react'

export default function Companies() {
  return (
    <div className='bg-neutral-100 md:h-[50vh] p-4 flex items-center flex-col gap-5'>
        <h1 className='font-lato text-3xl font-semibold'>Talent kami tersebar di</h1>
        <div className='flex flex-wrap gap-4 w-[100%] h-[100%] justify-center'>
            <CompanyCard link='https://sharingvision.com/wp-content/uploads/2023/06/Logo-Sharingvision-Main.png'/>
            <CompanyCard link='https://mdev.co.id/wp-content/uploads/2024/06/logo_mdi_fix.svg'/>
            <CompanyCard link='https://asaba.co.id/_next/image?url=%2Fassets%2Fimage%2Fasaba_logo_color.png&w=640&q=100'/>  
        </div>
    </div>
  )
}
