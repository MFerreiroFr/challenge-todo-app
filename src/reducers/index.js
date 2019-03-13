import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import detailReducer from './detailReducer';


export default combineReducers ({
  tasks: tasksReducer,
  taskDetail: detailReducer
})