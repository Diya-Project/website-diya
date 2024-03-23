'use client'
import React, { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2'
import { Fade } from 'react-awesome-reveal'
import "moment/locale/id"
import { useGetEndTime, useGetStartTime, useGetWave } from '@/hooks/useDate'
import { useGetNow } from '@/hooks/useDate'
import CheckDateButton from '@/components/CheckDateButton'

function AlurReguler() {
    const [informasi, setInformasi] = useState(false)
    const [alur, setAlur] = useState(false)
    const [daftar, setDaftar] = useState(false)

    const now = useGetNow()
    const start = useGetStartTime()
    const end = useGetEndTime()
    const wave = useGetWave()

    const timeline = [
        { size: informasi ? "md:h-[4rem] h-[100px]" : "md:h-[3rem] h-[50px]" },
        { size: alur ? "md:h-[11rem] h-[270px]" : informasi ? "md:h-[8rem] h-[170px]" : "md:h-[7rem] h-[115px]" },
        { size: daftar ? "md:h-[18rem] h-[500px]" : alur ? "md:h-[10rem] h-[360px]" : "md:h-[8rem] h-[135px]" },
    ]

    const menuTimeline = [
        {
            func: () => {
                setAlur(false)
                setDaftar(false)
                setInformasi(!informasi)
            }, title: "Lokasi", key: informasi, time: 2000, isi:
                <div>
                    <h3 className='font-sans'>Jl. Prof. M Yamin SH, Khusus Kota Selong, Kec. Selong, Kabupaten Lombok Timur, Nusa Tenggara Barat, Indonesia</h3>
                </div>
        },
        {
            func: () => {
                setDaftar(false)
                setInformasi(false)
                setAlur(!alur)
            }, title: "Fase Belajar", key: alur, time: 2500, isi:
                <div >
                    <div className='md:flex hidden'>
                        <div className='grid grid-cols-3 mr-28'>
                            <h4>Fase 1</h4>
                            <h4 className='-ml-28'>IT Fundamental</h4>
                            <h4 className='text-left ml-16'> 1 bulan</h4>
                            <h4 >Fase 2</h4>
                            <h4 className='-ml-28'>Developer Fundamental</h4>
                            <h4 className='text-left ml-16'>4 bulan 2 minggu</h4>
                            <h4>Fase 3</h4>
                            <h4 className='-ml-28'>Fullstack</h4>
                            <h4 className='text-left ml-16'>5 bulan 3 minggu</h4>
                            <h4>Fase 4</h4>
                            <h4 className='-ml-28'>Tugas Akhir</h4>
                            <h4 className='text-left ml-16'>2 bulan</h4>
                        </div>
                        <div className='h-28 w-[1px] mr-5 bg-gray-800'>
                        </div>
                        <div className='flex flex-col justify-center text-left'>
                            <h1>Total biaya</h1>
                            <h1 className='mt-2'>Rp. 12.000.000,-</h1>
                        </div>
                    </div>
                    <div className='md:hidden flex flex-col'>
                        <div>
                            <h1 className='list-item'>Fase 1</h1>
                            <div>
                                <p className='font-semibold'>IT Fundamental</p>
                                <p>1 bulan</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='list-item'>Fase 2</h1>
                            <div>
                                <p className='font-semibold'>Developer Fundamental</p>
                                <p>4 bulan 2 minggu</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='list-item'>Fase 3</h1>
                            <div>
                                <p className='font-semibold'>Fullstack</p>
                                <p>5 bulan 3 minggu</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='list-item'>Fase 4</h1>
                            <div>
                                <p className='font-semibold'>Tugas Akhir</p>
                                <p>2 bulan</p>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-gray-800 my-2'></div>
                        <p>Total biaya </p>
                        <p>Rp. 12.000.000,-</p>
                    </div>
                    <div className='flex gap-1 mt-3 text-sm'>
                        <p>NB</p>
                        <p>:</p>
                        <p>Biaya dapat diangsur sebanyak <b>3 kali</b>, pembayaran pertama periode <b>(April-September)</b> sebesar <b>Rp. 4.000.000,-</b> , pembayaran kedua periode <b>(November-Februari)</b> sebesar <b>Rp. 5.000.000,-</b> , pembayaran ketiga periode <b>(April-Agustus)</b> sebesar <b>Rp. 3.000.000,-</b> .</p>
                    </div>
                </div>
        },
        {
            func: () => {
                setInformasi(false)
                setAlur(false)
                setDaftar(!daftar)
            }, title: `Alur Pendaftaran Tahap ${wave}`, key: daftar, time: 3000, isi:
                <div>
                    <div className='mb-2'>
                        <ul className='list-decimal mx-5 mb-5'>
                            <li>Mengisi formulir pendaftaran yang tersedia di web dengan lengkap, <b>PERHATIAN! Kuota terbatas hanya untuk 4 orang</b>, jika terpenuhi maka pendaftaran ditutup.</li>
                            <li>Melakukan registrasi dengan membayar biaya awal sebesar Rp. 6.000.000,- ke rekening yang tertera .</li>
                            <li>Konfirmasi bukti pembayaran ke nomor whatsapp panitia.</li>
                            <li>Peserta terdaftar dimasukkan ke grup whatsapp dan siap mengikuti tes pemetaan kemampuan.</li>
                            <li>Peserta yang tidak mengikuti tes pemetaan akan didiskualifikasi, biaya dikembalikan 100%.</li>
                            <li>Penandatanganan kontrak belajar.</li>
                        </ul>
                    </div>
                    <CheckDateButton now={now} start={start} end={end} />
                </div>
        },
    ]
    return (
        <div className='overflow-x-hidden'>
            <div className='md:mt-[10rem] mt-[4rem] md:mb-0 mb-10'>
                <div className='md:w-[75vw] mx-auto p-8 bg-slate-100 rounded-2xl shadow-2xl'>
                    <h1 className='text-3xl font-sans text-gray-700 font-bold mb-1'>Reguler</h1>
                    <div className='px-3 mb-1'>
                        <p className='font-sans'>Mampu menguasai skill fullstack dev yang dibutuhkan industri, <b>kuota sangat terbatas</b>, biaya murah dan terjangkau. </p>
                    </div>
                    <h3 className='text-2xl font-sans text-gray-700 mb-1'>Syarat</h3>
                    <div className='px-7'>
                        <ul className='list-decimal font-sans'>
                            <li>Memiliki kemauan dan motivasi tinggi untuk belajar.</li>
                            <li>Memiliki laptop.</li>
                            <li>Siap mengikuti aturan yang ditetapkan oleh Diya Bootcamp.</li>
                        </ul>
                    </div>
                </div>
                <div className=' md:mb-8 flex justify-center space-x-5 relative md:w-[80vw] mx-auto'>

                    <Fade triggerOnce={true} direction='left' duration={2000}>
                        <div className='flex flex-col absolute md:left-0 pt-5 '>
                            {timeline.map((d, i) => (
                                <div key={i}>
                                    <div className={`transition-all ease-in-out duration-300 w-[3px] bg-blueDiya mx-auto my-1 rounded-xl ${d.size}`}></div>
                                    <div className={`bg-blueDiya rounded-full w-3 h-3`}></div>
                                </div>
                            ))}
                        </div>
                    </Fade>
                    <div className='flex flex-col space-y-10 md:ml-0 ml-10 mb-10'>
                        {menuTimeline.map((d, i) => (
                            <Fade triggerOnce={true} key={i} direction='right' duration={d.time}>
                                <div onClick={d.func} className=' bg-slate-100 md:w-[70vw] w-[80vw] mt-10 rounded-l-lg rounded-br-lg rounded-tr-3xl pt-3 pb-6 px-8 shadow-xl transition-all ease-in-out duration-300'>
                                    <div className='flex justify-between mt-3'>
                                        <h1 className={`font-lato text-2xl transition-colors ease-in-out duration-300 ${d.key ? "text-[#00698f]" : "text-gray-700"}`}>{d.title}</h1>
                                        {d.key ? <HiOutlineChevronUp className={`w-8 h-8 my-auto cursor-pointer mx-3 transition-all ease-in-out duration-300`} /> : <HiOutlineChevronDown className={`w-8 h-8 my-auto cursor-pointer mx-3 transition-all ease-in-out duration-300`} />}
                                    </div>
                                    <div className={`pt-4 transition-all ease-in-out duration-300 ${d.key ? "text-gray-800 visible mt-0" : "invisible text-transparent -mt-3"}`}>
                                        <div className={`${d.key ? "" : "hidden"}`}>
                                            {d.isi}
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlurReguler