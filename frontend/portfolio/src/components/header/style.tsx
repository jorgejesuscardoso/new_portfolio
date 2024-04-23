import styled from 'styled-components';

// Folha de estilo do componente Header

export const HeaderStyle = styled.header`
  background-color: var(--nav-color-black);
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 10vh;

  &.claro {
    background-color: var(--nav-color-white) !important;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;
  height: 10vh;
    
    img {
      height: 100%;
    }
`;

export const Theme = styled.img`
  height: 4vh !important;
  cursor: pointer;
`;