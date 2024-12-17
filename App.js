import Home from "./Home";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import TopUpPage from "./TopUpPage";
import TransferPage from "./TransferPage";

import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Bottom Tabs Component
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Set icons for each tab based on route name
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Transfer") {
            iconName = "swap-horiz";
          } else if (route.name === "TopUp") {
            iconName = "account-balance-wallet";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#088A85",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 8 },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Transfer"
        component={TransferPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="TopUp"
        component={TopUpPage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="TopUp"
          component={TopUpPage}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Transfer"
          component={TransferPage}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
