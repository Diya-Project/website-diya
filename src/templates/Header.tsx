'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Logo from "@/assets/images/diya.png"
import Link from 'next/link'
import bar from "@/assets/images/bar.png"
import cross from "@/assets/images/cross.png"
import { usePathname } from 'next/navigation'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const [scrolTo, setScrolTo] = useState(false)
    const [scroll, setScroll] = useState(0)
    const path = usePathname()
    const refScroll = useRef<number>()
    refScroll.current = scroll
    useEffect(() => {
        const move = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener("scroll", move)
        return () => window.addEventListener("scroll", move)
    }, [])
    useEffect(() => {
        const move = () => {
            if (window.scrollY > 150) {
                setScrolTo(true)
            }
            else {
                setScrolTo(false)
            }
        }
        window.addEventListener("scroll", move)
        return () => window.addEventListener("scroll", move)
    }, [])
    return (
        <div className={`fixed top-0 w-[100vw] py-3 md:pl-10 pl-4 md:pr-10 pr-5 flex flex-row-reverse justify-between gap-10 h-[10vh] z-10 transition-colors ease-in-out duration-300 ${scrolTo || path === "/reguler" || path === "/beasiswa" || path === "/daftar"  ? "bg-[#00274a]" : "bg-transparent"}`}>
            <div className='flex gap-10 flex-row-reverse'>
                <Image loading='lazy'placeholder="blur" src={Logo} alt='' className='w-36 h-12 my-auto' />
                <div className='md:flex hidden gap-10 my-auto text-white text-lg font-semibold font-lato'>
                    <Link href={"/#1"} className='cursor-pointer'>Beranda</Link>
                    <Link href={"/#2"} className='cursor-pointer'>Tentang Kami</Link>
                    <Link href={"/#3"} className='cursor-pointer'>Alumni</Link>
                    <Link href={"/#4"} className='cursor-pointer'>Daftar</Link>
                </div>
            </div>
            <div className='my-auto md:hidden block ' onClick={() => setShowMenu(!showMenu)}>
                <Image loading='lazy'placeholder="blur" src={bar} alt='' className='w-10' />
            </div>
            <div className={`md:hidden block fixed top-0 bg-white z-10 h-screen w-[80vw] p-4 font-lato ${showMenu ? "left-0" : "-left-[100vw]"} transition-all ease-in-out duration-500`}>
                <div className='flex gap-4'>
                    <Image loading='lazy'placeholder="blur" src={cross} alt='' className='w-8' onClick={() => setShowMenu(!showMenu)} />
                    <h1 className='my-auto text-lg'>Menu</h1>
                </div>
                <div className='my-5 text-lg flex flex-col gap-5'>
                    <Link href={"/#1"} onClick={()=>setShowMenu(!showMenu)} className='cursor-pointer'>Beranda</Link>
                    <Link href={"/#2"} onClick={()=>setShowMenu(!showMenu)} className='cursor-pointer'>Tentang Kami</Link>
                    <Link href={"/#3"} onClick={()=>setShowMenu(!showMenu)} className='cursor-pointer'>Alumni</Link>
                    <Link href={"/#4"} onClick={()=>setShowMenu(!showMenu)} className='cursor-pointer'>Daftar</Link>
                </div>
            </div>
            <div onClick={() => setShowMenu(!showMenu)} className={`bg-black w-screen h-screen fixed top-0 bg-opacity-50 md:hidden block transition-all ease-in-out duration-300 ${showMenu ? "left-0" : "-left-[100vw]"} `}></div>
        </div>
    )
}
