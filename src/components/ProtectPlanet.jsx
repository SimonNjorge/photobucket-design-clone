import assets from '../assets/assets'
import { useState, useEffect } from 'react';

const ProtectPlanet = () => {

    const [sliderImageIndex, setSliderImageIndex] = useState(0);

    const Images = [assets.img_10, assets.img_8];

    useEffect(() => {
       const intervalId = setInterval(()=>{
            if(sliderImageIndex < Images.length - 1){
                setSliderImageIndex(sliderImageIndex => sliderImageIndex + 1);
            } else {
                setSliderImageIndex(0)
            }
        }, 2000) 

       return () => {
        clearInterval(intervalId);
       }

    }, [sliderImageIndex, Images.length]);

  return (
    <div className='flex flex-col md:flex-row gap-16 justify-center items-center my-28'>
        <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-purple-900 rotate-z-20 rounded-3xl'>
          <img className='w-full h-full object-cover ' src={Images[sliderImageIndex]} alt="protect planet image" />
        </div>
        <div className='w-[70vw] md:w-[50vw]'>
            <p className='font-bold text-2xl my-6'>Help protect our planet too</p>
            <p>
                Since 2003, we've been safeguarding memories with backup cloud storage.
                We're talking over 70 million customers with over 13 billion photos and
                videos from around the world. All perfectly preserved using 
                carbon-neutral
                memory management. Because we love our planet as much as we love our
                customers.
            </p>
        </div>
    </div>
  )
}

export default ProtectPlanet