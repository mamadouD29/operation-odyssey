import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

interface InpDisplayProps {
	inp: number;
}

export function InpDisplay({ inp }: InpDisplayProps) {
	return (
		<View style={[globalStyles.hCtr]}>
			<View style={[globalStyles.vCtr, styles.container]}>
				<Text style={[globalStyles.inp]}>{inp}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 49,
		height: 49,
		borderWidth: 1,
		borderRadius: 10,
	},
});
