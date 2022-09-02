import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../layouts/Header";
import { HomeScreen } from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Search } from "../screens/Search";
import { SearchInput } from "./Search";
import { Profile } from "../screens/Profile";
import { ProfileHeader } from "./ProfileHeader";
import { DMScreen } from "../screens/DMScreen";
import { DMHeader } from "../layouts/DMHeader";
import { Message } from "../screens/Message";
import { MessageHeader } from "../layouts/MessageHeader";
import { useTheme } from "native-base";
import { Register } from "../screens/Register";
import Login from "../screens/Login";
import Settings from "../screens/Settings";
import { NewPost } from "../screens/NewPost";
import { NewPostHeader } from "../layouts/NewPostHeader";
import { CaptionHeader } from "../layouts/CaptionHeader";
import { PostCaption } from "../screens/PostCaption";

const HomeStack = createNativeStackNavigator();
const NewPostStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function NewPostNav() {
  const { colors } = useTheme();

  return (
    <NewPostStack.Navigator initialRouteName="New Post">
      <NewPostStack.Screen
        name="New Post"
        component={NewPost}
        options={{
          header: ({ navigation }) => <NewPostHeader navigation={navigation} />,
          contentStyle: { backgroundColor: colors.gray[900] },
        }}
      />
      <NewPostStack.Screen
        name="Caption"
        component={PostCaption}
        options={{
          header: ({ navigation }) => <CaptionHeader navigation={navigation} />,
          contentStyle: { backgroundColor: colors.gray[900] },
        }}
      />
    </NewPostStack.Navigator>
  );
}

function HomeTabs() {
  const { colors } = useTheme();

  return (
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
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "New Post Nav") {
            iconName = focused ? "aperture" : "aperture-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",

        title: "",
        tabBarStyle: {
          paddingTop: 10,
          backgroundColor: colors.gray[900],
        },
      })}
      sceneContainerStyle={{ backgroundColor: colors.gray[900] }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          header: () => <SearchInput />,
        }}
      />

      <Tab.Screen
        name="New Post Nav"
        component={NewPostNav}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header: () => <ProfileHeader />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          header: () => <NewPostHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export function Navigation() {
  const { colors } = useTheme();
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName="Root_Home">
        <HomeStack.Screen
          name="Root_Home"
          component={HomeTabs}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Messages"
          component={DMScreen}
          options={{
            header: ({ navigation }) => <DMHeader navigation={navigation} />,
            contentStyle: { backgroundColor: colors.gray[900] },
          }}
        />

        <HomeStack.Screen
          name="Message"
          component={Message}
          options={{
            header: ({ navigation }) => (
              <MessageHeader navigation={navigation} />
            ),
            contentStyle: { backgroundColor: colors.gray[900] },
          }}
        />

        <HomeStack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.gray[900] },
          }}
        />

        <HomeStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.gray[900] },
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
