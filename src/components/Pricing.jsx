import  {  useState } from 'react'
import UploadIcon from '@mui/icons-material/Upload'
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
//import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
//import WhatsappIcon from '@mui/icons-material/Whatsapp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GroupsIcon from '@mui/icons-material/Groups';
//import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Pricing = () => {

    const mediumBreakPoint = matchMedia('(max-width:767px)')
    

    const [monthly, setMonthly] = useState(true);
    //const [planDetails, setPlanDetails] = useState(true);
    const [planOneDetails, setPlanOneDetails] = useState(false);
    const [planTwoDetails, setPlanTwoDetails] = useState(false);
    const [planThreeDetails, setPlanThreeDetails] = useState(false);

    let planDetails = true;
    
    if(mediumBreakPoint.matches) {
        planDetails = false;
    }
    

    const togglePricing = (e) => {
        if (e.target.textContent == 'Yearly' && monthly) {
            setMonthly(false);
        } else if (e.target.textContent == 'Monthly' && !monthly) {
            setMonthly(true);
        }
    }

  return (
    <div className='flex flex-col items-center my-14'>
        <div className='flex justify-between border border-gray-400 rounded-full p-1 w-60 mt-4 mb-10'>
            <button onClick={togglePricing} className={`py-2 w-1/2 cursor-pointer rounded-full ${monthly ? 'bg-blue-600 text-white': 'text-blue-600'}`}>
                Monthly
            </button>
            <button onClick={togglePricing} className={`py-2 w-1/2 cursor-pointer rounded-full ${!monthly ? 'bg-blue-600 text-white': 'text-blue-600'}`}>
                Yearly
            </button>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 my-4'>
            <div className='flex flex-col justify-between relative border-2 border-blue-600 rounded-2xl p-4 max-sm:w-60  sm:w-72 my-4'>
                <div className='self-center h-50'>
                    <div className='my-6 '>
                        <p className='font-bold text-blue-600 text-2xl'>Free</p>
                        <p className='text-xs font-bold'>Essentials to get started</p>
                    </div>
                    <div className='my-6 '>
                        <p className='font-bold text-blue-600 text-3xl'>$0</p>
                        <p className='text-xs font-bold'>{monthly ? 'Per Month' : 'Per Year'}</p>
                    </div>
                </div>
                <div className='self-center'>
                    {planDetails ? ''
                     : 
                    <div>
                        {
                            planOneDetails ? <div onClick={()=>setPlanOneDetails(false)} className='flex items-center gap-2 text-blue-600 mb-2 cursor-pointer'>
                            <p>Hide plan details</p>
                            <ExpandMoreIcon className='rotate-z-[180deg]' />
                        </div>
                        : <div onClick={()=>setPlanOneDetails(true)} className='flex items center gap-2 text-blue-600 mb-2 cursor-pointer'>
                            <p>Show plan details</p>
                            <ExpandMoreIcon/>
                        </div>
                        }
                    </div>
                    }
                </div>
                <div className={`${planDetails ? 'h-60' : planOneDetails ? 'h-60' : 'h-0 overflow-hidden'}`}>
                    <div className='flex items-center gap-2 my-1'>
                        <CloudDownloadIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>3 buckets</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <BackupTableIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>50 images per bucket</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <GroupsIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Unlimited invites</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <BackupTableIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Professional photo editor</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <FacebookIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Whatsapp & facebook plugin</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <SettingsBackupRestoreIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Integrated auto backup</p>
                    </div>
                </div>
                <button className='w-3/4 text-sm font-semibold text-white bg-blue-800 rounded-full px-3 py-2 self-center cursor-pointer hover:bg-blue-600 my-5'>
                    Select Plan
                </button>
                <p className='font-bold text-blue-800 text-xs absolute -bottom-4.5 left-1/2 -translate-x-1/2'>New sign-ups only</p>
            </div>
            <div className='flex flex-col justify-between relative border-2 border-purple-800 rounded-2xl p-4  sm:w-72 my-4'>
                <p className='absolute text-amber-100 font-bold text-sm text-center bg-purple-600 py-2 px-4 mx-1 rounded-full -top-5 left-1/2 -translate-x-1/2 '>Most popular</p>
                <div className='self-center h-50'>
                    <div className='my-6 '>
                        <p className='font-bold text-blue-600 text-2xl'>Group buckets</p>
                        <p className='text-xs font-bold'>1TB of storage + sharing</p>
                    </div>
                    <div className='my-6 '>
                        <p className='font-bold text-blue-600 text-3xl'>{monthly ? '$8' : '$76'}</p>
                        <p className='text-xs font-bold'>{monthly ? 'Per Month' : 'Per Year'}</p>
                    </div>
                </div>
                <div className='self-center'>
                    {planDetails ? ''
                     : 
                    <div>
                        {
                            planTwoDetails ? <div onClick={()=>setPlanTwoDetails(false)} className='flex items-center gap-2 text-blue-600 mb-2 cursor-pointer'>
                            <p>Hide plan details</p>
                            <ExpandMoreIcon className='rotate-z-[180deg]' />
                        </div>
                        : <div onClick={()=>setPlanTwoDetails(true)} className='flex items center gap-2 text-blue-600 mb-2 cursor-pointer'>
                            <p>Show plan details</p>
                            <ExpandMoreIcon/>
                        </div>
                        }
                    </div>
                    }
                </div>
                <div className={`${planDetails ? 'h-60' : planTwoDetails ? 'h-60' : 'h-0 overflow-hidden'}`}>
                    <div className='flex items-center gap-2 my-1'>
                        <CloudDownloadIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>unlimited buckets</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <UploadIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>upto 1TB of storage</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <BackupTableIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Sorts & organisation tools</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <UploadIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Professional photo editor</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <FacebookIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Whatsapp & facebook plugin</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <SettingsBackupRestoreIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Integrated auto backup</p>
                    </div>
                </div>
                <button className='w-3/4 text-sm font-semibold text-white bg-purple-800 rounded-full px-3 py-2 justify-self-end self-center cursor-pointer hover:bg-purple-600 my-5'>
                    Select Plan
                </button>
                <p className='font-bold text-blue-800 text-xs absolute -bottom-4.5 left-1/2 -translate-x-1/2 w-full text-center'>
                    {monthly ? 'save another 16$ by paying yearly' : 'Paying Yearly saves you additional $16' }
                </p>
            </div>
            <div className='flex flex-col justify-between relative border-2 border-blue-600 rounded-2xl p-4   sm:w-72 my-4'>
                <div className='self-center h-50'>
                    <div className='my-6 '>
                        <p className='font-bold text-blue-600 text-2xl'>Hosting</p>
                        <p className='text-xs font-bold'>Embedded sharing</p>
                    </div>
                    <div className='my-6 '>
                        <p className='font-bold text-blue-600 text-3xl'>{monthly ? '$13' : '$100'}</p>
                        <p className='text-xs font-bold'>{monthly ? 'Per Month' : 'Per Year'}</p>
                    </div>
                </div>
                <div className='self-center'>
                    {planDetails ? ''
                     : 
                    <div>
                        {
                            planThreeDetails ? <div onClick={()=>setPlanThreeDetails(false)} className='flex items-center gap-2 text-blue-600 mb-2 cursor-pointer'>
                            <p>Hide plan details</p>
                            <ExpandMoreIcon className='rotate-z-[180deg]' />
                        </div>
                        : <div onClick={()=>setPlanThreeDetails(true)} className='flex items center gap-2 text-blue-600 mb-2 cursor-pointer'>
                            <p>Show plan details</p>
                            <ExpandMoreIcon/>
                        </div>
                        }
                    </div>
                    }
                </div>
                <div className={`${planDetails ? 'h-60' : planThreeDetails ? 'h-60' : 'h-0 overflow-hidden'}`}>
                    <div className='flex items-center gap-2 my-1'>
                        <CloudDownloadIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>3 buckets</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <BackupTableIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>50 images per bucket</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <GroupsIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Unlimited invites</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <BackupTableIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Professional photo editor</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <FacebookIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Whatsapp & facebook plugin</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <SettingsBackupRestoreIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Integrated auto backup</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <UploadIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Photo hosting</p>
                    </div>
                    <div className='flex items-center gap-2 my-1'>
                        <BackupTableIcon sx={{color: 'blue'}}/>
                        <p className='text-xs font-semibold'>Direct photo embed link</p>
                    </div>
                </div>
                <button className='w-3/4 text-sm text-white font-semibold bg-blue-900 rounded-full px-3 py-2 self-center cursor-pointer hover:bg-blue-700 my-8'>
                    Select Plan
                </button>
                <p className='self-center font-bold text-blue-800 text-xs text-center absolute -bottom-4.5 left-1/2 -translate-x-1/2 w-full'>
                    {monthly ? 'save another 16$ by paying yearly' : 'Paying Yearly saves you additional $16' }
                </p>
            </div>
        </div>
    </div>
  )
}

export default Pricing