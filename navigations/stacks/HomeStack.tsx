import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens/main/home";
import { GameScreen } from "../../screens/main/game";

type headerParams = {
	HomeScreen: { title?: string };
	GameScreen: { title?: string };
};

const Stack = createNativeStackNavigator<headerParams>();

export function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: "Menu" }}
			/>
			<Stack.Screen
				name="GameScreen"
				component={GameScreen}
				options={({ route }) => {
					const title = route.params?.title ?? "Game";
					return { title };
				}}
			/>
			{/* update to the name of the opration later */}
		</Stack.Navigator>
	);
}
