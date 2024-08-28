import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardHorizontalFood from "../trending/food";
import RestaurantItem from "./horizontal-card";

export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}

const FamousRestaurants = () => {
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
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem restaurants={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default FamousRestaurants;
