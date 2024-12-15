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

import Hero from "./component/Hero";
import Control from "./component/Control";
import Profile from "./component/Profile";
import TransactionList from "./component/TransactionList";

const { height: screenHeight } = Dimensions.get("window");

function Home() {
  return (
    <View style={styles.container}>
      <Profile></Profile>
      <Hero></Hero>
      <Control></Control>
      <TransactionList></TransactionList>
    </View>
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
