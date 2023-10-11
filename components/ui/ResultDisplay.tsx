import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

interface ResultDisplay {
	result: number;
	bg?: string;
}

export function ResultDisplay({ result, bg }: ResultDisplay) {
	return (
		<View style={[globalStyles.hCtr]}>
			<View style={[globalStyles.vCtr, styles.container, {backgroundColor: bg ?? "white"}]}>
				<Text style={[globalStyles.result]}>{result}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		width: 144,
		height: 144,
		borderRadius: 144,
	},
});
