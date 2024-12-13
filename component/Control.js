import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

function Control() {
  return (
    <View
      style={{
        flexDirection: "col",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 15,
        paddingHorizontal: 30,
        paddingBottom: 30,
        // backgroundColor: "red"
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#19918F",
          padding: 14,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Account No.</Text>
        <Text style={{ color: "white", fontSize: 20, fontWeight: 700 }}>
          100899
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <Text style={{ color: "black", fontSize: 20 }}>Balance</Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 32, fontWeight: 700 }}>
              Rp 10.000.000
            </Text>
            <Feather name="eye" size={24} color="black" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#19918F",
              alignItems: "center",
              padding: 8,
              borderRadius: 8,
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </View>
          <View
            style={{
              backgroundColor: "#19918F",
              alignItems: "center",
              padding: 8,
              borderRadius: 8,
            }}
          >
            <Feather name="send" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

export default Control;
