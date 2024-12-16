import Home from "./Home";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import TopUpPage from "./TopUpPage";
import TransferPage from "./TransferPage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
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
        <Stack.Screen
          name="TopUp"
          component={TopUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transfer"
          component={TransferPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
