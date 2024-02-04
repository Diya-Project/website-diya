import React from 'react'

interface CardRegistrationAttributes{
  title:string
  desc:string
  link:string
}

export default function CardRegistration({title,desc,link}:CardRegistrationAttributes) {
  return (
    <div className="md:w-[45%] w-[90%] p-6 bg-white border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">{desc}</p>
      <a href={link} className="inline-flex font-lato h-12 items-center px-3 py-2 text-2xl font-medium text-center text-white bg-[#00274a] hover:ml-1 rounded-lg hover:bg-[#223c53] focus:ring-4 transition-all ease-in-out duration-200">
        Daftar
        <svg className="rtl:rotate-180 md:w-7 md:h-7 md:ms-6 w-8 h-8 ms-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>

  )
}
