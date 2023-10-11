import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationAndRouteProps } from "../../../services/utils/navigations";
import { globalStyles } from "../../../styles/globalStyles";
import {
	CustomBtn,
	DigitBtn,
	InpDisplay,
	ResultDisplay,
} from "../../../components/ui";

const initialLevel = 1;

export function GameScreen({ route }: NavigationAndRouteProps) {
	const { id, title, bg } = route.params;
	const [inp, setInput] = useState<number[]>([10, 22, 19, 3]);
	const [level, setLevel] = useState<number>(initialLevel);

	const resetHandler = () => {
		console.log("digit : ");
		setLevel(initialLevel);
	};

	return (
		<View
			style={[globalStyles.container, globalStyles.pad, styles.container]}
		>
			<View style={[globalStyles.hCtr, styles.panelCtr]}>
				<CustomBtn title="Restart" onPress={resetHandler} />
				<View style={[globalStyles.hCtr, styles.levelCtr]}>
					<Text style={[globalStyles.inp]}>Level: {level}</Text>
				</View>
			</View>
			<View style={[styles.outpCtr]}>
				<ResultDisplay result={35} bg={bg} />
				<InpDisplay inp={0} />
			</View>

			<View style={[globalStyles.hCtr, styles.digitCtr]}>
				{inp &&
					inp.map((nbr: number, id: number) => (
						<DigitBtn id={id} nbr={nbr} />
					))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 20,
	},
	panelCtr: {
		justifyContent: "space-between",
		gap: 20,
	},
	outpCtr: {
		gap: 20,
	},
	digitCtr: {
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 50,
		padding: 10,
	},
	levelCtr: {
		width: 60,
		flexGrow: 1,
		flexShrink: 1,
		gap: 5,
	},
});
