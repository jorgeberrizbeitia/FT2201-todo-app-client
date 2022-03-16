import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeWrapper(props) {

  const [ darkMode, setDarkMode ] = useState(true)

  const darkTheme = {
    backgroundColor: "black",
    color: "darkGray"
  }

  const lightTheme = {
    backgroundColor: "white",
    color: "black"
  }

  const switchTheme = () => {
    return darkMode ? darkTheme : lightTheme
  }

  const switchBtnTheme = () => {
    return darkMode ? { backgroundColor: "red" } : { backgroundColor: "green" }
  }


  // creamos el obj con todo el contexto
  const passedContext = {
    darkMode,
    setDarkMode,
    switchTheme,
    switchBtnTheme
  }


  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeWrapper }