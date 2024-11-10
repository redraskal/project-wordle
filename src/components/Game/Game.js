import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WordGuessInput from "../WordGuessInput/WordGuessInput";
import WordGuesses from "../WordGuesses/WordGuesses";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [gameOver, setGameOver] = React.useState(false);
	const [won, setWon] = React.useState(false);

	function addGuess(guess) {
		const newGuesses = [...guesses, guess];
		const justWon = guess === answer;

		setGuesses(newGuesses);

		if (justWon || newGuesses.length == NUM_OF_GUESSES_ALLOWED) {
			setGameOver(true);
			setWon(justWon);
		}
	}

	return (
		<>
			<WordGuesses guesses={guesses} answer={answer} />
			{!gameOver ? (
				<WordGuessInput addGuess={addGuess} />
			) : (
				<Banner type={won ? "happy" : "sad"}>
					{won ? (
						<p>
							<strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
						</p>
					) : (
						<p>
							Sorry, the correct answer is <strong>{answer}</strong>.
						</p>
					)}
				</Banner>
			)}
		</>
	);
}

export default Game;
