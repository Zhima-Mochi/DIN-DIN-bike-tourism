
import { Link } from 'react-router-dom';
import logo_white from '../assets/img/logo_dark.png';
import logo_color from '../assets/img/logo_light.png';
const logo_selector = {
    "white": logo_white,
    "color": logo_color,
}

export default function LogoNavbar({ logo_color = 'white' }) {
    return (
        <Link to='/'>
            <img className="fixed  z-50 -top-5 lg:-top-3 transform scale-60 lg:scale-90 left-2/4 -translate-x-2/4 " src={logo_selector[logo_color]} alt="Logo" />
            {logo_color==='white' && <img className="fixed  z-50 -top-5 lg:-top-3 transform scale-60 lg:scale-90 left-2/4 -translate-x-2/4 " src={logo_selector[logo_color]} />}
        </Link>
    );
}
