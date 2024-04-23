import styled from 'styled-components';

// Folha de estilo do componente Header

export const HeaderStyle = styled.header`
  background-color: var(--nav-color);
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 10vh;

    img {
      height: 10vh;
    }
`;