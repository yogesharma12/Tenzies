import * as React from 'react';
import './App.css';
import Die from './component/Die';
import {nanoid} from "nanoid";
import Confetti from "react-confetti"

//App Component
function App() {

	// Dice and Tenzies State declaration
	const [dieNumber, setDieNumber] = React.useState(randomNum())
	const [tenzies, setTenzies] = React.useState(false)

	// Checks condition for win 
	React.useEffect(() =>{
		
		const allHeld = dieNumber.every(dice => dice.isHeld)
		const firstValue = dieNumber[0].value
		const allSameValue = dieNumber.every(dice => dice.value === firstValue)

		if(allHeld && allSameValue){
			setTenzies(true)
		}
		
	},[dieNumber])

	// Creates a Dice with a random Value
	function generateDice () {
		return {
			id: nanoid(),
			isHeld: false,
			value: Math.ceil(Math.random() * 6)
		}
	}

	// To create an array of random Dices
	function randomNum() {
		const randomArr = []
		for (let i = 0; i < 10; i++) {
			randomArr.push(generateDice()) 
		}
		return randomArr
	}

	// Function to Hold any dice
	function holdDice (id){
		setDieNumber(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
	}

	// Handles Roll Button Click
	function handleClick() {
		if(tenzies){
			setDieNumber(randomNum())
			setTenzies(false)
		}
		setDieNumber(oldDice => oldDice.map( die =>{
			return die.isHeld ? 
				die : generateDice()
		}))
	}
	
	return (
		<main>
			{/*Conditional rendering for Confetti component*/}
			{tenzies && <Confetti />}

			{/*Game Instructions*/}
			<h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

			{/*Dice Container*/}
			<div className="die-container">
				{
					dieNumber.map(num => <Die id={num.id} value={num.value} isHeld={num.isHeld} holdDice={() => holdDice(num.id)}/>)

				}
			</div>
			<button className="roll-btn" onClick={handleClick}>{tenzies ? "New Game" : "Roll"}</button>
		</main>
	);
}

export default App;