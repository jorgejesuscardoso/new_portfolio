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
  font-size: 0.85rem;
  font-weight: 600;
  bottom: 0;

  &.claro {
    background-color: var(--bg-footer-color-claro) !important;
    color: var(--text-color-gray-2) !important;
    p {
      color: var(--text-color-gray-2) !important;
    }
  }
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