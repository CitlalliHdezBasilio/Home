import Link from '@mui/material/Link';
import '../css/Header.css'

const Header = () => {
    const URL = window.location.href+'agregar';
    return (
        <div>
        <Link href={URL} underline="hover"  color="inherit">
            {'Agregar'}
        </Link>
        </div>
    )
};


export default Header;