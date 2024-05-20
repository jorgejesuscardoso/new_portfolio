import { Outlet } from 'react-router-dom'
import MainHeader from '../header/Header'
import Footeer from '../footer/Foot';
import { LayOt } from './Style';
import { useSelector } from 'react-redux';
import { ChangeThemeRedux } from '../../Types';
import { useEffect, useState } from 'react';

const LayOut = () => {
  const themeSelector = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce);
  const [theme, setTheme] = useState('');

  useEffect(() => {
    setTheme(themeSelector);
  }, [themeSelector]);
  return(
    <LayOt className={ theme }>
      <Outlet />
      <MainHeader />
      <Footeer />
    </LayOt>
  )
}

export default LayOut;