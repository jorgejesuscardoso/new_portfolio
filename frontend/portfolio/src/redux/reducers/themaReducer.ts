type ActionType = {
  type: string,
  theme: string,
}
  
const INITIAL_STATE = 'escuro';
  

export const changeThemeReduce = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case 'change_theme':
            return action.theme;
        default:
            return state;
    }
}
