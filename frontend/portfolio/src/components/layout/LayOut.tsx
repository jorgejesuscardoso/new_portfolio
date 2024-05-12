import { Outlet } from 'react-router-dom'
import MainHeader from '../header/Header'
import Footeer from '../footer/Foot';
import { LayOt } from './Style';

const LayOut = () => {
  return(
    <LayOt>
      <Outlet />
      <MainHeader />
      <Footeer />
    </LayOt>
  )
}

export default LayOut;