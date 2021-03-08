import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => {
	return <Text style={styles.title}>{props.children}</Text>;
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontFamily: "open-sans-bold",
	},
});

export default BodyText;
