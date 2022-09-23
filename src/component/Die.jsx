import React from 'react';
import {ThemeContext} from "../context/ThemeContext.jsx";


function Die(props) {

	const { theme } = React.useContext(ThemeContext);
	
	//Conditional Color property - based on isHeld
	
	const styles = {
		backgroundColor: props.isHeld ? (theme === "theme-light" ? "#59E391" : "darkgreen") : (theme === "theme-light" ? "white" : "#0B2434")
	}

	//The Dice Component
	return (
		<div className="die-face"
			style={styles}
			onClick={props.holdDice}
		>
			<h1 className="die-num" >{props.value}</h1>
		</div>

	);
}

export default Die;