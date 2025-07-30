import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { characters } from "../constants/constants";
import "./globals.css";
import { PrimaryButton, SettingsButton } from "../components/Buttons";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center w-full h-full py-12 px-2">
      <SettingsButton />
      <Text className="text-2xl font-bold text-black">Who do you miss?</Text>
      <FlatList
        data={characters}
        numColumns={2}
        className="w-full mt-4 mx-auto"
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className="flex items-center p-8 border-b border-gray-200 bg-white rounded-2xl shadow-lg w-5/12 aspect-square justify-center mx-auto my-3"
            onPress={() => router.push(`/character/${index}` as any)}
          >
            <Image source={item.image} className="w-full h-full rounded-2xl object-cover" />
            <Text className="font-bold text-2xl">{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
      <PrimaryButton title="Go to Login" onPress={() => router.push("/auth/home")} />
    </View>
  );
}