import { useEffect, useState } from 'react';
import { ApresentationContent, ApresentationNote, ApresentationProfile, ApresentationSection, MainHome } from './style';
import { useSelector } from 'react-redux';
import { ChangeThemeRedux } from '../../Types';
import { photo } from '../../utils/ImportIcons';

const Home = () => {
  const selector = useSelector((state:ChangeThemeRedux) => state.changeThemeReduce )

  const [theme, setTheme] = useState('')

  useEffect(() => {
    setTheme(selector)
  }, [selector])

  return(
    <MainHome className={ theme }>
        <ApresentationSection className={ theme }>
          <ApresentationContent>
            <h3>Este portfólio ainda está em construção!</h3>
            <br />
            <br />
            <br />
            <h1>Olá, seja muito bem vindo!</h1>
            <br />
            <h3>Eu sou o Jorge, desenvolvedor web FullStack</h3>
            <br />
            <p>Possuo experiência em Python, JavaScript, TypeScript e C#, e ao longo dos meus estudos, adquiri habilidades sólidas em MySQL, Node.js, Express e Docker. </p>
            <br />
            <p>Busco constantemente aprimorar minhas habilidades e explorar novas tecnologias para oferecer o melhor resultado em meus projetos.</p>
            <br />
            <p>Meu objetivo é colaborar com equipes dinâmicas em todos os tipos de projetos, contribuindo com meus conhecimentos e dedicação para alcançar os melhores resultados possíveis.</p>

          </ApresentationContent>
          <ApresentationProfile>
            <img src={ photo } alt="Este sou eu!" />
            <ApresentationNote>
              <h3>Jorge de Jesus Cardoso</h3>
              <h4>Desenvolvedor Web</h4>
              <p>FullStack</p>
            </ApresentationNote>
          </ApresentationProfile>
        </ApresentationSection>
    </MainHome>
  )
}

export default Home;