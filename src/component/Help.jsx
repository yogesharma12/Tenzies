import React from 'react';
import { motion } from "framer-motion";
import Backdrop from "./Backdrop.jsx";

const Help = (props) => {

	
	//The  Help Component
	return (

		<Backdrop onClick={props.onClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				className="modal"
				initial={
					{
						y: "-100vh",
						opacity: 0,
					}
				}
				animate={
					{
						y: "0",
						opacity: 1,
						transition: {
							duration: 0.1,
							type: "spring",
							damping: 25,
							stiffness: 500,
						}
					}
				}
				exit={
					{
						y: "100vh",
						opacity: 0,
					}
				}

			>
				<div className="modaltop-container">
					<button className="close-btn" onClick={props.onClose}>X</button>
				</div>

				<h1 className="help-heading">How to Play?</h1>

				<ul className="rules">
					<li>Click on Roll button to roll the dice</li>
					<li>Click on each die to freeze it's value</li>
					<li>Freeze all the dice with same value</li>
					<li>Click on Reset button to restart the game</li>
				</ul>

			</motion.div>
		</Backdrop>

	);
}

export default Help;

