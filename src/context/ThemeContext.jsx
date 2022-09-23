import React from "react";

const ThemeContext = React.createContext("theme-light")

const ThemeProvider = ({ children }) => {

	const [ theme, setTheme] = React.useState(JSON.parse(localStorage.getItem('theme')) || "theme-light");
	const toggleFunction = () => {
		if( theme === "theme-light"){
			setTheme("theme-dark")
		}
		else if( theme === "theme-dark"){
			setTheme("theme-light")
		}
		
	}

	React.useEffect(()=> {
		localStorage.setItem('theme', JSON.stringify(theme))
	}, [theme])

	
	
	return(
		<ThemeContext.Provider value={{ theme, toggleFunction }}>
			{ children }
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProvider };