import React from 'react';

function Die(props) {
	//Conditional Color property - based on isHeld 
	const styles = {
		backgroundColor: props.isHeld ? "#59E391" : "white"
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