import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

function TransactionItem({name, category, date, amount}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <Image
          source={require("../assets/profile.png")}
          style={{
            width: 46,
            height: 46,
            borderRadius: 23,
          }}
        ></Image>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 20 }}>Adityo Gizwanda</Text>
          <Text style={{ fontSize: 16 }}>Topup</Text>
          <Text style={{ fontSize: 16, color: "#939393" }}>
            08 Desember 2024
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: "#2DC071" }}>+ 75.000,00</Text>
      </View>
    </View>
  );
}

export default TransactionItem;
