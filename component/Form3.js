import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Form({ state }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const [errors, setErrors] = useState({
    messageEmailError: "",
    messagePasswordError: "",
    messageFullnameError: "",
  });

  const navigation = useNavigation();

  const validate = () => {
    const validFullname = fullname.length > 3 ? true : false;
    const validEmail = email.length > 3 ? true : false;
    // const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validPassword = password.length > 7 ? true : false;

    if (!validPassword) {
      setErrors({
        messageEmailError: errors.messageEmailError,
        messageFullnameError: errors.messageFullnameError,
        messagePasswordError: "Password length must be more than 7",
      });
    } else {
      setErrors({
        messageEmailError: errors.messageEmailError,
        messageFullnameError: errors.messageFullnameError,
        messagePasswordError: "",
      });
    }

    if (!validEmail) {
      setErrors({
        messageEmailError: "Email is not valid",
        messageFullnameError: errors.messageFullnameError,
        messagePasswordError: errors.messagePasswordError,
      });
      console.log("email tidak valid", errors);
    } else {
      setErrors({
        messageEmailError: "",
        messageFullnameError: errors.messageFullnameError,
        messagePasswordError: errors.messagePasswordError,
      });
    }
    if (!validFullname) {
      setErrors({
        messageEmailError: errors.messageEmailError,
        messageFullnameError: "Fullname length must be more than 3",
        messagePasswordError: errors.messagePasswordError,
      });
    } else {
      setErrors({
        messageEmailError: errors.messageEmailError,
        messageFullnameError: "",
        messagePasswordError: errors.messagePasswordError,
      });
    }
  };
  return (
    <View
      style={{
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
      {state === "register" && (
        <View style={{ width: "100%" }}>
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
            onChangeText={(newFullname) => {
              setFullname(newFullname);
              validate();
            }}
          />
          <Text>{errors.messageFullnameError}</Text>
        </View>
      )}
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
        onChangeText={(newEmail) => {
          setEmail(newEmail);
          validate();
        }}
      />
      <Text>{errors.messageEmailError}</Text>
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
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={(newPassword) => {
          setPassword(newPassword);
          validate();
        }}
      />
      <Text>{errors.messagePasswordError}</Text>
      {/* input avatar url */}
      {state === "register" && (
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
      )}
      {state === "register" ? (
        <View style={{ width: "100%" }}>
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
            Have account?
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#19918F" }}> Login here</Text>
            </TouchableOpacity>
          </Text>
        </View>
      ) : (
        <View style={{ width: "100%" }}>
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
              Login
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
            Don’t have account?
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "#19918F" }}> Register here</Text>
            </TouchableOpacity>
          </Text>
        </View>
      )}
    </View>
  );
}

export default Form;
