import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Card from "../components/Card.js";
import Colors from "../constants/colors.js";
import Input from "../components/Input.js";

//validates user's input

const StartGameScreen = (props) => {
	const [enteredValue, setEnteredValue] = useState("");

	//uses regex to delete any non numeric value entered
	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ""));
	};

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
							<Button color={Colors.accent} title='RESET' />
						</View>
						<View style={styles.button}>
							<Button color={Colors.primary} title='CONFIRM' />
						</View>
					</View>
				</Card>
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
});

export default StartGameScreen;
