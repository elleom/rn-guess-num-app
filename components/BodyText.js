import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => <Text style={{...styles.title, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
	title: {
		fontSize: 14,
		fontFamily: "open-sans-bold",
	},
});

export default BodyText;
