import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../layouts/header";
import { HomeScreen } from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Search } from "../screens/Search";
import { SearchInput } from "./Search";
import { Profile } from "../screens/Profile";
import { ProfileHeader } from "./ProfileHeader";

const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search-sharp" : "search-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          title: "",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => <Header />,
            contentStyle: { backgroundColor: "white" },
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            header: () => <SearchInput />,
            contentStyle: { backgroundColor: "white" },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            header: () => <ProfileHeader />,
            contentStyle: { backgroundColor: "white" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
