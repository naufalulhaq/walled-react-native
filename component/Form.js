import React, { use, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { Check } from "lucide-react-native";
import ModalComp from "./ModalComp";

function Form({ state, navigation }) {
  const [checkTNC, setCheckTNC] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const validateFullname = (text) => {
    if (state === "register" && text.length <= 3) {
      setErrors((prev) => ({
        ...prev,
        fullname: "Fullname must be more than 3 characters.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, fullname: "" }));
    }
  };

  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const validatePassword = (text) => {
    if (text.length <= 7) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleSubmit = () => {
    const isValid = Object.values(errors).every((error) => error === "");
    if (isValid) {
      if (state === "register") {
        console.log("Register with", { fullname, email, password, avatarUrl });
        navigation.navigate("Home");
      } else {
        console.log("Login with", { email, password });
        navigation.navigate("Home");
      }
    } else {
      console.log("Form contains errors:", errors);
    }
  };

  return (
    <View style={styles.container}>
      {state === "register" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Fullname"
            value={fullname}
            onChangeText={(text) => {
              setFullname(text);
              validateFullname(text);
            }}
            accessibilityLabel="Fullname Input"
          />
          {errors.fullname && (
            <Text style={styles.errorText}>{errors.fullname}</Text>
          )}
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
          keyboardType="email-address"
          accessibilityLabel="Email Input"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            validatePassword(text);
          }}
          secureTextEntry
          accessibilityLabel="Password Input"
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}
      </View>
      {state === "register" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Avatar URL"
            value={avatarUrl}
            onChangeText={(text) => setAvatarUrl(text)}
            accessibilityLabel="Avatar URL Input"
          />
        </View>
      )}
      {state === "register" && (
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => setCheckTNC(!checkTNC)}
          >
            {checkTNC && <Check size={24} color={"black"} />}
          </TouchableOpacity>
          <Text style={styles.linkText}>
            I have read and agree to the{" "}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.link}>Terms and Conditions</Text>
            </TouchableOpacity>
          </Text>
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {state === "register" ? "Register" : "Login"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.linkText}>
        {state === "register" ? "Have an account?" : "Don’t have an account?"}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(state === "register" ? "Login" : "Register")
          }
        >
          <Text style={styles.link}>
            {state === "register" ? " Login here" : " Register here"}
          </Text>
        </TouchableOpacity>
      </Text>
      <ModalComp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 100,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#FAFBFD",
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: "500",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
  checkboxContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12,
  },
  checkbox: {
    width: 32,
    height: 32,
    backgroundColor: "#FAFBFD",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#19918F",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 32,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  linkText: {
    fontSize: 16,
    textAlign: "left",
  },
  link: {
    color: "#19918F",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Form;
