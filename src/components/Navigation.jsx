import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../layouts/header";
import { HomeScreen } from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <Header />,
            contentStyle: { backgroundColor: "white" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
