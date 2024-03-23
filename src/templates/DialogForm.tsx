import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import Dialog from '../components/Dialog'

function DialogForm({ show, toggle, msg, children }: { show: boolean, toggle: Dispatch<SetStateAction<boolean>>, msg: string, children: ReactNode }) {
    return (
        <Dialog show={show} toggle={toggle} setMargin="md:mt-[40vh] mt-[35vh]">
            <div className='bg-white md:w-[50vw] w-[90vw] h-full rounded-lg px-3 py-4'>
                <h1 className='mt-8 mb-4 text-center text-xl font-sans'>{msg}</h1>
                {children}
            </div>
        </Dialog>
    )
}

export default DialogForm