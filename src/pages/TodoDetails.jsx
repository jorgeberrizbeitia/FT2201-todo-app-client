import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { deleteTodoService, getTodoDetailsService } from "../services/todo.services"


function TodoDetails() {

  const [ todoDetails, setTodoDetails ] = useState(null)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getTodoDetails()
  }, [])

  const getTodoDetails = async () => {
    try {
      const response = await getTodoDetailsService(id)
      setTodoDetails(response.data)
    } catch(err) {
      // navigate error
    }
  }

  const handleClick = async () => {
    try {
      await deleteTodoService(id)
      navigate("/todos")
    } catch(err) {
      navigate("/error")
    }
  }

  if (!todoDetails) {
    return <h3>...Loading</h3>
  }

  return (
    <div>
    
      <h3>Todo Details</h3>

      <h4>{todoDetails.title}</h4>
      <p>Descripción: {todoDetails.description}</p>
      <p>Urgente: { todoDetails.isUrgent ? "SIII" : "Nah, dale tiempo"}</p>

      <button onClick={handleClick}>Borrar</button>
      <Link to={`/todos/${todoDetails._id}/edit`}>Editar</Link>
    
    </div>
  )
}

export default TodoDetails