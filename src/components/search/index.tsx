import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Search = () => {
  return (
    <View className="flex-row w-full border border-slate-500 rounded-full h-14 items-center gap-2 px-4 bg-transparent">
      <Feather name="search" size={24} color="#64748b" />
      <TextInput
        placeholder="Search your food"
        className="w-full bg-transparent flex-1 h-full"
      />
    </View>
  );
};

export default Search;
