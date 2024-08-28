import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <Pressable className="">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>
    </View>
  );
};

export default Header;
