import { DESCRIPTION } from '../actions/actionTheme';

type ActionType = {
  type: string,
  description: string,
}
  
const INITIAL_STATE = '';
  

export const changeDescriptionReduce = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {
        case DESCRIPTION:
            return action.description;
        default:
            return state;
    }
}
