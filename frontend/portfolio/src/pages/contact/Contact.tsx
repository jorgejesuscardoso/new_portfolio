import { useSelector } from 'react-redux';
import { ContactContainer, FormContainer, FormContent, MainContainerContact, SocialContainer } from './style';
import { ChangeThemeRedux } from '../../Types';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';
import FormButtons from '../../components/buttons/FormButtons';
import { Linkedin, X, face, insta } from '../../utils/ImportIcons';

export const Contact = () => {
  const themeSelector = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce);
  const [theme, setTheme] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTheme(themeSelector);
  }, [themeSelector]);

  const ValidEmailRegex = (email: string) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
  }

  const ValidTextArea = (message: string) => {
    return message.length > 5;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!ValidEmailRegex(email)) {
        swal.fire({
          title: 'Insira um E-mail válido!',
          icon: 'error',
          confirmButtonText: 'ok'
        });
        return;
      }
      if (!ValidTextArea(message)) {
        swal.fire({
          title: 'Insira uma mensagem!',
          text: 'Deixe-me saber um pouco sobre você! :)',
          icon: 'error',
          confirmButtonText: 'ok'
        });
        return;
      }
      const data = {
        subject: 'Contato do Portfólio',
        name,
        email,
        message
      };

      emailjs.send(
        'service_8w6wmfl',
        'template_wzq0yrb',
        data,
        'otAOM5rOE24b42eWU'
      );
      setName('');
      setEmail('');
      setMessage('');
      swal.fire({
        title: 'Mensagem enviada com sucesso!',
        text: 'Em breve entrarei em contato com você.',
        icon: 'success',
        confirmButtonText: 'ok'
      });
    } catch (error) {
      swal.fire({
        title: 'Erro ao enviar a mensagem!',
        text: 'Tente novamente mais tarde.',
        icon: 'error',
        confirmButtonText: 'ok'
      });
      console.error('Error:', error);
    }
  };
  return (
    <MainContainerContact className={ theme }>
      <header>
        <h1>Entre em Contato</h1>
      </header>
      <ContactContainer>
        <ul>
          <li>
            <b>E-mail: </b>tst.jorgecardoso@gmail.com
          </li>
          <li>
            <b>Whatsapp:</b> (73) 9 9126-6263
          </li>
          <li>
            <b>Endereço:</b> Travessa Ana Delmira, 31, Curral Novo, Jequié, Bahia
          </li>
        </ul>
      </ContactContainer>
      <SocialContainer>
        <h2>Encontre-me nas redes sociais:</h2>
        <ul>          
          <li>
            <img
            src={ Linkedin }
            alt="Ir para perfil do linkedin"
            title='Perfil do LinkedIn de Jorge Jesus Cardoso'
          />
            <a
              href="https://www.linkedin.com/in/jorgejesuscardoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title='Perfil do LinkedIn de Jorge Jesus Cardoso'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <img
              src={ face }
              alt="Ir para perfil do Facebook"
              title='Perfil do Facebook de Jorge Jesus Cardoso'
            />
            <a
              href="https://www.facebook.com/tst.jorgecardoso"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title='Perfil do Facebook de Jorge Jesus Cardoso'
            >
              Facebook
            </a>
          </li>
          <li>
            <img
              src={ insta }
              alt="Ir para perfil do Instagram"
            />
            <a
              href="https://www.instagram.com/jorge.bushido/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title='Perfil do Instagram de Jorge Jesus Cardoso'
            >
              Instagram
            </a>
          </li>
          <li>
            <img
              src={ X }
              alt="Ir para perfil do Twitter"
              title='Perfil do Twitter de Jorge Jesus Cardoso'
            />
            <a
              href="https://x.com/JorgeBushido"
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="Twitter"
              title='Perfil do Twitter de Jorge Jesus Cardoso'
            >
              X (Twitter)
            </a>
          </li>
        </ul>
      </SocialContainer>
      <FormContainer>
        <h3>Se preferir mande uma mensagem:</h3>
        <p>Responderei o mais rápido possível.</p>
        <p>Obrigado!</p>
        <FormContent onSubmit={ (e) => handleSubmit(e) }>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              onChange={(event) => setName(event.target.value)}
              required 
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label htmlFor="message">
            Mensagem:
            <textarea
              id="message"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>
          <FormButtons/>
        </FormContent>
      </FormContainer>
    </MainContainerContact>
  );
};
