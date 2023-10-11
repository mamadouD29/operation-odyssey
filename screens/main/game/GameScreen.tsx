import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { NavigationAndRouteProps } from "../../../services/utils/navigations";
import { globalStyles } from "../../../styles/globalStyles";
import {
	CustomBtn,
	DigitBtn,
	InpDisplay,
	ResultDisplay,
} from "../../../components/ui";
import {
	getRandomIntInclusive,
	getResult,
} from "../../../services/utils/index";

const initialLevel = 1;
const initializedSet = new Set<number>();

const initializedResult = (title: string) => {
	if (title === "Multiplication" || title === "Division") return 1;
	return 0;
};

export function GameScreen({ route }: NavigationAndRouteProps) {
	const { id, title, bg } = route.params;
	const [inp, setInput] = useState<number[]>([10, 22, 19, 3]);
	const [level, setLevel] = useState<number>(initialLevel);
	const [result, setResult] = useState<number>(() =>
		initializedResult(title),
	);
	const [disabledBtn, setDisabledBtn] = useState<Set<number>>(initializedSet);

	const resetHandler = () => {
		setLevel(initialLevel);
		getShuffler();
		setDisabledBtn(initializedSet);
	};

	const getShuffler = () => {
		const mySet = new Set<number>();
		const myNumbers: number[] = [];
		while (mySet.size < 4) {
			const randNber: number = getRandomIntInclusive(1, 10);
			if (mySet.has(randNber)) {
				console.log("the number exists: ", randNber);
			} else {
				mySet.add(randNber);
				myNumbers.push(randNber);
				console.log("added number : ", randNber);
			}
		}
		const rslt = getResult(title, myNumbers);
		setResult(rslt);
		setInput(myNumbers);

		console.log("whole rand number: ", myNumbers);
	};

	useEffect(() => {
		getShuffler();
	}, [title]);

	const handleNbrPress = (id: number, val: number) => {
		console.log("id: ", id, "val: ", val);
		const newSet = new Set<number>(disabledBtn);
		if(newSet.size >= 3) {
			resetHandler();
			return ;
		}
		newSet.add(id);
		setDisabledBtn(newSet);
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
				<ResultDisplay result={result} bg={bg} />
				<InpDisplay inp={0} />
			</View>

			<View style={[globalStyles.hCtr, styles.digitCtr]}>
				{inp &&
					inp.map((nbr: number, id: number) => (
						<DigitBtn
							key={id}
							id={id}
							onPress={handleNbrPress}
							nbr={title === "Subtraction" ? -nbr : nbr}
							toDisable={disabledBtn}
							bg={bg}
						/>
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
