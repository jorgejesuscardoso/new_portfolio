import { useSelector } from 'react-redux';
import { CopyR, FooterContainer, FooterStyle } from './Style';
import { useEffect, useState } from 'react';
import { ChangeThemeRedux } from '../../Types';

const Footeer = () => {
  const themeSelector = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce);
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(themeSelector);
  }, [themeSelector]);
  console.log(themeSelector);
  return (
    <FooterStyle className={  theme }>
      <FooterContainer>
        <p>Contato: tst.jorgecardoso@gmail.com</p>
      </FooterContainer>
      <CopyR>
        &copy; Desenvolvido por Jorge de Jesus Cardoso. Todos os direitos reservados &mdash; Maio de 2024.
      </CopyR>
    </FooterStyle>
  )
};

export default Footeer;