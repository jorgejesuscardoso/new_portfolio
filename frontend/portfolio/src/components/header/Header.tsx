import { useEffect, useState } from 'react';
import NavBar from '../nav/NavBar'
import { 
  HeaderStyle,
  ImgContainer,
  Theme,
} from './style';
import { 
  IcoTemaClaro,
  IcoTemaEscuro,
  logoBlack,
  logoWhite,
} from '../../utils/ImportIcons';
import {
  GetFromLocalStorage,
  SetToLocalStorage,
} from '../../utils/localStorage';
import { useDispatch } from 'react-redux';
import { changeThemeAction } from '../../redux/actions/actionTheme';


const MainHeader = () => {
  const dispatch = useDispatch();
  const [toggleTheme, setToggleTheme] = useState<'claro' | 'escuro'>('escuro')

  useEffect(() => {
    const hasThema = GetFromLocalStorage('thema');
    if (hasThema) setToggleTheme(hasThema === 'claro' ? 'claro' : 'escuro')
  }, [])

  useEffect(() => {
     SetToLocalStorage('thema', toggleTheme);
     dispatch(changeThemeAction(toggleTheme))    
  }, [toggleTheme])


  const handleToggleTheme = () => {
    setToggleTheme(toggleTheme === 'claro' ? 'escuro' : 'claro'); 
  }

  return(
    <HeaderStyle className={ toggleTheme }>
      <ImgContainer>
        <img src={toggleTheme === 'claro' ? logoWhite : logoBlack} alt="Logo marca Bushido DevLab - Codando o futuro com segurança e qualidade!" />
        <Theme 
          src={ toggleTheme === 'claro' ? IcoTemaEscuro : IcoTemaClaro}
          alt={ `O tema ativo é o tema ${toggleTheme}` }
          onClick={ () => handleToggleTheme() }
        />
      </ImgContainer>
      <NavBar 
        Thema={ toggleTheme }
      />
    </HeaderStyle>
  )
}

export default MainHeader;