import { Outlet } from 'react-router-dom'
import MainHeader from '../header/Header'
import { Footers } from '../footer/Foot';

const LayOut = () => {
  return(
    <div>
      <Outlet />
      <MainHeader />
      <Footers />
    </div>
  )
}

export default LayOut;