import styled from 'styled-components';
export const PresentationSectionStyle = styled.section`
  background-color: var(--section-bg-color-1);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 15px 0;
  width: 100%;
  
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