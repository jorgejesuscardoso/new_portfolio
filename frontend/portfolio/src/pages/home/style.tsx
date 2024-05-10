import styled from 'styled-components';


// Folha de estilo page Home

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  width: 100%;;
  height: 93vh;
`;

export const PresentationSection = styled.section`
  background-color: var(--section-bg-color-1);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 15px 0;
  width: 100%;

  img {
    width: 30vw;
    padding: 10px;
    border-radius: 50%;  
  }

  &.claro {
    background-color: var(--section-bg-color-white);  
  }
`;

export const PresentationContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 10vw;
`;

export const PresentationProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
`;

export const PresentationNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
