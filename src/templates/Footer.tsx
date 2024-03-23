import React from 'react'
import logo from "../assets/images/diya.png"
import {TfiWorld} from "react-icons/tfi"
import { BsWhatsapp,BsInstagram,BsYoutube } from 'react-icons/bs'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='bg-[#00274a] w-screen h-full flex md:flex-row flex-col justify-between p-5 gap-10'>
            <div className=' w-full p-4 flex flex-col md:items-start items-center'>
                <Image loading='lazy'placeholder="blur" className='md:w-72 w-48' src={logo} alt="" />
                <div className='space-y-4 mt-10'>
                    <a href={`https://bootcamp.diyaproject.id`} className='flex space-x-3'>
                        <TfiWorld className='w-7 h-7 fill-white' />
                        <h1 className='my-auto text-white font-sans'>Diya Bootcamp</h1>
                    </a >
                    <a href={`https://api.whatsapp.com/send?phone=6287864171449`} className='flex space-x-3'>
                        <BsWhatsapp className='w-7 h-7 fill-white' />
                        <h1 className='my-auto text-white font-sans'>WhatsApp</h1>
                    </a >
                    <a href={`https://www.instagram.com/diyabootcamp/`} className='flex space-x-3'>
                        <BsInstagram className='w-7 h-7 fill-white' />
                        <h1 className='my-auto text-white font-sans'>Instagram</h1>
                    </a >
                    <a href={`https://www.youtube.com/@diyabootcamp`} className='flex space-x-3'>
                        <BsYoutube className='w-7 h-7 fill-white' />
                        <h1 className='my-auto text-white font-sans'>Youtube</h1>
                    </a >
                </div>
            </div>
            <div className='bg-white w-full'>
                <iframe loading='lazy' placeholder='empty' width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=-8.656042,116.542317&t=&z=16&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
        </footer>
    )
}

export default Footer