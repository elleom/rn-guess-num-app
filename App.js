import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [userNumber, setUseNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);

	const startGameHandler = (selectedNumber) => {
		setUseNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds) => {
		setGuessRounds(numOfRounds);
	};

	const onRestartGameHandler = () => {
		guessRounds = 0; //if number of rounds is 0 then gameover screen is over
		setUseNumber(null) // if no user number set then game starts again


	}

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		// if userNumber is already defined
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else {
		<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestarGame={onRestartGameHandler} />;
	}

	return (
		<View style={styles.screen}>
			<Header title='Guess a Number' />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
