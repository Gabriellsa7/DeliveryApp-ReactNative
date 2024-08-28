import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
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
      </View>
    </ScrollView>
  );
}
