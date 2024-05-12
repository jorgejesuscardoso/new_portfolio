import styled from 'styled-components';

export const SoftSkillSectionsStyled = styled.section`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  padding:  0 10vw;
  width: 100%;

  &.claro {
    li {
      background-color: var(--section-bg-color-green);
      &:hover {
        background-color: var(--section-bg-color-blue);
        color: var(--text-color-hover-green);
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
  background-color: var(--text-color-hover-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  margin: 1rem;
  padding: 0 0.5rem;
  color: var(--text-color-white);
  border-radius: 20px;
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
      color: var(--text-color-hover-green);
    }

    p {
      color: var(--text-color-gray);
    }
  }
`;


