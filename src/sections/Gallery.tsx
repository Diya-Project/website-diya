import Image from 'next/image'
import React from 'react'
import img1 from "@/assets/images/poto1.jpg"
import img2 from "@/assets/images/poto2.jpg"
import img3 from "@/assets/images/poto3.jpg"
import img4 from "@/assets/images/poto4.jpg"
import img5 from "@/assets/images/poto5.jpg"
import img6 from "@/assets/images/poto6.jpg"
import img7 from "@/assets/images/poto7.jpg"
import img8 from "@/assets/images/poto8.jpg"
import img9 from "@/assets/images/poto9.jpg"
import img10 from "@/assets/images/poto10.jpg"
import img11 from "@/assets/images/poto11.jpg"
import img12 from "@/assets/images/poto12.jpg"

export default function Gallery() {
    return (
        <div id='5' className='mx-3'>
            <div className='flex'>
                <svg className='w-20 h-20' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#044d7b"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.25C3 4.00736 4.00736 3 5.25 3H18.75C19.9926 3 21 4.00736 21 5.25V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V5.25ZM5.25 4.5C4.83579 4.5 4.5 4.83579 4.5 5.25V11.25H11.25V4.5H5.25ZM12.75 4.5V11.25H19.5V5.25C19.5 4.83579 19.1642 4.5 18.75 4.5H12.75ZM19.5 12.75H12.75V19.5H18.75C19.1642 19.5 19.5 19.1642 19.5 18.75V12.75ZM11.25 19.5V12.75H4.5V18.75C4.5 19.1642 4.83579 19.5 5.25 19.5H11.25Z" fill="#044d7b"></path> </g></svg>
                <h5 className='my-auto font-lato text-[#044d7b] font-bold text-[2rem] uppercase'>Galeri</h5>
            </div>
            <div className='flex flex-wrap justify-center my-5 md:mx-0 mx-3 gap-5 w-[100%]'>
                <iframe width="620" height="425" src="https://www.youtube.com/embed/Z6h-xxoO6JM?si=aU6PKNCc38VuDYY-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <Image className='md:w-[33%] bg-blue-400' src={img2} alt='' />
                <div className='md:w-[18%] gap-5 flex flex-col'>
                    <Image className='md:w-[100%]' src={img1} alt='' />
                    <Image className='md:w-[100%]' src={img10} alt='' />
                </div>
                <div className='md:w-[18%] gap-5 flex flex-col'>
                    <Image className='md:w-[100%]' src={img11} alt='' />
                    <Image className='md:w-[100%]' src={img12} alt='' />
                </div>
                <Image className='md:w-[40%]' src={img3} alt='' />
                <Image className='md:w-[38%]' src={img4} alt='' />
            </div>
            <div className='md:p-4 flex flex-wrap gap-5'>
            </div>
        </div>
    )
}
