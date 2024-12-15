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

const { height: screenHeight } = Dimensions.get("window");

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo-walled.png")}
        style={{ width: 200, marginTop: 120 }}
        resizeMode="contain"
      />
      <View
        style={{
        //   backgroundColor: "red",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: 300,
          width: "100%",
          paddingHorizontal: 24,
          marginBottom: 200
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#FAFBFD",
            height: 48,
            width: "100%",
            borderRadius: 8,
            paddingHorizontal: 16,
            fontSize: 20,
            fontWeight: 500,
          }}
          placeholder="Email"
          value={email}
          onChangeText={(newEmail) => setText(newEmail)}
        />
        <TextInput
          style={{
            backgroundColor: "#FAFBFD",
            height: 48,
            width: "100%",
            borderRadius: 8,
            paddingHorizontal: 16,
            marginTop: 16,
            fontSize: 20,
            fontWeight: 500,
          }}
          placeholder="Password"
          value={password}
          onChangeText={(newPassword) => setText(newPassword)}
        />
        <TouchableOpacity
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#19918F",
            height: 48,
            borderRadius: 8,
            marginTop: 52
          }}
        >
          <Text style={{textAlign: "center", fontSize: 20, fontWeight: 500, color: "white"}}>Login</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 16, width: "100%", paddingHorizontal: 8, marginTop: 12}}>Don’t have account? <Text style={{color: "#19918F"}}>Register here</Text></Text>
      </View>
    </View>
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

export default LoginPage;
