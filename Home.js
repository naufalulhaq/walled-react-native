import React from "react";

import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Hero from "./component/Hero";
import Control from "./component/Control";
import Profile from "./component/Profile";
import TransactionList from "./component/TransactionList2";

const { height: screenHeight } = Dimensions.get("window");

function Home({}) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <Profile></Profile>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <Hero/>
            <Control/>
            <TransactionList/>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    marginBottom: 16,
    backgroundColor: "red"
  },
  container: {
    flexDirection: "column",
    minHeight: screenHeight,
    justifyContent: "flex-start",
    backgroundColor: "#FAFBFD",
    paddingBottom: 16
  },
});

export default Home;
