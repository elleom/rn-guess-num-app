import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card.js";
import Colors from '../constants/colors.js';


const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Game Start!</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a number!</Text>
				<TextInput />
				<View style={styles.buttongrp}>
					<View style={styles.button} >
						<Button color={Colors.accent} title='RESET' />
					</View>
					<View style={styles.button} >
						<Button color={Colors.primary} title='CONFIRM' />
					</View>
				</View>
			</Card>
		</View>
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
		width: '40%',
		
		
	},
});

export default StartGameScreen;
