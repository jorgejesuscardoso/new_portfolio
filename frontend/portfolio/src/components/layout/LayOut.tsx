import { Outlet } from 'react-router-dom'
import MainHeader from '../header/Header'
import { Footeer } from '../footer/Foot';

const LayOut = () => {
  return(
    <div>
      <Outlet />
      <MainHeader />
      <Footeer />
    </div>
  )
}

export default LayOut;