'use client'
import Diniyyah from '@/assets/icons/diniyyah'
import Fullstack from '@/assets/icons/fullstack'
import Incubator from '@/assets/icons/incubator'
import Ruang from '@/assets/icons/ruang'
import Tutor from '@/assets/icons/tutor'
import Update from '@/assets/icons/update'
import PrivilageCard from '@/templates/PrivilageCard'
import React from 'react'
import { JackInTheBox, Zoom } from 'react-awesome-reveal'

export default function Introduction() {
    return (
        <div id='2' className='w-[100vw] py-[10vh] bg-white'>
            <div className='w-[95%] mx-auto'>
                <Zoom duration={2000} >
                    <h1 className='text-center font-lato font-semibold text-[2.5rem] text-slate-800 uppercase'>Keunggulan</h1>
                </Zoom>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                    <PrivilageCard
                        duration={2000}
                        logo={<Update />}
                        title='Skill up to date'
                        fill='Materi yang dipelajari terupdate sesuai perkembangan teknologi dan kebutuhan industri.'
                    />
                    <PrivilageCard
                        duration={2000}
                        logo={<Incubator />}
                        title='Inkubator'
                        fill='Lulusan siap kerja pada perusahaan-perusahaan mitra.'
                    />
                    <PrivilageCard
                        duration={2300}
                        logo={<Diniyyah />}
                        title='Diniyyah'
                        fill='Dukungan pembekalan ilmu agama.'
                    />
                    <PrivilageCard
                        duration={2600}
                        logo={<Fullstack />}
                        title='Fullstack dev'
                        fill='Penguasaan Frontend, backend dan mobile.'
                    />
                    <PrivilageCard
                        duration={2900}
                        logo={<Tutor />}
                        title='Tutor'
                        fill='Dibimbing oleh para tutor yang berpengalaman dibidangnya.'
                    />
                    <PrivilageCard
                        duration={3200}
                        logo={<Ruang />}
                        title='Ruang Belajar'
                        fill='Didukung dengan fasilitas ruang belajar yang representatif.'
                    />
                </div>
            </div>
        </div>
    )
}
