import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
export const Header =()=>{
    return (
        <div className='fixed h-20 w-full max-w-[1400px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center pl-12 pr-12'>
            <h2 className='font-title text-4xl text-whiteTitle'>Sushi Food</h2>
            <ul className='flex items-center gap-16 justify-between text-whiteText text-xl'>
                <li className='cursor-pointer  duration-300 hover:bg-green rounded-full p-2 pt-1 pb-1'>About</li>
                <li>Menus</li>
                <li>Reservation</li>
            </ul>
            <ul className='flex items-center justify-between gap-5 text-whiteTitle'>
                <li>
                    <InstagramIcon/>
                   
                    
                </li>
                <li> <FacebookIcon/></li>
                <li><PinterestIcon/></li>
            </ul>
        </div>
    )
}