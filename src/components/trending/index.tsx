import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import CardHorizontalFood from "./food";

export interface FoodProps {
  id: string;
  name: string;
  price: number;
  time: string;
  delivery: number;
  rating: number;
  image: string;
  restaurantId: string;
}

const TrendingFoods = () => {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    // This effect runs once when the component mounts.
    async function getFoods() {
      // to use this URL, you need to start the json server with command `npx json-serve db.json`
      try {
        const response = await fetch("http://192.168.0.125:3000/foods");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    // The async function getFoods is called immediately after it is defined.
    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default TrendingFoods;
