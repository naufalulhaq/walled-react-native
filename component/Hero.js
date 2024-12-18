import React from "react";
import { Text, View, Image } from "react-native";
import { useAuth } from "../context/AuthContext";

function Hero() {
  const { userData } = useAuth();

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
        <Text
          style={{
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          Good Morning, {userData.full_name}
        </Text>
        <Text>Check all your incoming and outgoing transactions here</Text>
      </View>
      <Image
        source={require("../assets/sun.png")}
        style={{ width: 84, height: 84 }}
      />
    </View>
  );
}

export default Hero;
