import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

interface DigitBtnProps {
	nbr: number;
}

export function DigitBtn({ nbr }: DigitBtnProps) {
	return (
		<Pressable
			style={({ pressed }) => [
				globalStyles.vCtr,
				styles.container,
				{ opacity: pressed ? 0.3 : 1 },
			]}
		>
			<Text style={[globalStyles.result]}>{nbr}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 120,
		height: 120,
		// flexGrow: 1,
		// flexShrink: 1,
		borderRadius: 10,

		borderWidth: 1,
	},
});
