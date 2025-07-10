import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import "./globals.css";

export default function App() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href="/auth/home" />;
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Emofelix
      </Text>
    </View>
  );
}