import React from "react";
import { View, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

function TransactionList() {
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
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
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
                <Text style={{ fontSize: 20, color: "#2DC071" }}>
                  + 75.000,00
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
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
                <Text style={{ fontSize: 20, color: "#2DC071" }}>
                  + 75.000,00
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
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
                <Text style={{ fontSize: 20, color: "#2DC071" }}>
                  + 75.000,00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TransactionList;
