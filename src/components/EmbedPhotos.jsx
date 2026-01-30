import React from 'react'
import assets from '../assets/assets'

const EmbedPhotos = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row  gap-16 justify-center items-center my-38'>
        <div className='w-[70vw] md:w-[50vw]'>
            <p className='font-bold text-2xl my-6'>Embed photos in a snap</p>
            <p>
                Whether you're an avid blogger or e-commerce seller, our easy-to-copy
                embed links make 
                hosting your images a no-brainer. Forget uploading the
                same picture to different forums, websites or marketplaces. photogallon's
                Hosting Plan does all the work, optimizing your images by automatically
                adjusting their size to the device being used to view them.
            </p>
        </div>
        <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-green-800 rotate-z-20 rounded-3xl'>
          <img className='w-full h-full object-cover ' src={assets.img_7} alt="Embed photos image" />
        </div>
    </div>
  )
}

export default EmbedPhotos