import { Link } from 'react-router-dom';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Esta página no existe!</h1>
      <Link to="/" >
        <HomeTwoToneIcon color="secondary" fontSize="large"/>
      </Link>
    </div>
  )
}

export default NotFound;