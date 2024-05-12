import { combineReducers } from 'redux';
import { changeThemeReduce } from './themaReducer';
import { changeDescriptionReduce } from './descriptionReducer';

const rootReducer = combineReducers({
  changeThemeReduce,
  changeDescriptionReduce,
})

export default rootReducer;