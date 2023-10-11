import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

interface DigitBtnProps {
	nbr: number;
	id: number;
	onPress: (id: number, val: number) => void;
	toDisable: Set<number>;
	bg: string
}

export function DigitBtn({ nbr, id, onPress, toDisable, bg }: DigitBtnProps) {
	return (
		<Pressable
			onPress={() => onPress(id, nbr)}
			style={({ pressed }) => [
				globalStyles.vCtr,
				styles.container,
				{
					opacity: pressed ? 0.3 : 1,
					backgroundColor: toDisable.has(id) ? "#e5e5e5" : bg,
				},
			]}
			disabled={toDisable.has(id)}
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
