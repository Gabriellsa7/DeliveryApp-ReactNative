import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import Section from "../components/section";
import { useRouter } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  const router = useRouter();
  return (
    // used scroll view because you can scroll the screen
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
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
          action={() => router.push("/see-more")}
          size="text-2xl"
        />
      </View>
    </ScrollView>
  );
}
