import { SoftSkillDescriptionProps } from '../../../../Types';
import * as Description from './SoftSkillDescription ';

export const SoftSkillDescriptionUtil = ({ name }: SoftSkillDescriptionProps) => {
    switch (name) {        
        case 'Criatividade':
          return Description.Criatividade();
        case 'Comunicação':
          return Description.Comunicacao();
        case 'Trabalho em equipe':
          return Description.TrabalhoEmEquipe();
        case 'Resolução de problemas':
          return Description.ResolucaoDeProblemas();
        case 'Liderança':
          return Description.Lideranca();
        case 'Gerenciamento do tempo':
          return Description.GerenciamentoDoTempo();
        case 'Adaptabilidade':
          return Description.Adaptabilidade();
        case 'Empatia':
          return Description.Empatia();
        case 'Pensamento crítico':
          return Description.PensamentoCritico();
        case 'Flexibilidade':
          return Description.Flexibilidade();
        case 'Inteligência emocional':
          return Description.InteligenciaEmocional();
        case 'Resiliência':
          return Description.Resiliencia();
        case 'Pensamento criativo':
          return Description.PensamentoCriativo();
        case 'Proatividade':
          return Description.Proatividade();
        case 'Colaboração':
          return Description.Colaboracao();
        case 'Resolução de conflitos':
          return Description.ResolucaoDeConflitos();
        default:
            return <></>;
    }
}