import AppleIcon from '@mui/icons-material/Apple';
import {  useEffect, useState } from 'react';
import assets from '../assets/assets';

const Hero = () => {
    
    const [sliderIndex, setSliderIndex] = useState(0);
    const [sliderImageIndex, setSliderImageIndex] = useState(0);

    const sliderOneImages = [assets.img_1, assets.img_2, assets.img_3];

    useEffect(() => {
       const intervalId = setInterval(()=>{
            if(sliderImageIndex < sliderOneImages.length - 1){
                setSliderImageIndex(sliderImageIndex => sliderImageIndex + 1);
            } else {
                setSliderImageIndex(0)
            }
        }, 2000) 

       return () => {
        clearInterval(intervalId);
       }

    }, [sliderImageIndex, sliderOneImages.length]);

    useEffect(() => {
       const intervalId = setInterval(()=>{
            if(sliderIndex < 2) {
                setSliderIndex(sliderIndex => sliderIndex + 1);
            } else {
                setSliderIndex(0);
            }
       }, 6000);

       return () => {
        clearInterval(intervalId);
       }

    }, [sliderIndex]);

    const animClass = `slide_${sliderIndex}`;

  return (
    <div className='flex relative md:mt-8 w-[100vw]'>
        <div className={`flex flex-col md:flex-row items-center w-[100vw] gap-4 md:gap-20 md:p-6 my-0 ${ animClass } transition-transform duration-1000 ease-in-out max-[400px]:pt-0`}>
            <div className='w-[100vw] max-md:px-8 md:max-w-[55vw]'>
                <p className='font-bold text-3xl text-blue-600 my-5'>
                    Sync your whatsapp images <span className='slider-one-grad-txt'>with photogallon</span>
                </p>
                <p>
                    No more digging through endless messages or worrying about lost media. photogallon
                    now connects with WhatsApp to automatically sync photos and videos from your group
                    chats directly into your photogallon account.
                </p>
                <button className='cta-btn flex flex-col w-36 h-12 relative slider-one-bg-btn py-3 px-4 rounded-full bg-blue-600 text-amber-50 font-semibold my-5 cursor-pointer overflow-hidden'>
                    <span className='absolute txt-one transition-all duration-700'>Learn more!</span>
                    <span className='absolute -bottom-10 txt-two transition-all duration-700'>Learn more!</span>
                </button>
            </div>
            <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-blue-400 rotate-z-6 rounded-2xl flex'>
                <img className='w-full h-full object-cover rounded' src={sliderOneImages[sliderImageIndex]} alt="Slider one image" />
            </div>
        </div>
        <div className={`flex flex-col md:flex-row items-center  w-[100vw] gap-4 md:gap-20 md:p-8 my-0 ${  animClass } transition-transform duration-1000 ease-in-out max-[400px]:pt-0`}>
            <div className='w-[100vw] max-md:px-8 md:max-w-[55vw]'>
                <p className='font-bold text-3xl text-blue-600 my-5'>
                    Say hello to our new <span className='slider-two-grad-txt '>free plan!</span>
                </p>
                <p>
                    The best memories are the ones we share. Our new Free Plan makes it easy to 
                    upload, invite others and see all the moments that you shared together. And note
                    this should be lorem ipsum do le asit dummy text of the printing industry 
                    since the 1900s.
                </p>
                <button className='relative cta-btn slider-two-bg-btn flex flex-col w-36 h-12 text-amber-50 hover:bg-purple-600 py-3 px-4 rounded-full font-semibold my-5 cursor-pointer overflow-hidden'>
                    <span className='absolute txt-one transition-all duration-700'>Try it today!</span>
                    <span className='absolute -bottom-10 txt-two transition-all duration-700'>Try it today!</span>
                </button>
                <p className='text-blue-800 font-semibold my-2 text-sm'>New sign ups only</p>
            </div>
            <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-blue-400 rotate-z-6 rounded-2xl'>
                <img className='w-full h-full object-cover ' src={assets.img_6} alt="Download image" />
            </div>
        </div>
        <div className={`flex flex-col md:flex-row items-center  w-[100vw] gap-4 md:gap-20 md:p-6 my-0 ${  animClass } transition-transform duration-1000 ease-in-out max-[400px]:pt-0`}>
            <div className='w-[100vw] max-md:px-8 md:max-w-[55vw]'>
                <p className='font-bold text-3xl text-blue-600 my-5'>
                    Take photogallon <span className='slider-three-grad-txt'>everywhere</span>
                </p>
                <p>
                    Your memories should not stay in one place and neither should your photo 
                    library. With your photo bucket library you can instantly upload from your
                    camera roll and organise buckets on the fly. Your photos and videos are always safe.
                </p>
                <div className='flex gap-2 my-4'>
                    <div className='flex items-center bg-black text-white rounded h-10 p-1 cursor-pointer'>
                        <AppleIcon sx={{marginRight: 1}}/>
                        <div>
                            <p className='text-xs my-0'>Download on the</p>
                            <p className='font-semibold  my-0'>App Store</p>
                        </div>
                    </div>
                    <div className='flex items-center bg-black text-white rounded h-10 p-1 cursor-pointer'>
                        <AppleIcon sx={{marginRight: 1}}/>
                        <div>
                            <p className='text-xs my-0'>Get it on</p>
                            <p className='font-semibold my-0'>Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] bg-blue-400 rotate-z-6 rounded-2xl'>
               <img className='w-full h-full object-cover ' src={assets.img_9} alt="Download image" />  
            </div>
        </div>
        <div className='flex gap-3 absolute -bottom-6 left-[50%] translate-x-[-50%]'>
            <div onClick={()=>setSliderIndex(0)} className={`w-3 h-3  ${sliderIndex == 0 ? 'border-2 border-blue-900' : '' } cursor-pointer flex items-center justify-center rounded-full`}>
                <div className='w-1 h-1 bg-blue-900 rounded-full'></div>
            </div>
            <div onClick={()=>setSliderIndex(1)} className={`w-3 h-3  ${sliderIndex == 1 ? 'border-2 border-blue-900' : '' } cursor-pointer flex items-center justify-center rounded-full`}>
                <div  className='w-1 h-1 bg-blue-900 rounded-full'></div>
            </div>
            <div onClick={()=>setSliderIndex(2)} className={`w-3 h-3   ${sliderIndex == 2 ? 'border-2 border-blue-900' : '' } cursor-pointer flex items-center justify-center rounded-full`}>
                <div className='w-1 h-1 bg-blue-900 rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Hero