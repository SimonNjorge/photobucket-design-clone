import React from 'react'
import assets from '../assets/assets'

const SharePassions = () => {
  return (
    <div className='flex flex-col md:flex-row  gap-16 justify-center items-center my-40'>
        <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-gray-300 rotate-z-20 rounded-3xl overflow-hidden'>
          <img className='w-full h-full object-cover -rotate-z-20' src={assets.img_5} alt="share your passions image" />
        </div>
        <div className='w-[70vw] md:w-[50vw]'>
            <p className='font-bold text-2xl my-6'>Share your passions</p>
            <p>
                Love cat videos, sharing food pics, or documenting everything your baby
                does? Photobucket makes it easy to share your favorite moments and
                passions with family and friends, no matter if they're on iOS or Android.
                Photobucket's photo storage and video storage is the perfect place for 
                group
                sharing of any kind.
            </p>
        </div>
    </div>
  )
}

export default SharePassions