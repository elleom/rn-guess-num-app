import React from "react";
import { TextPropTypes } from "react-native";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>Game is over</TitleText>
			<View style={styles.imageContainer}>
				<Image
					fadeDuration={300} //default ms
					source={require("../assets/images/success.png")}
					style={styles.image}
				/>
			</View>
			<BodyText>
				Number of rounds :{" "}
				<Text style={styles.highlight}> {props.roundsNumber}</Text>
			</BodyText>
			<Text>
				Number was : <Text style={styles.highlight}> {props.userNumber} </Text>
			</Text>
			<MainButton onPress={props.onRestart} >RESTART</MainButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
                
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		overflow: "hidden",
		borderColor: "black",
		marginVertical: 20,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	highlight: {
		color: Colors.primary,
        fontFamily: 'open-sans-bold',
        textAlign: "center"

	},
});

export default GameOverScreen;
