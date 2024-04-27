import formatTime from '@/hooks/useFormatTime'
import Link from 'next/link'
import React from 'react'

export default function CheckDateButton({ now, start, end }: { now: Date, start: Date | null, end: Date | null }) {
    return (
        now <= end! && now >= start! ?
            <Link href={"/daftar"} className='bg-blueDiya text-white hover:bg-whiteDiya hover:text-[#00698f] border hover:border-[#00698f] px-10 py-2 mt-2 rounded-md transition-colors ease-in-out duration-300 md:w-52 w-full text-center'>Daftar Sekarang</Link>
            :
            end as Date && start as Date ?
                <div className='bg-gray-400 text-white px-10 py-2 mt-2 rounded-md transition-colors ease-in-out duration-300 text-center'>Dibuka pada tanggal {formatTime(start!)}</div>
                :
                <div className='bg-gray-400 text-white px-10 py-2 mt-2 rounded-md transition-colors ease-in-out duration-300 text-center'>Pendaftaran ditutup</div>
    )
}
