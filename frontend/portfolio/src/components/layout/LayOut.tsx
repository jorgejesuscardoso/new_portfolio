import { Outlet } from 'react-router-dom'
import MainHeader from '../header/Header'
import { Footer } from '../footer/Footer';

const LayOut = () => {
  return(
    <div>
      <Outlet />
      <MainHeader />
      <Footer />
    </div>
  )
}

export default LayOut;