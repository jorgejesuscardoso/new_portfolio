import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import LayOut from './components/layout/LayOut'


function App() {

  return (
    <Routes>
      <Route path='/' element={ <LayOut />} >
        <Route index element={ <Home />} />
        <Route path='/projects' element={ <h1>Projetos: Em construção</h1>} />
        <Route path='/highlights' element={ <h1>Destaques: Em construção</h1>} />
        <Route path='/services' element={ <h1>Serviços: Em construção</h1>} />
        <Route path='/contact' element={ <h1>Contato: Em construção</h1>} />
        <Route path='/about' element={ <h1>Sobre: Em construção</h1>} />
      </Route>
    </Routes>
  )
}

export default App
