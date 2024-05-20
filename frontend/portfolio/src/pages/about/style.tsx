import styled from 'styled-components';

export const MainContainerAbout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.83rem;
  width: 100%;
  margin-top: 10vh;

  h1 {
    margin-top: 20vh;
    margin-bottom: 5vh;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10vh;
    gap: 2vh;
    
    p {
      text-align: center;
      max-width: 30%;
    }
  }
`;