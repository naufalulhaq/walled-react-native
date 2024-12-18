import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { LogOut } from "lucide-react-native";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { logout } = useAuth();
  const { userData } = useAuth();

  return (
    <View
      style={{
        flexDirection: "row",
        elevation: 4,
        paddingVertical: 8,
        paddingHorizontal: 24,
        alignItems: "center",
        backgroundColor: "white",
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
        <Text style={{ color: "black", fontWeight: 700 }}>{userData.full_name}</Text>
        <Text>Personal Account</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <Ionicons name="sunny-outline" color="#F8AB39" size={30} />
      <TouchableOpacity style={{ marginLeft: 12 }} onPress={logout}>
        <LogOut color="#808080" size={28} />
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
