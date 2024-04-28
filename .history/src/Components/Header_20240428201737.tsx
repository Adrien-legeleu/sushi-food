import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
export const Header =()=>{
    return (
        <div className='fixed h-16 w-full max-w-[1400px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center pl-12 pr-12'>
            <h2 className='font-title text-4xl text-whiteTitle'>Sushi Food</h2>
            <ul className='flex items-center gap-16 justify-between text-whiteText '>
                <li className='cursor-pointer hover:scale-125 duration-300 bg-green'>About</li>
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