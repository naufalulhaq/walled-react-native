import React from "react";

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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Hero from "./component/Hero";
import Control from "./component/Control";
import Profile from "./component/Profile";
import TransactionList from "./component/TransactionList";

const { height: screenHeight } = Dimensions.get("window");

function Home({ route, navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Profile></Profile>
          <Hero></Hero>
          <Control></Control>
          <TransactionList></TransactionList>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    minHeight: screenHeight,
    justifyContent: "flex-start",
    backgroundColor: "#FAFBFD",
    // backgroundColor: "red"
  },
});

export default Home;
