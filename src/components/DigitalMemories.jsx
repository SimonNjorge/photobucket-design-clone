import React from 'react'
import assets from '../assets/assets'

const DigitalMemories = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row  gap-16 justify-center items-center my-28'>
        <div className='w-[70vw] md:w-[50vw]'>
            <p className='font-bold text-2xl my-6'>Round up all your digital memories</p>
            <p>
                Too many vacation pics here. Awkward family videos there. And random
                selfies you'd rather not talk about everywhere. Perfectly normal and totally
                unorganized. Like everyone else. Luckily, Photobucket helps you 
                consolidate
                your digital life from all your favorite social platforms into one, easy-to-use
                app.
            </p>
        </div>
        <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-purple-600 rotate-z-20 rounded-3xl'>
          <img className='w-full h-full object-cover ' src={assets.img_4} alt="Digital memories photo" />
        </div>
    </div>
  )
}

export default DigitalMemories