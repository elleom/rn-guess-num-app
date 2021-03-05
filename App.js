import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font"; //allows to load fonts

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { AppLoading} from 'expo'; //it is a component

const fetchFont = () => { //loads fonts
	Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	})
}

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [guessRounds, setGuessRounds] = useState(0);
	const [dataLoaded, setDataLoaded] = useState(false); //Async state for fonts
	
	if (!dataLoaded) {
		return (< AppLoading 
			startAsync={fetchFont} 
			onFinish={() => setDataLoaded(true)} 
			onError={(err) => console.log(console.log(err))} />) //Important, has to be a prop that retuns a 'promise'


	const configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds) => {
		setGuessRounds(numOfRounds);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = (
			<GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
		);
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen
				roundsNumber={guessRounds}
				userNumber={userNumber}
				onRestart={configureNewGameHandler}
			/>
		);
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
