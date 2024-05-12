import styled from 'styled-components';

export const SkillSectionsStyled = styled.section`
  background-color: var(--section-bg-color-2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  font-size: 0.8rem;
  width: 100%;
  
  &.claro {
    background-color: var(--section-bg-color-white);  
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 10vw;
`;

export const SkillsTitle = styled.h2`
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1px;
`;

export const SkillItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--section-bg-color-3);
  padding: 9px;
  border-radius: 10px;
`;

export const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const SkillName = styled.span`
  color: var(--text-color);
  font-size: 0.8rem;
  margin-top: 10px;
`;