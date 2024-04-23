import NavBar from '../nav/NavBar'
import { HeaderStyle } from './style';

const MainHeader = () => {
  return(
    <HeaderStyle>
      <img src="logo.png" alt="Logo marca" />
      <NavBar />
    </HeaderStyle>
  )
}

export default MainHeader;