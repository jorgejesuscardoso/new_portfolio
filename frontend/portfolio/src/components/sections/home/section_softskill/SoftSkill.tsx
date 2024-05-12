import { useSelector } from 'react-redux';
import { SoftSkillContent, SoftSkillItem, SoftSkillList, SoftSkillName, SoftSkillSectionsStyled, SoftSkillTitle } from './Styled';
import { ChangeThemeRedux } from '../../../../Types';
import { useEffect, useState } from 'react';

export const SoftSkillSections = () => {
    const themeSelector = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce);
    const [theme, setTheme] = useState(themeSelector);

    useEffect(() => {
        setTheme(themeSelector);
    }, [themeSelector]);
    return (
        <SoftSkillSectionsStyled className={ theme }>
            <SoftSkillContent>
                <SoftSkillTitle>Soft Skills</SoftSkillTitle>
                <SoftSkillList>
                <SoftSkillItem>
                        <SoftSkillName>Criatividade</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Comunicação</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Trabalho em equipe</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Resolução de problemas</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Liderança</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Gerenciamento do tempo</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Adaptabilidade</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Empatia</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Pensamento crítico</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Flexibilidade</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Inteligência emocional</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Resiliência</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Pensamento criativo</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Proatividade</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Colaboração</SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem>
                        <SoftSkillName>Resolução de conflitos</SoftSkillName>
                    </SoftSkillItem>
                </SoftSkillList>
            </SoftSkillContent>
        </SoftSkillSectionsStyled>
    );
}