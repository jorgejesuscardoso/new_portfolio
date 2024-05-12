import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background-color: var(--bg-footer-color);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-color-white);
  height: 30vh;
  width: 100%;
  padding: 1rem;
  font-size: 0.8rem;
  bottom: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CopyR = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-color-white);
  font-size: 0.8rem;
  bottom: 0;
`;