import  React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header.js";
import StartGameScreen from "./screens/StartGameScreen.js";
import GameScreen from "./screens/GameScreen";

export default function App() {
	const [userNumber, setUseNumber] = useState();

	const startGameHandler = (selectedNumber) => {
		setUseNumber(selectedNumber);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />; 

	if (userNumber) { // if userNumber is already defined
		content = <GameScreen userChoice={userNumber} /> 
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
