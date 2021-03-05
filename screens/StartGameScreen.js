import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";
import Card from "../components/Card.js";
import Colors from "../constants/colors.js";
import Input from "../components/Input.js";
import NumberContainer from "../components/NumberContainer";

//validates user's input

const StartGameScreen = (props) => {
	/* state const */
	const [enteredValue, setEnteredValue] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNum, setSelectedNum] = useState(); // null number

	//uses regex to delete any non numeric value entered
	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

	/* ########################## BUTTON HANDLERS START  #########*/

	const onResetInputHandler = () => {
		setEnteredValue("");
		setConfirmed(false);
	};

	const onConfirmHandler = () => {
		const chosenNumber = parseInt(enteredValue); // parses the string into int
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			//checks number validation
			Alert.alert("Invalid input", "Please select a valid number", [
				{
					//PAY ATT TO SYNTAX
					text: "OK",
					style: "destructive",
					onPress: onResetInputHandler,
				},
			]);
			return; // if num not valid then retunrs (cxl)
		}
		setConfirmed(true);
		setSelectedNum(parseInt(chosenNumber));
		setEnteredValue(""); //sets num back to none
		Keyboard.dismiss(); //cloeses the keyboard after selecting the num
	};
	/*##################### BUTTON HANDLERS END  ################## */

	let confirmedOutput; // hold the component to be rendered in case of true
	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summaryContainer}>
				<Text>You selected</Text>
				<NumberContainer>{selectedNum}</NumberContainer>
				<Button title='START GAME' onPress={() => props.onStartGame(selectedNum) }/>
			</Card>
		); // makes the component visible
	}

	return (
		// allows to close the keyboard once the user touches outside
		// of the input area
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={styles.screen}>
				<Text style={styles.title}>Game Start!</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a number!</Text>
					<Input
						style={styles.input}
						blurOnSubmit
						keyboardType='number-pad'
						autoCorrect={false}
						text='Open'
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<View style={styles.buttongrp}>
						<View style={styles.button}>
							<Button
								color={Colors.accent}
								title='RESET'
								onPress={onResetInputHandler}
							/>
						</View>
						<View style={styles.button}>
							<Button
								color={Colors.primary}
								title='CONFIRM'
								onPress={onConfirmHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput /* either its undefined or prints a component */}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: "center",
	},
	buttongrp: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 15,
	},
	title: {
		fontSize: 18,
		marginVertical: 10,
		fontFamily: 'open-sans-bold' //this has to match the identifier on App.js (fetch font)
	},
	inputContainer: {
		width: 300,
		maxWidth: "80%",
		alignItems: "center",
	},
	button: {
		width: "40%",
	},
	input: {
		width: 50,
		textAlign: "center",
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: "center",
	}
	
});

export default StartGameScreen;
