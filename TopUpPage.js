import { React, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { Dropdown } from "react-native-element-dropdown";

const { height: screenHeight } = Dimensions.get("window");

function TopUpPage() {
  const navigation = useNavigation();
  const [value, setValue] = useState(null);

  const dropDownData = [
    { label: "BYOND Pay", value: "BYOND Pay" },
    { label: "Hasanah Card", value: "Hasanah Card" },
    { label: "QRIS", value: "QRIS" },
    { label: "DEBIT", value: "DEBIT" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              height: 60,
              flexDirection: "row",
              elevation: 4,
              paddingVertical: 8,
              paddingHorizontal: 24,
              alignItems: "center",
              backgroundColor: "white",
              flex: 0,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 24, fontWeight: 700, marginLeft: 20 }}>
              Top Up
            </Text>
          </View>
          {/* body */}
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              flex: 1,
              width: "100%",
            }}
          >
            {/* top up form */}
            <View
              style={{
                flexDirection: "column",
                width: "100%",
                marginTop: 24,
                justifyContent: "space-between",
                gap: 32,
              }}
            >
              {/* input amount */}
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: "white",
                  width: "100%",
                  paddingHorizontal: 24,
                  paddingVertical: 24,
                }}
              >
                <Text style={{ fontSize: 24, color: "#B3B3B3" }}>Amount</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 24 }}>IDR</Text>
                  <TextInput
                    style={{
                      fontSize: 36,
                      paddingHorizontal: 16,
                      color: "black",
                    }}
                    placeholder="100.000"
                  ></TextInput>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#E1E1E1",
                  }}
                ></View>
              </View>
              {/* Input source */}
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: "white",
                  width: "100%",
                  paddingHorizontal: 24,
                  paddingVertical: 24,
                }}
              >
                <Dropdown
                  style={styles.dropDown}
                  placeholder="Select Payment"
                  data={dropDownData}
                  labelField="label"
                  valueField="value"
                  value={value}
                  onChange={(item) => setValue(item.value)}
                  renderItem={(item) => (
                    <View style={{padding: 16}}>
                      <Text style={styles.textItem}>{item.label}</Text>
                    </View>
                  )}
                />
              </View>
              {/* input notes */}
              <View
                style={{
                  flexDirection: "column",
                  backgroundColor: "white",
                  width: "100%",
                  paddingHorizontal: 24,
                  paddingVertical: 24,
                }}
              >
                <Text style={{ fontSize: 24, color: "#B3B3B3" }}>Notes</Text>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={{
                      width: "100%",
                      fontSize: 36,
                      paddingHorizontal: 16,
                      color: "black",
                    }}
                    placeholder=""
                  ></TextInput>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "#E1E1E1",
                  }}
                ></View>
              </View>
            </View>
            <View
              style={{ width: "100%", paddingHorizontal: 8, marginBottom: 24 }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#19918F",
                  height: 48,
                  borderRadius: 8,
                  marginBottom: 52,
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
                  Top Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    minHeight: screenHeight,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FAFBFD",
    // backgroundColor: "red"
  },
});

export default TopUpPage;
