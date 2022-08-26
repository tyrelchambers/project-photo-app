import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../layouts/header";
import { HomeScreen } from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <Header />,
            contentStyle: { backgroundColor: "white" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
