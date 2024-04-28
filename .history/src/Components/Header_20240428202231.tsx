import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
export const Header =()=>{
    return (
        <div className='fixed h-20 w-full max-w-[1400px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center pl-12 pr-12'>
            <h2 className='font-title text-4xl text-whiteTitle'>Sushi Food</h2>
            <ul className='flex items-center gap-5 justify-between text-whiteText text-xl'>
                <li className='cursor-pointer  duration-200 hover:bg-green rounded-full p-6 pt-2 pb-2'>About</li>
                <li className='cursor-pointer  duration-200 hover:bg-green rounded-full p-6 pt-2 pb-2'>Menus</li>
                <li className='cursor-pointer  duration-200 hover:bg-green rounded-full p-6 pt-2 pb-2'>Reservation</li>
            </ul>
            <ul className='flex items-center justify-between gap-5 text-whiteTitle'>
                <li className='cursor-pointer  shadow-2xl shadow-black duration-300 hover:scale-125'>
                    <InstagramIcon/>
                   
                    
                </li>
                <li className='cursor-pointer  duration-300 hover:scale-125'> <FacebookIcon/></li>
                <li className='cursor-pointer  duration-300 hover:scale-125'><PinterestIcon/></li>
            </ul>
        </div>
    )
}