import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { useRouter } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

const SeeMore = () => {
  const router = useRouter();
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Text>See-more</Text>
        <View></View>
        <Pressable
          className="p-4 bg-red-300 rounded hover:cursor-pointer"
          onPress={() => router.push("/")}
        >
          <Text>Home</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SeeMore;
