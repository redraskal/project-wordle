import React from "react";

function WordGuessInput({ addGuess }) {
	const [guess, setGuess] = React.useState("");

	function checkGuess() {
		setGuess("");
		addGuess(guess);
	}

	return (
		<form
			className="guess-input-wrapper"
			onSubmit={(ev) => {
				ev.preventDefault();
				checkGuess();
			}}
		>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				value={guess}
				minLength={1}
				maxLength={5}
				onChange={(ev) => setGuess(ev.target.value.toUpperCase())}
				required
			/>
		</form>
	);
}

export default WordGuessInput;
