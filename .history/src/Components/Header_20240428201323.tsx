import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
export const Header =()=>{
    return (
        <div className='fixed h-16 w-full max-w-[1500px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center pl-12 pr-12'>
            <h2 className='font-title text-whiteTitle'>Sushi Food</h2>
            <ul className='flex items-center justify-between text-whiteText'>
                <li>About</li>
                <li>Menus</li>
                <li>Reservation</li>
            </ul>
            <ul>
                <li>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <PinterestIcon/>
                </li>
            </ul>
        </div>
    )
}