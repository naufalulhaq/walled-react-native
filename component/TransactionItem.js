import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

function TransactionItem({from_to, type, created_at, amount}) {
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
          <Text style={{ fontSize: 20 }}>{from_to}</Text>
          <Text style={{ fontSize: 16 }}>{type === "c" ? "Transfer" : "Topup"}</Text>
          <Text style={{ fontSize: 16, color: "#939393" }}>
            {new Date(created_at).toLocaleString()}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 20, color: "#2DC071" }}>{amount}</Text>
      </View>
    </View>
  );
}

export default TransactionItem;
