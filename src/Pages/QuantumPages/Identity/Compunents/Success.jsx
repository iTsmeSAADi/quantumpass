import React from 'react'
import { GiCheckMark } from 'react-icons/gi'

const Success = () => {
  return (
    <div>
        <div className='flex items-center gap-x-3 '>
        <div className='w-10 h-10 bg-green-700 text-white   rounded-full flex items-center justify-center'>
            <GiCheckMark size={24}/>
        </div>
            <h1 className='text-3xl font-bold'>Thank You!</h1>
        </div>
        <p className='font-semibold text-lg py-12'>You have completed the user verification process.<br/>
        Your application is currently under review.
        </p>
    </div>
  )
}

export default Success