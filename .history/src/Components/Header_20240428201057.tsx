import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
export const Header =()=>{
    return (
        <div className='fixed h-12 '>
            <h2 className='font-title text-whiteTitle'>Sushi Food</h2>
            <ul>
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