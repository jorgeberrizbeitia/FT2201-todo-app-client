import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTodoDetailsService, updateTodoService } from "../services/todo.services"


function TodoEdit() {

  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ isUrgent, setIsUrgent ] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const handleTitle = (e) => setTitle(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleIsUrgent = (e) => setIsUrgent(e.target.checked)

  useEffect(() => {
    getTodoDetails()
  }, [])

  const getTodoDetails = async () => {
    try {
      const response = await getTodoDetailsService(id)

      setTitle(response.data.title)
      setDescription(response.data.description)
      setIsUrgent(response.data.isUrgent)
    } catch(err) {
      //navigate error
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // ?? 2
    try {
      await updateTodoService(id, { title, description, isUrgent })
      navigate("/todos")
    } catch(err) {  
      navigate("/error")
    }

  }

  return (
    <div>
    
    <h3>Actualizar nuevo ToDo</h3>
    
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

        <button>Actualizar</button>

      </form>
    
    </div>
  )
}

export default TodoEdit