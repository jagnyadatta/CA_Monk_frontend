import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className='felx flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center mt-30'>
          <h1 className='text-5xl font-semibold'>Sentence Construction</h1>
          <p className='text-gray-400 font-semibold mt-4'>User have contract a sentence a sentence with random words by placing in it a correct order.</p>
        </div>
        <div className='flex items-center justify-center mt-15'>
            <div className='pl-4 pr-4 pt-2 pb-2 border-r-2'>
              <h2 className='text-[20px]'>Time Per Question</h2>
              <p className='text-gray-400'>1 minute</p>
            </div>
            <div className='pl-4 pr-4 pt-2 pb-2 border-r-2'>
              <h2 className='text-[20px]'>Total Questions</h2>
              <p className='text-gray-400'>10</p>
            </div>
            <div className='pl-4 pr-4 pt-2 pb-2'>
              <h2 className='text-[20px]'>Time Per Question</h2>
              <p className='text-gray-400'>1 minute</p>
            </div>
        </div>
        <div className='mt-15 flex items-center justify-center gap-5'>
          <Button className="style-button cursor-pointer hover:bg-[#453fe1] w-[120px] h-[40px]">Back</Button>
          <Button className="bg-[#453fe1] hover:bg-[#453ff3] cursor-pointer w-[120px] h-[40px]" onClick={()=>navigate('/test')}>Start</Button>
        </div>
      </div>
    </>
  )
}

export default Home