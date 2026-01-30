import AppleIcon from '@mui/icons-material/Apple';
import assets from '../assets/assets';

const Download = () => {
  return (
    <div className='flex flex-col p-10 my-10'>
      <div className='self-center'>
        <p className='text-blue-800 text-center text-xl font-semibold'>Step 2</p>
        <p className='text-3xl font-bold my-8'>Download the app & back up</p>
      </div>
      <div className='flex flex-col items-center md:flex-row gap-6'>
        <div className='max-[530px]:w-[65vw] max-[530px]:h-[65vw] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] relative -left-22 -bottom-10 -rotate-z-15 bg-blue-400 rounded-2xl'>
          <img className='w-full h-full object-cover ' src={assets.img_9} alt="Download image" />
        </div>
        <div className='w-[70vw] md:w-[50vw]'>
          <p className='font-bold text-xl mt-16 mb-6'>Access all your photos & videos <span className='text-blue-900'>anywhere</span> <span className='download-grad-txt'>on any device</span></p>
          <p>
            Built for people on the go, with the photogallon app for Android or iOS, you can
            automatically backup every photo you take on your phone then access them on your
            desktop, tablet and other devices. It's that simple.
          </p>
          <div className='flex max-[385px]:flex-col gap-2 my-4'>
            <div className='flex items-center bg-black text-white rounded h-12 p-1 cursor-pointer w-fit'>
              <AppleIcon sx={{marginRight: 1}}/>
              <div>
                  <p className='text-xs my-0'>Download on the</p>
                  <p className='font-semibold  my-0'>App Store</p>
              </div>
            </div>
            <div className='flex items-center bg-black text-white rounded h-12 p-1 cursor-pointer w-fit'>
              <AppleIcon sx={{marginRight: 1}}/>
              <div>
                  <p className='text-xs my-0'>Get it on</p>
                  <p className='font-semibold my-0'>Google Play</p>
              </div>
            </div>
          </div>
          <button className='text-blue-800 my-2 font-semibold cursor-pointer hover:text-black'>
            LEARN MORE &rarr;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Download