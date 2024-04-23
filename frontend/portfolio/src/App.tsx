import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import LayOut from './components/layout/LayOut'


function App() {

  return (
    <Routes>
      <Route path='/' element={ <LayOut />} >
        <Route index element={ <Home />} />
      </Route>
    </Routes>
  )
}

export default App
