import styled from 'styled-components';

export const LayOt = styled.div`
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  font-size: 0.8rem;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-thumb);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--scrollbar-track);
    }
`;