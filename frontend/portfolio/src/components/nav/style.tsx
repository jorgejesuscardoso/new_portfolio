import styled from 'styled-components';

// Folha de estilo do componente NavBar

export const MainNavbar = styled.nav`
  display: flex;
  width: 50%;
  height: 100%;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80%;
          width: 20%;
          &:hover {
            border-bottom: 1px solid var(--border-color-1);
          }
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: var(--text-color-white);
        }
    }
`;