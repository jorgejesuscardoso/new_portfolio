export interface Thema {
  Thema: 'claro' | 'escuro';
}
export type ChangeThemeRedux = {changeThemeReduce: string}

export type PresentationSectionProps = {
  theme: string
}

export type ChangeDescriptionRedux = {changeDescriptionReduce: string}

export type SoftSkillDescriptionProps = {
  name: string;
}