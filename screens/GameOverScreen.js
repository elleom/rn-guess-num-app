import React from "react";
import { TextPropTypes } from "react-native";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from "../components/TitleText";

const GameOverScreen = (props) => {
	return (
		<View style={styles.screen}>
			<TitleText>Game is over</TitleText>
			<View style={styles.imageContainer}>
				<Image
					source={require("../assets/images/success.png")}
					style={styles.image}
				/>
			</View>
			<Text>Number of rounds : {props.roundsNumber}</Text>
			<Text>Number was : {props.userNumber}</Text>
			<Button title='RESTART' onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
    imageContainer: 
    {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        overflow: "hidden",
        borderColor: 'black',
        marginVertical: 20,
    },
	image: {
		width: "100%",
		height: "100%",
		
         
	},
    
});

export default GameOverScreen;
