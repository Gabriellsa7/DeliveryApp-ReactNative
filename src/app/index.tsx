import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import { useRouter } from "expo-router";
import TrendingFoods from "../components/trending";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RestaurantsList from "../components/famous-restaurants";
import FamousRestaurants from "../components/famous-restaurants";
import RestaurantsVerticalList from "../components/restaurants-list";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  const router = useRouter();
  return (
    // used scroll view because you can scroll the screen
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        className="bg-slate-200"
        showsVerticalScrollIndicator={false}
      >
        <View
          className="w-full px-4"
          style={{ marginTop: statusBarHeight + 8 }}
        >
          {/* import header component */}
          <Header />
          {/* import banner component */}
          <Banner />
          {/* import search component */}
          <Search />
          {/* import section component */}
          <Section
            name="Trending foods"
            label="See More"
            action={() => router.push("/pages/see-more")}
            size="text-2xl"
          />
          {/* import trending foods component */}
          <TrendingFoods />
          {/* import section component */}
          <Section
            name="Famous on DevFood"
            label="See All"
            action={() => router.push("/pages/see-all")}
            size="text-2xl"
          />
          {/* import famous restaurants component */}
          <FamousRestaurants />
          {/* import section component */}
          <Section
            name="Restaurants"
            label="See All"
            action={() => router.push("/pages/restaurants")}
            size="text-2xl"
          />
          {/* import restaurants list vertical component */}
          <RestaurantsVerticalList />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
