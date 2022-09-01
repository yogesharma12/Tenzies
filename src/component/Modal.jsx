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
	const inputRef = React.useRef(null)
	

	const handleConfirm = () => {
		setConfirm(true)
		props.setGamerName(inputRef.current.value)
		localStorage.setItem('name', JSON.stringify(inputRef.current.value))
		props.onClose()
	}
	
	//The  Modal Component
	return (
		
		<Backdrop onClick={props.onClose}>
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
					<button className="close-btn" onClick={props.onClose}>X</button>
				</div>
				
				<h2>Enter your gaming name to log it in LeaderBoard</h2>
				<input 
					ref={inputRef}
					type="text"
					placeholder="Your name here"
					className="name-input"
					/>
				<div>
					<button onClick={props.onClose} className="reset-btn">Cancel</button>
					<button onClick={handleConfirm} className="roll-btn">Confirm</button>

				</div>
				
			</motion.div>
		</Backdrop>

	);
}

export default Modal;

