import RegistrationCard from '@/templates/RegistrationCard'
import React from 'react'

export default function Registration() {
  return (
    <div id='4' className='my-[10vh] bg-[#00274a] md:p-8 p-4'>
      <div className='border-4 border-slate-100 md:px-4 md:py-10 py-5 rounded-xl'>
        <h1 className=' text-slate-100 text-[2.5rem] px-4 md:text-center text-left font-bold font-lato'>Ayo Segera Daftarkan Diri Anda</h1>
        <div className='flex md:flex-row flex-col justify-center items-center gap-10 mt-[10vh]'>
          <RegistrationCard
            title='Bootcamp Beasiswa'
            desc='Mari bergabung menjadi bagian dari diya dengan cara menjadi peserta beasiswa.'
            link='/beasiswa'
          />
          <RegistrationCard
            title='Bootcamp Reguler'
            desc='Mari bergabung menjadi bagian dari diya dengan cara menjadi peserta reguler.'
            link='/reguler'
          />
        </div>
      </div>
    </div>
  )
}
