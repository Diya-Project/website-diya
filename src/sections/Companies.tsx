import Mdev from '@/assets/svg/Mdev'
import CompanyCard from '@/templates/CompanyCard'
import Image from 'next/image'
import React from 'react'

export default function Companies() {
  return (
    <div className='bg-neutral-100 md:h-[50vh] p-4 flex items-center flex-col gap-5'>
        <h1 className='font-lato text-3xl font-semibold'>Talent kami tersebar di</h1>
        <div className='flex flex-wrap gap-4 w-[100%] h-[100%] justify-center'>
            <CompanyCard borderR>
                <Image src={'/assets/sharing-vision-icon.png'} alt='vision' width={400} height={400} loading='lazy'/>
            </CompanyCard>
            <CompanyCard borderR>
                <Mdev/>
            </CompanyCard>  
            <CompanyCard>
                <Image src={'/assets/asaba-innotech.webp'} alt='vision' width={400} height={400} loading='lazy'/>
            </CompanyCard>  

        </div>
    </div>
  )
}
