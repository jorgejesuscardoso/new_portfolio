import { useEffect, useState } from 'react';
import { MainHome } from './style';
import { useSelector } from 'react-redux';
import { ChangeThemeRedux } from '../../Types';

const Home = () => {
  const seletor = useSelector((state:ChangeThemeRedux) => state.changeThemeReduce )

  const [thema, setThema] = useState('')

  useEffect(() => {
    setThema(seletor)
  }, [seletor])

  return(
    <MainHome className={ thema }>
        <h1>Home</h1>
    </MainHome>
  )
}

export default Home;