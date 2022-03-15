import { NavLink } from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Navbar(props) {

  const { isLoggedIn, setIsLoggedIn } = props

  const navigate = useNavigate()

  const handleLogOut = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("authToken")
    navigate("/login")
  }

  return (
    <div>
    
      <NavLink to="/">
        Home
      </NavLink>

      { 
        isLoggedIn && <NavLink to="/todos">Todos</NavLink>
      }

      {
        !isLoggedIn && <NavLink to="/signup">Signup</NavLink>
      }

      {
        !isLoggedIn && <NavLink to="/login">Login</NavLink>
      }

      {
        isLoggedIn && <button onClick={handleLogOut}>Log out</button>
      }
      
    </div>
  )
}

export default Navbar