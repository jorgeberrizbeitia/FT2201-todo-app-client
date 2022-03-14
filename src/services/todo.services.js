
// aqui tendremos todas las llamadas a API de BE para ToDos

import axios from "axios";

const service = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/todos`
})

const getAllTodosService = () => {
  return service.get("/")
}

const addNewTodoService = (newTodo) => {
  return service.post("/", newTodo)
}

const getTodoDetailsService = (id) => {
  return service.get(`/${id}`)
}

const deleteTodoService = (id) => {
  return service.delete(`/${id}`)
}

const updateTodoService = (id, updatedTodo) => {
  return service.patch(`/${id}`, updatedTodo)
}

export {
  getAllTodosService,
  addNewTodoService,
  getTodoDetailsService,
  deleteTodoService,
  updateTodoService
} 
