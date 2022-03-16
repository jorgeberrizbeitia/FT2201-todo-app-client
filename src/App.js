import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';
import TodoEdit from './pages/TodoEdit';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

import Navbar from "./components/Navbar"
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useEffect, useState, useContext } from 'react';
import { verifyService } from './services/auth.services';

import { ThemeContext } from "./context/theme.context"

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const { darkMode, setDarkMode, switchTheme } = useContext(ThemeContext)

  useEffect(() => {
    verifyUser()
  }, [])

  const verifyUser = async () => {
    // conectar con el server y validar el token
    try {
      await verifyService()
      // cambiar el isLoggedIn state a true
      setIsLoggedIn(true)
    } catch(err) {
      setIsLoggedIn(false)
    }
  }

  return (
    <div className="App" style={switchTheme()}>

      <button onClick={() => setDarkMode(!darkMode)}>Change Theme</button>

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/todos" element={ <TodoList /> } />
        <Route path="/todos/:id/details" element={ <TodoDetails /> } />
        <Route path="/todos/:id/edit" element={ <TodoEdit /> } />

        <Route path="/signup" element={ <Signup /> } />
        <Route path="/login" element={ <Login setIsLoggedIn={setIsLoggedIn}/> } />

        <Route path="/error" element={ <Error /> } />
        <Route path="*" element={ <NotFound /> } /> 

      </Routes>


    </div>
  );
}

export default App;
