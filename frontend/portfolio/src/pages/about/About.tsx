import { useSelector } from 'react-redux'
import { MainContainerAbout } from './style'
import { useEffect, useState } from 'react'
import { ChangeThemeRedux } from '../../Types'

export const About = () => {
  const themeSelctor = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce)
  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(themeSelctor)
  }, [themeSelctor])
  console.log(theme)
  return (
    <MainContainerAbout className={ theme }>
      <header>
        <h1>
          Sobre
        </h1>
      </header>
      <div>
        <p>
          Olá, meu nome é Jorge Cardoso, sou desenvolvedor web fullstack.
          Atualmente estou estudando C#, ASP.NET core, Wordpress entre outras tecnologias. 
          Estou em busca de oportunidades para trabalhar com desenvolvimento web.
        </p>
        <p>
          Este site foi desenvolvido com React, TypeScript, Styled Components, React Router e redux. 
        </p>
        <p>
          Se você deseja entrar em contato comigo, envie um e-mail para: <strong> tst.jorgecardoso@gmail.com</strong>
        </p>
      </div>
    </MainContainerAbout>
  )
}