import { Link } from 'react-router-dom';
import { MainNavbar } from './style';
import { Theme } from '../../Types';


const NavBar = ({ Theme }: Theme) => { 

  return(
    <MainNavbar className={ Theme }>
      <ul>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/projects'>
            Projetos
          </Link>
        </li>
        <li>
          <Link to='/highlights'>
            Destaques
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