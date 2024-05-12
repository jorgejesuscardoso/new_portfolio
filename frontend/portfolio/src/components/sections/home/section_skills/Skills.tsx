import { useSelector } from 'react-redux';
import { CS, DOCKER, EXP, JS, NodeIco, ORM, PY, Reactico, SQL, TS } from '../../../../utils/ImportIcons'
import { SkillIcon, SkillItem, SkillName, SkillSectionsStyled, SkillsContent, SkillsList, SkillsTitle } from './Style'
import { ChangeThemeRedux } from '../../../../Types';
import { useEffect, useState } from 'react';

export const SkillSections = () => {
    const themeSelector = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce);
    const [theme, setTheme] = useState(themeSelector);

    useEffect(() => {
        setTheme(themeSelector);
    }, [themeSelector]);
    return (
        <SkillSectionsStyled className={ theme }>
            <SkillsContent>
                <SkillsTitle>Principais Stacks</SkillsTitle>
                <SkillsList>
                    <SkillItem>
                        <SkillIcon src={JS} alt="JavaScript" />
                        <SkillName>JavaScript</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={TS} alt="TypeScript" />
                        <SkillName>TypeScript</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={CS} alt="C-Sharp" />
                        <SkillName>C#</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={PY} alt="Python" />
                        <SkillName>Python</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={Reactico} alt="React.JS" />
                        <SkillName>React</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={NodeIco} alt="Node.JS" />
                        <SkillName>Node.js</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={EXP} alt="Express.Js" />
                        <SkillName>Express.js</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={SQL} alt="MySQL" />
                        <SkillName>SQL</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={DOCKER} alt="Docker" />
                        <SkillName>Docker</SkillName>
                    </SkillItem>
                    <SkillItem>
                        <SkillIcon src={ORM} alt="ORM Sequelize" />
                        <SkillName>ORM Sequelize</SkillName>
                    </SkillItem>
                </SkillsList>
            </SkillsContent>
        </SkillSectionsStyled>
    )
}