import { PresentationSectionProps } from '../../../Types'
import { Card_Thumb_Profile } from '../../cards/Card_Thumb_Presentation'
import { PresentationContent, PresentationProfile, PresentationSectionStyle } from './Style'

const PresentationSection = ({ theme }: PresentationSectionProps) => {
  return (
    <PresentationSectionStyle className={ theme }>
      <PresentationContent>
        <h3>Este portfólio ainda está em construção!</h3>
        <p>Para uma melhor experiência, acesse via chrome. </p>
        <p>Existe um problema de formatação de texto e espaçamentos no firefox que ainda não foi resolvido.</p>
        <br />
        <br />
        <br />
        <h1>Olá, seja muito bem vindo!</h1>
        <br />
        <h3>Eu sou o Jorge, desenvolvedor web FullStack.</h3>
        <br />
        <p>Possuo experiência em Python, JavaScript, TypeScript e C#, e ao longo dos meus estudos, adquiri habilidades sólidas em MySQL, Node.js, Express e Docker. </p>
        <br />
        <p>Busco constantemente aprimorar minhas habilidades e explorar novas tecnologias para oferecer o melhor resultado em meus projetos.</p>
        <br />
        <p>Meu objetivo é colaborar com equipes dinâmicas em todos os tipos de projetos, contribuindo com meus conhecimentos e dedicação para alcançar os melhores resultados possíveis.</p>
        <br />        
      </PresentationContent>

      <PresentationProfile>
        <Card_Thumb_Profile />
      </PresentationProfile>
        
    </PresentationSectionStyle>
  )
}

export default PresentationSection