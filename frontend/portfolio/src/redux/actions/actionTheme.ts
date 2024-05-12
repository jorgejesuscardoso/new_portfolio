// ACTIONS TYPES
export const THEME = 'change_theme'

export const DESCRIPTION = 'change_description'

export const changeThemeAction = (theme: string) => ({
  type: THEME,
  theme,
})

export const changeDescriptionAction = (description: string) => ({
  type: DESCRIPTION,
  description,
})
