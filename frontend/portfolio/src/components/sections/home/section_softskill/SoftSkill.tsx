import { useDispatch, useSelector } from 'react-redux';
import { SoftSkillContent, SoftSkillItem, SoftSkillList, SoftSkillName, SoftSkillSectionsStyled, SoftSkillTitle } from './Styled';
import { ChangeThemeRedux } from '../../../../Types';
import { useEffect, useState } from 'react';
import { changeDescriptionAction } from '../../../../redux/actions/actionTheme';

export const SoftSkillSections = () => {
    const themeSelector = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce);
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(themeSelector);

    useEffect(() => {
        setTheme(themeSelector);
    }, [themeSelector]);

    const changeDescription = (description: string) => {
        dispatch(changeDescriptionAction(description));
    }
    return (
        <SoftSkillSectionsStyled className={ theme }>
            <SoftSkillContent>
                <SoftSkillTitle>Soft Skills</SoftSkillTitle>
                <SoftSkillList>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Criatividade') }
                    >
                        <SoftSkillName>
                            Criatividade
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Comunicação') }
                    >
                        <SoftSkillName>
                            Comunicação
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Trabalho em equipe') }
                    ><SoftSkillName
                        >
                            Trabalho em equipe
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Resolução de problemas') }
                    ><SoftSkillName
                        >
                            Resolução de problemas
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Liderança') }
                    >
                        <SoftSkillName>
                            Liderança
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Gerenciamento do tempo') }
                    ><SoftSkillName
                        >
                            Gerenciamento do tempo
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Adaptabilidade') }
                    >
                        <SoftSkillName>
                            Adaptabilidade
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Empatia') }
                    >
                        <SoftSkillName>
                            Empatia
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Pensamento crítico') }
                    ><SoftSkillName
                        >
                            Pensamento crítico
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Flexibilidade') }
                    >
                        <SoftSkillName>
                            Flexibilidade
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Inteligência emocional') }
                    ><SoftSkillName
                        >
                            Inteligência emocional
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Resiliência') }
                    >
                        <SoftSkillName>
                            Resiliência
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Pensamento criativo') }
                    ><SoftSkillName
                        >
                            Pensamento criativo
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Proatividade') }
                    >
                        <SoftSkillName>
                            Proatividade
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Colaboração') }
                    >
                        <SoftSkillName>
                            Colaboração
                        </SoftSkillName>
                    </SoftSkillItem>
                    <SoftSkillItem                    
                        onClick={ () => changeDescription('Resolução de conflitos') }
                    ><SoftSkillName
                        >
                            Resolução de conflitos
                        </SoftSkillName>
                    </SoftSkillItem>
                </SoftSkillList>
            </SoftSkillContent>
        </SoftSkillSectionsStyled>
    );
}