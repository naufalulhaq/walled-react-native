import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  // SafeAreaView,
} from "react-native";

import Hero from "./component/Hero";
import Control from "./component/Control";
import Profile from "./component/Profile";
import TransactionList from "./component/TransactionList";
import Home from "./Home";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const img = require("./assets/adaptive-icon.png");
const bgImg = require("./assets/favicon.png");
const { height: screenHeight } = Dimensions.get("window");

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        {/* <Home></Home> */}
        <LoginPage></LoginPage>
        {/* <RegisterPage></RegisterPage> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
