import React from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Form from "./component/Form";

const { height: screenHeight } = Dimensions.get("window");

function RegisterPage({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Logo Section */}
          <Image
            source={require("./assets/logo-walled.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          {/* Registration Form */}
          <Form state="register" navigation={navigation} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  logo: {
    width: 200,
    marginBottom: 40,
  },
});

export default RegisterPage;
