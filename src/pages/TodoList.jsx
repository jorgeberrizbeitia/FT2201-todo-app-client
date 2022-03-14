import { useEffect, useState } from "react"
import AddForm from "../components/AddForm"
import { Link, useNavigate } from "react-router-dom"
import { getAllTodosService } from "../services/todo.services"

function TodoList() {

  // 1. crear estado que controle la informacion
  const [ allTodos, setAllTodos ] = useState(null)

  const navigate = useNavigate()

  // 2. el useEffect para buscar la informacion componentDidMount
  useEffect(() => {
    getAllTodos()
  }, [])

  // 3. la funcion async que haga la llamada a la API y actualice el estado
  const getAllTodos = async () => {
    try {
      const response = await getAllTodosService()
      setAllTodos(response.data)
    } catch(err) {
      navigate("/error")
    }
  }

  // 4. el sistema de loading
  if (!allTodos) {
    return <h3>...Loading</h3>
  }

  return (
    <div>
    
      <AddForm getAllTodos={getAllTodos}/>

      <h1>Lista de ToDos</h1>

      {allTodos.map((eachTodo) => {
        return (
          <div>
            {/* <p>{eachTodo.title}</p> */}
            <Link to={`/todos/${eachTodo._id}/details`}>{eachTodo.title}</Link>
          </div>
        )
      })}
    
    </div>
  )
}

export default TodoList