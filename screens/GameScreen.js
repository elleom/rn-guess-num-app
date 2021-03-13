import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import MainButton from "../components/MainButton";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const renderListItem = (listlenght, itemData) => {
	return (
		<View style={styles.listItem}>
			<Text>#{listlenght - itemData.index}</Text>
			<Text>{itemData.item}</Text>
		</View>
	);
};

const GameScreen = (props) => {
	const initialGuess = generateRandomBetween(1, 100, props.userChoice);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const { userChoice, onGameOver } = props;

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < props.userChoice) ||
			(direction === "greater" && currentGuess > props.userChoice)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}
		if (direction === "lower") {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}
		const nextNumber = generateRandomBetween(
			currentLow.current + 1,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setPastGuesses((curPastGuesses) => [nextNumber.toString(), ...curPastGuesses]);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<MainButton onPress={nextGuessHandler.bind(this, "lower")}>
					<Ionicons name='md-remove' size={24} />
				</MainButton>
				<MainButton onPress={nextGuessHandler.bind(this, "greater")}>
					<Ionicons name='md-add' size={24} />
				</MainButton>
			</Card>

			<View list={styles.list}>
				{/*
          	<ScrollView contentContainerStyle={styles.listContainer}>
            {pastGuesses.map((guess, index) =>
              renderListItem(guess, pastGuesses.length - index)
            )}
          </ScrollView>*/}
          <FlatList contentContainerStyle={styles.listContainer} keyExtractor={(item) => item }  data={pastGuesses} renderItem={renderListItem.bind(this, pastGuesses.length)}/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
    alignContent: 'center'
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginTop: 20,
		minWidth: 300,
		width: "80%",
		maxWidth: "95%",
	},
	listItem: {
		borderColor: "#ccc",
		borderWidth: 1,
		padding: 15,
		marginVertical: 10,
		backgroundColor: "white",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	list: {
		flexGrow: 1,
		
		justifyContent: "flex-end",
	},
	listContainer: {
		flex: 1,
		width: "80%",
	},
});

export default GameScreen;
