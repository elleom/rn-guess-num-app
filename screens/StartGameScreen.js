import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Game Start!</Text>
			<View style={styles.inputContainer}>
				<Text>Select a number!</Text>
				<TextInput />
				<View style={styles.buttongrp}>
					<Button title='RESET' />
					<Button title='CONFIRM' />
				</View>
			</View>
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

		/* the shadow properties work only on IOS */
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 9,

		/*to do the same i android use the following */
		elevation: 5,
		backgroundColor: 'white'
        
	},
});

export default StartGameScreen;
