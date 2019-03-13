import axios from 'axios';


export const toDo = axios.create({
  baseURL: 'http://localhost:4000/api/v1'
})