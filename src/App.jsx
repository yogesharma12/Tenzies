import * as React from 'react';
import './App.css';
import Die from './component/Die';
//import Score from './component/Score';
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import {motion, AnimatePresence} from "framer-motion";
import Modal from "./component/Modal"


//App Component
function App() {

	// Dice and Tenzies State declaration
	const [dieNumber, setDieNumber] = React.useState(randomNum())
	const [tenzies, setTenzies] = React.useState(false)
	// Number of clicks to win
	const [clicks, setClicks] = React.useState(0)
	// Local Highscore 
	const [highscore, setHighscore] = React.useState(JSON.parse(localStorage.getItem('highscore')) || 100000)
	// Gamer name
	const [gamerName, setGamerName] = React.useState(JSON.parse(localStorage.getItem('name')))
	// Model Open State
	const [modalOpen, setModalOpen] = React.useState(false)

console.log(gamerName)

	const close = () => setModalOpen(false)
	const open = () => setModalOpen(true)

	// Update Highscore on load and on Win
	React.useEffect(() => {

		if (clicks) {
			setHighscore(clicks < JSON.parse(localStorage.getItem('highscore')) ? clicks : highscore)
		}

		localStorage.setItem('highscore', JSON.stringify(highscore))

	}, [tenzies])

	// Checks condition for win on every dice click
	React.useEffect(() => {

		const allHeld = dieNumber.every(dice => dice.isHeld)
		const firstValue = dieNumber[0].value
		const allSameValue = dieNumber.every(dice => dice.value === firstValue)

		if (allHeld && allSameValue) {
			setTenzies(true)
		}

	}, [dieNumber])

	// Creates a Dice with a random Value
	function generateDice() {
		return {
			id: nanoid(),
			isHeld: false,
			value: Math.ceil(Math.random() * 6)
		}
	}

	// To create an array of random Dices
	function randomNum() {
		const randomArr = []
		for (let i = 0; i < 12; i++) {
			randomArr.push(generateDice())
		}
		return randomArr
	}

	// Function to Hold any dice
	function holdDice(id) {
		setDieNumber(oldDice => oldDice.map(die => {
			return die.id === id ?
				{ ...die, isHeld: !die.isHeld } :
				die
		}))
	}

	// Handles Roll Button Click
	function handleClick() {
		if (tenzies) {
			setDieNumber(randomNum())
			setTenzies(false)
			setClicks(0)
		} else {
			setClicks(clicks + 1)
			setDieNumber(oldDice => oldDice.map(die => {
				return die.isHeld ?
					die : generateDice()
			}))
		}
	}
	// Reset Game function
	function resetGame () {
		setDieNumber(randomNum())
		setTenzies(false)
		setClicks(0)
	}

	return (
		<>
			{/*LeaderBoard*/}
			{/*<section className="leaderboard">
				<h1 className="score-title">LeaderBoard</h1>
				
			</section>*/}
			{/*Main Game Frame*/}
			<main>
				{/*Conditional rendering for Confetti component*/}
				{tenzies && <Confetti />}

				{/*Game Instructions*/}
				<h1 className="title">Tenzies</h1>
				<p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

				<div className="gamer-info">
					
						<motion.button 
							whileHover={{scale: 1.1}}
							whileTap={{scale: 0.9}}
							className="name-btn" 
							onClick={()=> (modalOpen ? close() : open())}
							>
							{!gamerName ? 'Enter your gamer name' : `Hello ${gamerName}`}
						</motion.button>
						
					<p>Highscore : {highscore === 100000 ? '--' : highscore}</p>
				
				</div>
				{modalOpen && <Modal setGamerName={setGamerName} modalOpen={modalOpen} handleClose={close}/>}
				<AnimatePresence>
				{modalOpen && <Modal setGamerName={setGamerName} modalOpen={modalOpen} handleClose={close}/>}
				</AnimatePresence>
				
				{/*Dice Container*/}
				<div className="die-container">
					{
						dieNumber.map(num => <Die id={num.id} value={num.value} isHeld={num.isHeld} holdDice={() => holdDice(num.id)} />)

					}
				</div>
				<p>Number of Rolls : {clicks}</p>
				<div className="btn-holder">
				<button className="reset-btn" onClick={resetGame}>Reset Game</button>
				<button className="roll-btn" onClick={handleClick}>{tenzies ? "New Game" : "Roll"}</button>
					</div>
				
				
			</main>

		</>
	);
}

export default App;