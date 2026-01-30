import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const KeyNotes = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8 my-10 mx-4'>
        <div className='w-96 max-[400px]:w-full text-center my-6 px-4'>
            <GroupsIcon color='secondary' fontSize='large'/>
            <p className='font-bold text-2xl my-6'>Group Gallons</p>
            <p className='my-6'>
                Group Gallons lets you share photos and videos across
                iOS and Android devices with one simple link.
            </p>
        </div>
        <div className='w-96 max-[400px]:w-full text-center my-6 px-4'>
            <CheckCircleRoundedIcon color='secondary' fontSize='large'/>
            <p className='font-bold text-2xl my-6'>Photogallon guarantee</p>
            <p className='my-6'>
                What you upload and what you download never
                changes. That’s our compression-free guarantee.
            </p>
        </div>
        <div className='w-96 max-[400px]:w-full text-center my-6 px-4'>
            <SecurityIcon color='secondary' fontSize='large'/>
            <p className='font-bold text-2xl my-6'>Privacy</p>
            <p className='my-6'>
                Back up your memories safely and securely with visibility
                controls over your photos and videos.
            </p>
        </div>
    </div>
  )
}

export default KeyNotes