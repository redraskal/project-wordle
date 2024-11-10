import React from "react";

import { checkGuess } from "../../game-helpers.js";
import { range } from "../../utils.js";

function WordGuesses({ guesses, answer }) {
	return (
		<div className="guess-results">
			{guesses.map((guess, i) => (
				<p key={i} className="guess">
					{checkGuess(guess, answer).map((result, i) => (
						<span key={i} className={"cell " + result.status}>{result.letter}</span>
					))}
					{range(0, 5 - guess.length).map((_, i) => (
						<span key={i} className="cell"></span>
					))}
				</p>
			))}
		</div>
	);
}

export default WordGuesses;
