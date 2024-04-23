// ACTIONS TYPES
export const THEME = 'change_theme'

export const changeThemeAction = (theme: string) => ({
  type: THEME,
  theme,
})
