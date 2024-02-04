'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Bubble from "@/assets/images/bubble.png"
import { Bounce, Flip, Hinge, JackInTheBox, Roll, Zoom } from 'react-awesome-reveal'
import QuestionText from '@/templates/QuestionText'

export default function Question() {
  const [quest1, setQuest1] = useState(false)
  const [quest2, setQuest2] = useState(false)
  const [quest3, setQuest3] = useState(false)
  return (
    <div className='w-[100vw] bg-[#00274a] p-8'>
      <div className='flex'>
        <Image src={Bubble} alt='' className='w-44' />
        <h1 className='text-[2rem] font-semibold md:-ml-20 -ml-14 md:mt-12 mt-7 text-slate-100 font-lato uppercase'>Frequently Asked Question</h1>
      </div>
      <div className='my-10 md:px-10 text-slate-100 flex flex-col gap-8 h-[65%]'>
        <QuestionText
          duration={1000}
          question='Apa itu diya bootcamp?'
          answer='Diya Bootcamp adalah tempat belajar pemrograman, dimana kurikulumnya sudah disesuaikan dengan kebutuhan industri. Disini kamu akan belajar secara intensif selama 2 tahun (beasiswa) dan 1 tahun 2 bulan (reguler).'
        />
        <QuestionText
          className='flex justify-end flex-col items-end text-right '
          duration={1500}
          question='Apa itu bootcamp beasiswa?'
          answer='Bootcamp Beasiswa adalah program yang di khususkan untuk mereka yang kurang mampu secara finansial saat ingin melanjutkan pendidikan ke jenjang yang lebih tinggi. Bagi mereka tersedia layanan belajar gratis.'
        />
        <QuestionText
          duration={2000}
          question='Apa itu bootcamp reguler?'
          answer='Bootcamp reguler adalah program belajar berbayar yang disediakan oleh Diya Bootcamp untuk mengakomodir anak-anak muda yang ingin mengupgrade skill dibidang IT dan mampu membayar biaya pendidikan namun belum menemukan tempat belajar yang tepat.'
        />
      </div>
    </div>
  )
}
