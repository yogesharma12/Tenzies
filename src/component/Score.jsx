import React from 'react';

function Score(props) {
	
	//The Score Component
	return (
		<div className="score-tile">
			<h2>1 <span className="player-name">{props.name}</span> </h2>
			
			<span className="points">{props.points}</span>
		</div>

	);
}

export default Score;