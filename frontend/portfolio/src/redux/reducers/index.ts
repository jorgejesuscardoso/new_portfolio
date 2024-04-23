import { combineReducers } from 'redux';
import { changeThemeReduce } from './themaReducer';

const rootReducer = combineReducers({
  changeThemeReduce,
})

export default rootReducer;