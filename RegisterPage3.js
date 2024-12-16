import { React, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Form from "./component/Form";

const { height: screenHeight } = Dimensions.get("window");

function RegisterPage() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("./assets/logo-walled.png")}
            style={{ width: 200, marginTop: 120 }}
            resizeMode="contain"
          />
          <Form state="register"/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    minHeight: screenHeight,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red"
  },
});

export default RegisterPage;
