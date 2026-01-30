import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
//import WhatsappIcon from '@mui/icons-material/Whatsapp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='flex flex-col px-10 my-6'>
        <div className='max-sm:self-center my-4'>
            <div className='my-6 flex items-center gap-5'>
                <AppleIcon color='primary' fontSize='medium' sx={{cursor: 'pointer', '&:hover' : {color: 'blue'}}}/>
                <p className='text-blue-600 font-semibold'>photogallon</p>
            </div>
            <div className='my-4'>
                <p className='mb-2 font-semibold'>
                    Follow us on our socials
                </p>
                <div className='flex gap-4'>
                    <FacebookIcon color='secondary' sx={{cursor: 'pointer', '&:hover' : {color: 'blue'}}}/>
                    <TwitterIcon color='secondary'  sx={{cursor: 'pointer', '&:hover' : {color: 'blue'}}}/>
                    <InstagramIcon color='secondary'  sx={{cursor: 'pointer', '&:hover' : {color: 'blue'}}}/>
                    <LinkedInIcon color='secondary'  sx={{cursor: 'pointer', '&:hover' : {color: 'blue'}}}/>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-between'>
            <div>
                <p className='my-4 font-bold'>Services</p>
                <p className='my-2'> <a href="" className='hover:underline'>Digitize Your Memories</a> </p>
                <p className='my-2'><a href="" className='hover:underline'>Canvas Prints</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Enlargements</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Greeting Cards</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Photo Books</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Photo Gifts</a></p>
            </div>
            <div>
                <p className='my-4 font-bold'>Get help</p>
                <p className='my-2'>  <a href="" className='hover:underline'>Help Center</a> </p>
                <p className='my-2'> <a href="" className='hover:underline'>Recover Your Account</a></p>
                <p className='my-2'> <a href="" className='hover:underline'>Contact Us</a> </p>
                <p className='my-2'> <a href="" className='hover:underline'>Discounts</a> </p>
                <p className='my-2'> <a href="" className='hover:underline'>Student and Graduate</a>  </p>
                <p className='my-2'> <a href="" className='hover:underline'>Exclusive Deals</a></p>
            </div>
            <div>
                <p className='my-4 font-bold'>Resources</p>
                <p className='my-2'> <a href="" className='hover:underline'>Digitize Your Memories</a> </p>
                <p className='my-2'><a href="" className='hover:underline'>Canvas Prints</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Enlargements</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Greeting Cards</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Photo Books</a></p>
                <p className='my-2'><a href="" className='hover:underline'>Photo Gifts</a></p>
            </div>
        </div>
        <div className='my-8'>
            <hr className='my-4' />
            <p className='text-center my-2'> &copy; 2026 photogallon.com, Inc. All rights reserved. photogallon is a registered trademark of photogallon.com, Inc.</p>
        </div>
    </div>
  )
}

export default Footer