import  React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
	const [userNumber, setUseNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);

	const startGameHandler = (selectedNumber) => {
		setUseNumber(selectedNumber);
		setGuessRounds(0); //restarts the game to 0
	};

	const gameOverHandler = numOfRounds => {
		setGuessRounds(numOfRounds)
	}

	let content = <StartGameScreen onStartGame={startGameHandler} />; 

	if (userNumber && guessRounds <= 0) { // if userNumber is already defined
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} /> 
	}
	else {
		<GameOverScreen />
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
