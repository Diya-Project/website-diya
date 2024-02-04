'use client'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'

interface QuestionTextAttributes{
    duration:number;
    question:string;
    answer:string;
    className?:string;
}

function QuestionText({duration,question,answer,className}:QuestionTextAttributes) {
    return (
        <Zoom duration={duration} className={`${className} font-lato`}>
            <h1 className='cursor-pointer text-3xl font-semibold relative'>{question}</h1>
            <h1 className={`transition-all ease-in-out duration-300 md:w-[50%]`}>{answer}</h1>
        </Zoom>
    )
}

export default QuestionText