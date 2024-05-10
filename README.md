## Seja bem bindo ao meu portfólio
# Visão geral
Este projeto é um site de portfólio pessoal desenvolvido para destacar minhas habilidades, experiências e projetos em desenvolvimento web. O objetivo principal é fornecer aos visitantes uma visão abrangente das minhas capacidades e conquistas profissionais.

### Deploy
O projeto está atualmente implantado na plataforma Netlify e pode ser acessado através do seguinte.

**Link:** [Netlify](https://bushidodevlab.netlify.app/)

## Tecnologias Utilizadas

- **Frontend:** React.js, Vite, TypeScript.
- **Estilização:** CSS com Styled Components.
- **Gerenciamento de Estado:** Redux.
- **Implantação:** Netlify.

## Funcionalidades Principais

**Apresentação Pessoal:** Uma seção inicial que apresenta uma breve introdução sobre mim, minha experiência e objetivos profissionais.

**Projetos Destacados:** Uma seção que destaca alguns dos meus projetos mais significativos, com descrições detalhadas e links para acessá-los.

**Temas Dinâmicos:** Implementei a capacidade de alternar entre diferentes temas de cores no site, proporcionando uma experiência visual personalizável para os usuários.

## Estrutura do Projeto

O projeto está estruturado de acordo com as melhores práticas de desenvolvimento web, seguindo uma arquitetura de componentes reutilizáveis e um fluxo de dados bem definido com Redux.

- **src/**
  - **components/:** Contém todos os componentes React utilizados no projeto, organizados por funcionalidade.
  - **pages/:** Contém todas as páginas do site organizadas em pastas e com seus respectivos arquivos CSS (**style.tsx**).
  - **redux/:** Configuração do Redux, incluindo actions, reducers e store.
  - **utils/:** Utilitários e funções auxiliares.
  - **App.tsx:** Segundo componente principal da aplicação, onde são definidas as rotas e a estrutura geral do site.
  - **index.css:** Arquivo com o CSS global do projeto.
  - **main.tsx:** Componente principal do projeto. Nele é adicionado as funcionalidades principais para o correto funcionamento do site. São elas: 
    - **BrowserRouter:** Paramentos necessário para alternar entre as páginas do site.
    - **Provider:** Paramento importante para o funcionamento do controlador de estado global, o **Redux**.
    - **App:** Referência ao arquivo **App.tsx**. É essa chamada que faz esse arquivo rodar fanzendo todo o site funcionar.
- **public/:**
  Diretório reservado para armazenar todas as imagens e configurações extras do site, ex:
  - **_redirects:** Arquivo de configurações do deploy para que aja o correto redirecionamento das páginas.
  - **robots.txt:** Arquivo de configuração de acesso que permite ou nao as ferramentas de pesquisas do google. Essa configuração favorece o aumento do SEO do site o que faz o site ser mais facilmente encontrado nos mecanismos de busca.
## Próximos Passos

 - **Adicionar Mais Projetos:** Continuar atualizando a seção de projetos destacados com novos projetos conforme eles forem sendo concluídos.
 - **Melhorias de Acessibilidade:** Implementar melhorias de acessibilidade para garantir que o site seja acessível para todos os usuários.
 - **Otimização de Desempenho:** Realizar otimizações de desempenho para garantir que o site carregue rapidamente e funcione sem problemas em diferentes dispositivos e conexões de internet.