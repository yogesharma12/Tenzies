import React from "react";

const ThemeContext = React.createContext("theme-light")

const ThemeProvider = ({ children }) => {

	const [ theme, setTheme] = React.useState("theme-light");
	const toggleFunction = () => {
		if( theme === "theme-light"){
			setTheme("theme-dark")
		}
		else if( theme === "theme-dark"){
			setTheme("theme-light")
		}
		
	}
	
	return(
		<ThemeContext.Provider value={{ theme, toggleFunction }}>
			{ children }
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProvider };