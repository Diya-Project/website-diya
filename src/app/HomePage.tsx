import Privilage from '@/sections/Privilage'
import Home from '@/sections/Home'
import Question from '@/sections/Question'
import React from 'react'
import Image from 'next/image'
import HomeImg from '@/assets/images/home.jpg'
import Wave from '@/templates/Wave'
import Graduate from '@/sections/Graduate'
import Registration from '@/sections/Registration'
import Gallery from '@/sections/Gallery'
import Wave2 from '@/templates/Wave2'
import Companies from '@/sections/Companies'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden'>
      <Image loading='eager'placeholder="blur" src={HomeImg} alt='background/home/ayyasy/projects/diya-nextjs/src/app/favicon.ico' className='absolute w-screen h-screen -z-10 object-cover' />
      <Home />
      <Privilage />
      <Wave2/>
      <Question />
      <Wave />
      <Graduate />
      <Companies/>
      <Registration />
      <Gallery />
    </div>
  )
}
