import { useSelector } from 'react-redux';
import { SoftSkillDescription, SoftSkillName } from './Styled';
import { ChangeThemeRedux } from '../../../../Types';
import { useEffect, useState } from 'react';


export const Criatividade = () => {
    const themeSelector = useSelector((state: ChangeThemeRedux) => state.changeThemeReduce);
    const [theme, setTheme] = useState(themeSelector);

    useEffect(() => {
        setTheme(themeSelector);
    }, [themeSelector]);

    return (
        <SoftSkillDescription className={ theme }>
            <SoftSkillName>Criatividade</SoftSkillName>
            <div>
                <p>Capacidade de pensar fora da caixa, de encontrar soluções inovadoras e de enxergar possibilidades onde outros não veem.</p>
                <p>
                    A criatividade é uma habilidade que pode ser desenvolvida e aprimorada com o tempo, por meio de práticas como a leitura, o estudo de diferentes áreas do conhecimento e a experimentação de novas ideias.
                </p>
                <p>
                    Além disso, a criatividade é uma habilidade que pode ser aplicada em diversas áreas da vida, como no trabalho, nos estudos e nos relacionamentos pessoais.
                </p>
            </div>
        </SoftSkillDescription>
    );
}

export const Comunicacao = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Comunicação</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const TrabalhoEmEquipe = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Trabalho em equipe</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const ResolucaoDeProblemas = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Resolução de problemas</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const Lideranca = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Liderança</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const GerenciamentoDoTempo = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Gerenciamento do tempo</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const Adaptabilidade = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Adaptabilidade</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const Empatia = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Empatia</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const PensamentoCritico = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Pensamento crítico</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const Flexibilidade = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Flexibilidade</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const InteligenciaEmocional = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Inteligência emocional</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const Resiliencia = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Resiliência</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const PensamentoCriativo = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Pensamento criativo</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const Proatividade = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Proatividade</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const Colaboracao = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Colaboração</SoftSkillName>
        </SoftSkillDescription>
    );
}

export const ResolucaoDeConflitos = () => {
    return (
        <SoftSkillDescription>
            <SoftSkillName>Resolução de conflitos</SoftSkillName>
        </SoftSkillDescription>
    );
}
