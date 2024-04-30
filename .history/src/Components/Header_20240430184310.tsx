import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
export const Header =()=>{
    return (
        <div className='fixed h-20 w-full max-w-[1400px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center pl-2 md:pl-12 md:pr-12'>
            <h2 className='font-title text-4xl text-whiteTitle'>Sushi Food</h2>
            {
                window.innerWidth > 600 ? (
                    <ul className='flex items-center gap-5 justify-between text-whiteText text-xl'>
                <li className='cursor-pointer  duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2'>About</li>
                <li className='cursor-pointer  duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2'>Menus</li>
                <li className='cursor-pointer  duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2'>Reservation</li>
            </ul>
                ) : (
                    <div>
                        <div className='w-6 h-6'>
                            <div className=''></div>
                        </div>
                    </div>
                )
            }
            <ul className='md:flex items-center justify-between gap-5  text-whiteTitle hidden'>
                <li className='cursor-pointer  duration-300 hover:scale-125'>
                    <InstagramIcon/></li>
                <li className='cursor-pointer  duration-300 hover:scale-125'> <FacebookIcon/></li>
                <li className='cursor-pointer  duration-300 hover:scale-125'><PinterestIcon/></li>
            </ul>
        </div>
    )
}