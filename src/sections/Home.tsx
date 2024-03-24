'use client'
import React, { useState } from 'react'
import { Flip } from 'react-awesome-reveal'
import Button from '@/templates/Button'
import Visi from '@/templates/Visi'
import Misi from '@/templates/Misi'

export default function Home() {
  const [arrowVisi, setArrowVisi] = useState(false)
  const [arrowMisi, setArrowMisi] = useState(false)
  const misi = [
    "Menyiapkan sumber daya manusia siap kerja, handal, professional dan berkualitas.",
    "Membentuk sumber daya manusia yang berakhlak dan memiliki budaya kerja yang baik.",
    "Menyusun Standar kompetensi lulusan dan kurikulum sesuai dengan kebutuhan dunia usaha dan industri.",
    "Menyelenggarakan Pendidikan Non-formal sebagai wujud pengabdian kepada masyarakat.",
    "Melakukan kerjasama kemitraan yang strategis dengan dunia usaha dan industri."
  ]
  return (
    <div id='1' className='h-[90vh] mt-[10vh] w-[100vw] flex justify-center items-center'>
      <div className='flex md:flex-row flex-col justify-between w-[95%] md:h-[90%] h-[90%]'>
        <div className='text-slate-100 md:w-[40%] w-[100%] md:h-[80%] h-[90%] my-auto flex flex-col'>
          <h1 className='md:text-[5.5rem] text-[3rem] md:text-left text-center font-lato font-semibold tracking-wide text-white'>Diya</h1>
          <h1 className='md:text-[5.5rem] text-[3rem] md:text-left text-center font-lato font-semibold tracking-wide md:-mt-10 text-white'>Bootcamp</h1>
          <h1 className='text-[1.5rem] md:w-[90%] w-[100%] ml-1 md:text-left font-lato text-center font-bold'>Bergabung menjadi peserta belajar dan raih impian kerja setelah lulus</h1>
          <div className='flex flex-row gap-10 md:w-[90%] w-[100%] h-[10rem] md:justify-start justify-center items-center ' >
            <Button title='Visi' show={arrowVisi} mouseEnter={() => setArrowVisi(true)} mouseOut={() => setArrowVisi(false)} />
            <Button title='Misi' show={arrowMisi} mouseEnter={() => setArrowMisi(true)} mouseOut={() => setArrowMisi(false)} color />
          </div>
        </div>
        <div className='md:w-[50%] w-[100%] md:h-[100%] h-full relative md:mt-0 mt-5`'>
          <div className='h-[100%]'>
            <div className='w-[100%] h-[100%] flex justify-center items-center'>
              <Flip triggerOnce duration={1500} className={`absolute md:w-[63.5%] w-[90%] top-[15%] md:h-[55%] h-[90%] md:mt-0 -mt-10 bg-white shadow-lg transition-all ease-in-out duration-100 rounded-lg  ${!arrowVisi && !arrowMisi ? "h-[55%] text-[#00698f]" : "h-[0%] text-transparent"}`}>
                <div className='flex justify-center items-center h-[100%] flex-col md:text-4xl font-semibold font-lato'>
                  <h1>Selamat Datang</h1>
                  <h1>di</h1>
                  <h1>Diya Bootcamp</h1>
                </div>
              </Flip>
              <Visi show={arrowVisi} fill='Mewujudkan sumber daya manusia yang handal, professional, kreatif dalam bidang IT. Berakhlak mulia serta cakap dalam bermitra untuk menghadapi tantangan era global.' />
              <Misi show={arrowMisi} fill={misi} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
