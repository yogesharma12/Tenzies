import React from 'react';
import { motion } from "framer-motion";
import Backdrop from "./Backdrop.jsx";
import {ThemeContext} from "../context/ThemeContext.jsx";


const Settings = (props) => {
	const { theme, toggleFunction } = React.useContext(ThemeContext);
	//The  Settings Component
	return (

		<Backdrop onClick={props.onClose} >
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

				<h2>Settings</h2>
				<div className="setting-tabs">
					<div className="settings-row">
						<p>Theme</p>
						<button className="switch" onClick={toggleFunction}>change</button>
						{ theme === "theme-dark" ? "dark" : "light"}
					</div>
				</div>

			</motion.div>
		</Backdrop>

	);
}

export default Settings;

