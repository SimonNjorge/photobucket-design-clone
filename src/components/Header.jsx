import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import Fingerprint from '@mui/icons-material/Fingerprint'

const Header = () => {
  return (
    <div className="flex max-[370px]:flex-col justify-between p-4 border-b border-b-gray-300">
      <div className="flex items-center max-[400px]:my-2">
        <Fingerprint color='secondary' sx={{marginRight: 1, '&:hover': {color: 'blue'}}}/>
        <p className='text-blue-700 font-semibold'>photogallon</p>
      </div>
      <div className="flex max-sm:my-2 border border-gray-300 rounded-full w-fit">
        <button className='max-[410px]:text-xs text-blue-700 font-semibold cursor-pointer py-1 px-3'>
          Sign In
        </button>
        <div className='flex justify-center items-center border-l border-l-gray-300 cursor-pointer'>
          <AndroidIcon sx={{marginX: '4px','&:hover' : {color: 'blue'} }} />
        </div>
        <div className='flex justify-center items-center border-x border-x-gray-300 cursor-pointer'>
          <AppleIcon sx={{marginX: '4px', '&:hover': {color: 'blue'} }} />
        </div>
        <button className='max-[410px]:text-xs bg-blue-700 text-white font-semibold py-1 px-3 border-l-gray-400 rounded-r-full cursor-pointer hover:bg-blue-600'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Header