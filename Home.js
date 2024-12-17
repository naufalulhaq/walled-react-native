import React from "react";

import { StyleSheet, Dimensions, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Hero from "./component/Hero";
import Control from "./component/Control";
import Profile from "./component/Profile";
import TransactionList from "./component/TransactionList";

const { height: screenHeight } = Dimensions.get("window");

function Home({}) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Profile></Profile>
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <Hero />
            <Control />
            <TransactionList />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    
  },
  container: {
    flexDirection: "column",
    height: screenHeight,
    justifyContent: "flex-start",
    backgroundColor: "#FAFBFD",
  },
});

export default Home;
