import React from 'react'
import { ArrowForward } from '@mui/icons-material'

const NewFeature = () => {
  return (
    <div className='flex items-center justify-center my-5'>
        <span className='p-2 flex items-center text-sm rounded-full text-indigo-500 border border-indigo-500 max-w-xs'>
            <span className="p-1 text-xs rounded-full text-indigo-500 border border-indigo-500">New Feature</span>
            <span className="mx-2">Check It Out</span>
            <button className='bg-transparent hover'><ArrowForward /></button>
        </span>
    </div>
  )
}

export default NewFeature