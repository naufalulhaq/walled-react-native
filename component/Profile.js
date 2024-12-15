import React from 'react'
import { Shadow } from 'react-native-shadow-2';
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

import Ionicons from '@expo/vector-icons/Ionicons';

function Profile() {
  return (
    <View
    style={{
      flexDirection: "row",
      elevation: 4,
      paddingVertical: 8,
      paddingHorizontal: 24,
      alignItems: "center",
      backgroundColor: "white"
    }}
  >
    <Image
      source={require("../assets/profile.png")}
      style={{
        width: 46,
        height: 46,
        borderRadius: 23,
        borderColor: "#19918F",
        borderWidth: 4,
      }}
    ></Image>
    <View style={{ marginLeft: 20 }}>
      <Text style={{ color: "black", fontWeight: 700 }}>Andika</Text>
      <Text>Personal Account</Text>
    </View>
    <View style={{ flex: 1 }}></View>
    <Ionicons name='sunny-outline' color='#F8AB39' size={30} />
  </View>
  )
}

export default Profile