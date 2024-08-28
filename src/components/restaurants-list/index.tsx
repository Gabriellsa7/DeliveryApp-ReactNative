import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { RestaurantsProps } from "../famous-restaurants";
import RestaurantListItem from "./item";

const RestaurantsVerticalList = () => {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

  useEffect(() => {
    // This effect runs once when the component mounts.
    async function getFoods() {
      // to use this URL, you need to start the json server with command `npx json-serve db.json`
      try {
        const response = await fetch("http://192.168.0.125:3000/restaurants");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // The async function getFoods is called immediately after it is defined.
    getFoods();
  }, []);
  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantListItem item={item} key={item.id} />
      ))}
    </View>
  );
};

export default RestaurantsVerticalList;
