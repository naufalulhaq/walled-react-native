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

function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
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
          marginBottom: 200,
        }}
      >
        {/* input fullname */}
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
          placeholder="Fullname"
          value={fullname}
          onChangeText={(newFullname) => setFullname(newFullname)}
        />
        {/* input email */}
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
          placeholder="Email"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
        {/* input password */}
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
          onChangeText={(newPassword) => setPassword(newPassword)}
        />
        {/* input avatar url */}
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
          placeholder="Avatar Url"
          value={avatarUrl}
          onChangeText={(newAvatarUrl) => setAvatarUrl(newAvatarUrl)}
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
            marginTop: 52,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 500,
              color: "white",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            width: "100%",
            paddingHorizontal: 8,
            marginTop: 12,
          }}
        >
          Have account? <Text style={{ color: "#19918F" }}>Login here</Text>
        </Text>
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

export default RegisterPage;
