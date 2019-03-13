import {toDo} from '../api/toDo'
import { FETCH_TASKS, DELETE_TASK, FETCH_TASK } from './types'

export const addTask = (task) => async dispatch => {
  const result = await toDo.post('/todos', task);
  console.log(result)
  dispatch ({ type: 'addUser', payload: result.data })
}

export const fetchTasks = () => async dispatch => {
  const result = await toDo.get('/todos');
   dispatch({ type: FETCH_TASKS, payload: result.data })
}

export const deleteTask = (id) => async dispatch => {
  const result = await toDo.delete(`/todos/${id}`);
  console.log(result)
  dispatch({ type: DELETE_TASK, payload: result.data})
}

export const fetchTask = (id) => async dispatch => {
  const result = await toDo.get(`/todos/${id}`);
  dispatch({ type: FETCH_TASK, payload: result.data})
}