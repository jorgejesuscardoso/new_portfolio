import { useEffect, useState } from 'react';
import { MainHome } from './style';
import { useSelector } from 'react-redux';
import { ChangeThemeRedux } from '../../Types';
import PresentationSection from '../../components/sections/home/Presentation';

const Home = () => {
  const themeSelector = useSelector((state:ChangeThemeRedux) => state.changeThemeReduce )

  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(themeSelector)
  }, [themeSelector])

  return(
    <MainHome className={ theme }>
      <PresentationSection
        theme={ theme }
      />
    </MainHome>
  )
}

export default Home;