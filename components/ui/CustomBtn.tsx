import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

interface CustomBtnProps {
    title: string;
	onPress: ()=>void;
}

export function CustomBtn({ title, onPress }: CustomBtnProps) {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [globalStyles.hCtr, styles.btn,{ opacity: pressed ? 0.3 : 1, }]}
		>
			<Text style={[globalStyles.inp]}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		borderWidth: 1,
		width: 60,
		flexGrow: 1,
		gap: 5,
		borderRadius: 5,
		padding: 5,
	}
});
