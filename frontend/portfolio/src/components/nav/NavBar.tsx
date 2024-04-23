import { Link } from 'react-router-dom';
import { MainNavbar } from './style';

const NavBar = () => {
  return(
    <MainNavbar>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>          
          <Link to='/portfolio'>
            Portfólio
          </Link>
        </li>
        <li>
          <Link to='/services'>
            Serviços
          </Link>
        </li>
        <li>
          <Link to='/about'>
            Sobre
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            Contato
          </Link>
        </li>
      </ul>
    </MainNavbar>
  )
}

export default NavBar;