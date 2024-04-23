import { Outlet } from 'react-router-dom'
import MainHeader from '../header/Header'

const LayOut = () => {
  return(
    <div>
      <Outlet />
      <MainHeader />
    </div>
  )
}

export default LayOut;