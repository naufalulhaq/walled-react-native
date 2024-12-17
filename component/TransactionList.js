import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import TransactionItem from "./TransactionItem";

function TransactionList({ data }) {
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
          alignContent: "center",
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Text style={{ color: "black", fontSize: 20, fontWeight: 700 }}>
            Transaction History
          </Text>
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#E5E5E5" }}
          ></View>
          <ScrollView contentContainerStyle={{justifyContent: "space-between", gap: 20}}>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
            <TransactionItem/>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default TransactionList;
