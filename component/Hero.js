import React from "react";
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

function Hero() {
  // const [showBalance, setShowBalance] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 24,
        paddingVertical: 24,
      }}
    >
      <View style={{ width: 240, flexDirection: "col" }}>
        <Text style={{
          fontWeight: 700,
          fontSize: 24
        }}>Good Morning, Chelsea</Text>
        <Text>Check all your incoming and outgoing transactions here</Text>
      </View>
      <Image source={require("../assets/sun.png")} style={{width: 84, height: 84}}/>
    </View>
  );
}

export default Hero;
