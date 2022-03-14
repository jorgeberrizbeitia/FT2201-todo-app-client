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

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home /> }/>
        <Route path="/todos" element={ <TodoList /> } />
        <Route path="/todos/:id/details" element={ <TodoDetails /> } />
        <Route path="/todos/:id/edit" element={ <TodoEdit /> } />

        <Route path="/error" element={ <Error /> } />
        <Route path="*" element={ <NotFound /> } /> 

      </Routes>


    </div>
  );
}

export default App;
