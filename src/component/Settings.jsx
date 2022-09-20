import React from 'react';
import { motion } from "framer-motion";
import Backdrop from "./Backdrop.jsx";
import Switch from "react-switch";


const Settings = (props) => {

	//const [checked, setChecked] = useState(false);

	//The  Settings Component
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

				<h2>Settings</h2>
				<div className="setting-tabs">
					<div className="settings-row">
						<p>Dark Theme</p>
						<Switch
						//onChange={() => setChecked(checked ? false : true)}
						/>
					</div>
				</div>

			</motion.div>
		</Backdrop>

	);
}

export default Settings;

