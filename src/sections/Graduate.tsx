'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Cap from "@/assets/images/cap.png"
import Shafa from "/assets/safa-diya.jpg"
import Ayik from "/assets/ayik-diya.jpg"
import GraduateCard from '@/templates/GraduateCard'
import Slide from '@/components/slider'

function Graduate() {
    const [scrollShafa, setScrollShafa] = useState(false)
    const [scrollAyik, setScrollAyik] = useState(false)
    return (
        <div id='3' className='p-8 md:-mt-[25vh]'>
            <div className='flex justify-end gap-8'>
                <h1 className='text-4xl font-semibold text-blue-950 flex justify-end items-end py-3 uppercase font-lato'>Alumni</h1>
                <Image loading='lazy'placeholder="blur" src={Cap} alt='' className='md:w-[7%] w-[25%]' />
            </div>
            <div className='w-[100%] md:h-[110%] flex justify-center md:gap-0 gap-10 items-center mt-10'>
                <Slide>
                    <GraduateCard
                        image={'/assets/safa-diya.jpg'}
                        scroll={scrollShafa}
                        setScroll={setScrollShafa}
                        name='Muhammad Shafa'
                        job='Full Stack Engineer di PT Sharing Vision Indonesia (Bandung)'
                        text1='Di Diya saya belajar banyak hal, terutama di bidang teknologi informasi. Disana kita belajar dari nol dan materi yang kita pelajari relevan dengan kebutuhan industri sehingga sangat membantu di dunia kerja.Di Diya lingkungannya itu sangat bersahabat.Kita bisa tertawa dan bersenda gurau bersama mentor tanpa harus merasa sungkan.'
                        text2='Orang-orangnya juga ramah. Fasilitas di Diya juga lengkap mulai dari laptop untuk belajar dan kerja, wifi, kamar tidur, dapur dan kamar mandi. Terkadang mentor juga membawa buku untuk dipinjamkan (walaupun saya agak jarang membaca buku). Bahkan disana kita disediakan PS4. Jadi belajar di Diya itu nyaman dan menyenangkan.'
                    />
                    <GraduateCard
                        image={'/assets/ayik-diya.jpg'}
                        scroll={scrollAyik}
                        setScroll={setScrollAyik}
                        name='Ayyasy Rosadi'
                        job='Full Stack Engineer di PT Murni Development Indonesia (Jakarta)'
                        text1='Berawal dari latar belakang saya yang notabene hanya seorang santri dari sebuah pondok pesantren yang pada akhirnya ingin mencoba terjun ke dunia IT. Awalnya saya ragu dengan diri saya sendiri bisa ikut sampai sejauh ini tapi saya percaya satu hal, yaitu semua orang pasti bisa jika mereka mau berusaha,'
                        text2='itu adalah salah satu motivasi yang saya dapat ketika belajar di diya dan sampai sekarang ini saya selalu meyakini hal itu. Di diya kita dididik layaknya seorang teman yg sama-sama ingin belajar, karena kesalahan itu bukan hal yang memalukan melainkan sebuah pelajaran yang bisa diambil hasilnya dan dikembangkan menjadi lebih baik lagi.'
                    />
                </Slide>
            </div>
        </div>
    )
}

export default Graduate