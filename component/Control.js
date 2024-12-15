import { React, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

function Control() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <View
      style={{
        flexDirection: "col",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 15,
        paddingHorizontal: 24,
        paddingBottom: 24,
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
      {/* Balance and button section */}
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
              {showBalance ? `Rp 10.000.000` : "Rp *******"}
            </Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            {showBalance ? <Feather name="eye" size={24} color="#A3A0A0" /> : <Feather name="eye-off" size={24} color="#A3A0A0" />}
            </TouchableOpacity>
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
