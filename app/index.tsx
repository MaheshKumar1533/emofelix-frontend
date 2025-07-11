import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { characters } from "../constants/constants";
import "./globals.css";

export default function App() {

  return (
    <View className="flex-1 items-center justify-center w-full h-full py-12 px-2">
      <TouchableOpacity className="absolute top-10 right-8 p-2 rounded-xl bg-white shadow-lg">
        <Feather name="settings" size={24} color="gray" />
      </TouchableOpacity>
      <Text className="text-2xl font-bold text-black">Who do you miss?</Text>
      <FlatList
        data={characters}
        numColumns={2}
        className="w-full mt-4 mx-auto"
        renderItem={({ item }) => (
          <View className="flex items-center p-8 border-b border-gray-200 bg-white rounded-2xl shadow-lg w-5/12 aspect-square justify-center mx-auto my-3">
            <Image source={item.image} className="w-full h-full rounded-2xl object-cover" />
            <Text className="font-bold text-2xl">{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
      <TouchableOpacity className="w-full bg-buttonprimary p-4 rounded-2xl items-center" onPress={() => router.push("/auth/home")}>
        <Text className="text-buttontext font-bold">Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}