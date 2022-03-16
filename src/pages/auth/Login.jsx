import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth.services";

import { ThemeContext } from "../../context/theme.context";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("")

  const { switchBtnTheme } = useContext(ThemeContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = { email, password }

    try {

      // contactar con el server para login
      const response = await loginService(user)
      const { authToken } = response.data
      console.log("authToken", authToken)
      // recibir el token y guardarlo en localstorage

      localStorage.setItem("authToken", authToken)
      // redireccionar a "/todos"
      props.setIsLoggedIn(true)
      navigate("/todos")

    } catch(err) {
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data.errorMessage)
      } else {
        navigate("/error")
      }
    }

  }

  // ejemplo de estilos propios y estilos del context
  const btnStyles = {
    color: "blue"
  }

  return (
    <div>

      <h3>Acceder</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        {/* <button style={{...btnStyles, ...switchBtnTheme()}}>Submit</button> */}
        <button style={switchBtnTheme()}>Submit</button>
      </form>
      <p>{errorMessage}</p>
    </div>
  );
}

export default Login;
