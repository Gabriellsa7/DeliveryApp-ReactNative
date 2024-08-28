import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { RestaurantsProps } from "..";

const RestaurantItem = ({ restaurants }: { restaurants: RestaurantsProps }) => {
  return (
    <Pressable
      className="flex flex-col items-center justify-center"
      onPress={() => console.log("Clicked")}
    >
      <Image
        source={{ uri: restaurants.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {restaurants.name}
      </Text>
    </Pressable>
  );
};

export default RestaurantItem;
