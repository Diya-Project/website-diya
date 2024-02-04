import Privilage from '@/sections/Privilage'
import Home from '@/sections/Home'
import Question from '@/sections/Question'
import Space from '@/sections/Space'
import Header from '@/templates/Header'
import React from 'react'
import Image from 'next/image'
import HomeImg from '@/assets/images/home.jpg'
import Wave from '@/templates/Wave'
import Graduate from '@/sections/Graduate'
import Registration from '@/sections/Registration'
import Footer from '@/templates/Footer'
import Gallery from '@/sections/Gallery'
import Wave2 from '@/templates/Wave2'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden'>
      <Image src={HomeImg} alt='' className='absolute w-[100vw] h-[120vh] -z-10 object-cover bg-fixed top-0' />
      <Home />
      <Privilage />
      <Wave2/>
      <Question />
      <Wave />
      <Graduate />
      <Registration />
      <Gallery />
    </div>
  )
}
