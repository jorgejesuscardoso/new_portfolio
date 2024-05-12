import styled from 'styled-components';

export const SoftSkillSectionsStyled = styled.section`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  padding:  0 10vw;
  width: 100%;

  &.claro {
    li {
      &:hover {
        color: var(--text-color-hover-white);
        font-weight: 900;
      }
    }
  }
`;

export const SoftSkillContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SoftSkillTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const SoftSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

export const SoftSkillItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  color: var(--text-color-gray-2);
  cursor: pointer;

  &:hover {
    color: var(--text-color-hover);
  }
`;

export const SoftSkillIcon = styled.img`
  width: 100px;
  height: 100px;
`;

export const SoftSkillName = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 0.5rem;
`;

export const SoftSkillDescription = styled.div`
  background-color: var(--section-bg-color-2);
  font-size: 0.85rem;
  text-align: center;
  margin:  0 8rem;
  margin-bottom: 1rem;

  padding: 1rem;
  p {
    color: var(--text-color);
    margin-top: 0.3rem;
  }
  span {
    color: var(--text-color-hover);
  }
  
  &.claro {
    background-color: var(--section-bg-color-white);
    span {
      color: var(--text-color-hover-white);
    }

    p {
      color: var(--text-color-gray);
    }
  }
`;


