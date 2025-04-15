import React from 'react'
import { Button } from './ui/button'

const Test = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='relative border-2 w-[80%] h-[90vh] rounded-2xl box-shadow'>
            <div className='absolute top-4 left-4'>
                <span className='text-2xl'>00:50</span>
            </div>
            <Button className="style-button absolute top-4 right-4 cursor-pointer">Quit</Button>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Test