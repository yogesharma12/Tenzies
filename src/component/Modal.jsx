import React from 'react';
import {motion} from "framer-motion";
import Backdrop from "./Backdrop.jsx";

// const dropIn = {
// 	hidden : {
// 		y: "-100vh",
// 		opacity: 0,
// 	},
// 	visible : {
// 		y: "0",
// 		opacity: 1,
// 		transition : {
// 			duration: 0.1,
// 			type: "spring",
// 			damping: 25,
// 			stiffness: 500,
// 		},
// 	},
// 	exit : {
// 		y: "100vh",
// 		opacity: 0,
// 	}
// }

const Modal = (props) => {

	const [confirm, setConfirm] = React.useState(false)
	const [name , setName] = React.useState('')

	const handleConfirm = () => {
		setConfirm(true)
		props.setGamerName(name)
		props.handleClose()
	}
	
	
	//The  Modal Component
	return (
		
		<Backdrop onClick={props.handleClose}>
			<motion.div 
				onClick={(e)=> e.stopPropagation()}
				className="modal"
				//varients={dropIn}
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
						transition : {
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
					<button className="close-btn" onClick={props.handleClose}>X</button>
				</div>
				
				<h2>Enter your gaming name to log it in LeaderBoard</h2>
				<input 
					type="text"
					placeholder="Your name here"
					className="name-input"
					value={name}
					onChange={(e)=> setName(e.target.value)}
					/>
				<div>
					<button onClick={props.handleClose} className="reset-btn">Cancel</button>
					<button onClick={handleConfirm} className="roll-btn">Confirm</button>

				</div>
				
			</motion.div>
		</Backdrop>

	);
}

export default Modal;

