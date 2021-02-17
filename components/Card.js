import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
	return (
		<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
	);
};

const styles = StyleSheet.create({
	card: {
		
		/* the shadow properties work only on IOS */
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { height: 2, width: 0 },
		shadowRadius: 5,

		/*to do the same i android use the following */
		elevation: 8,
		backgroundColor: "white",
		padding: 20,
		borderRadius: 15,
	},
});

export default Card;
