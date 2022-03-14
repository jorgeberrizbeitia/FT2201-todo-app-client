import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addNewTodoService } from "../services/todo.services"

function AddForm(props) {

  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ isUrgent, setIsUrgent ] = useState(false)

  const handleTitle = (e) => setTitle(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleIsUrgent = (e) => setIsUrgent(e.target.checked)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const newTodo = { title, description, isUrgent }
      const response = await addNewTodoService(newTodo)
      // ?
      props.getAllTodos()
      setTitle("")
      setDescription("")
      setIsUrgent(false)
    } catch(err) {
      navigate("/error")
    }

  }

  return (
    <div>

      <h3>Agregar nuevo ToDo</h3>
    
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={handleTitle}
        />

        <br />

        <label htmlFor="description">Description:</label>
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={handleDescription}
        />

        <br />

        <label htmlFor="isUrgent">Urgent:</label>
        <input 
          type="checkbox" 
          name="isUrgent" 
          checked={isUrgent} 
          onChange={handleIsUrgent}
        />

        <button>Agregar</button>

      </form>

    </div>
  )
}

export default AddForm