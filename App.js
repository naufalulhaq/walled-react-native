import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  SafeAreaView,
} from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';

import Hero from "./component/Hero";
import Control from "./component/Control";
import Ionicons from '@expo/vector-icons/Ionicons';
import TransactionList from "./component/TransactionList";

const img = require("./assets/adaptive-icon.png");
const bgImg = require("./assets/favicon.png");

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            elevation: 3,
            // paddingTop: 72,
            paddingBottom: 16,
            paddingHorizontal: 20,
            display: "flex",
            alignItems: "center",
            // height: 60,
            width: "100%",
            // backgroundColor: "blue"
          }}
        >
          <Image
            source={require("./assets/profile.png")}
            style={{
              width: 46,
              height: 46,
              borderRadius: 23,
              borderColor: "#19918F",
              borderWidth: 4,
            }}
          ></Image>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: "black", fontWeight: 700 }}>Andika</Text>
            <Text>Personal Account</Text>
          </View>
          <View style={{ flex: 1 }}></View>
          <Ionicons name='sunny-outline' color='#19918F' size={30} />
        </View>
        <View>
          <Hero></Hero>
          <Control></Control>
          <TransactionList></TransactionList>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFBFD",
  },
});
