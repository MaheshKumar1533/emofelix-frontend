import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { characters } from '../../constants/constants';

const CharacterPage = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const characterIndex = parseInt(id || '0', 10);

    return (
        <View className="flex-1 items-center justify-between w-full h-full py-12 px-2">
            <View className='topbar flex flex-row items-center justify-between w-full'>
                <TouchableOpacity className='left-0 bg-white rounded-2xl shadow-lg h-[40px] w-[40px] flex align-center justify-center'>
                    <Feather name="arrow-left" size={24} color="gray" className='self-center' />
                </TouchableOpacity>
                <View className='character flex flex-row items-center h-[50px] w-auto overflow-hidden justify-center gap-4'>
                    <Image source={characters[characterIndex].image} className='w-[50px] aspect-square object-contain rounded-xl' />
                    <Text className='text-black text-3xl font-bold'>{characters[characterIndex].name}</Text>
                </View>
                <TouchableOpacity className="p-2 rounded-xl bg-white shadow-lg">
                    <Ionicons name="settings-sharp" size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <View className="flex flex-col items-center justify-center w-full bg-white p-8 rounded-2xl shadow-lg gap-5">
                <Text className="text-black text-xl font-semibold">How are you feeling right now?</Text>
                <View className='flex flex-row items-center justify-center w-full gap-2'>
                    {Array.from({ length: 10 }, (_, index) => (
                        <View key={index} className="rounded-xl overflow-hidden">
                            <LinearGradient key={index} colors={['#FACC15', '#F472B6']} className='flex flex-row items-center justify-between w-full p-4'>
                            </LinearGradient>
                        </View>
                    ))}
                </View>
                <Text className="text-gray">Current mood: 10/10</Text>
            </View>
            <View className="flex flex-col items-center justify-center w-full bg-white p-8 rounded-2xl shadow-lg gap-5">
                <Text>Call Preferences</Text>
                <View className="w-3/4">
                    <Text>Language</Text>
                    <View className="border w-full rounded-md flex justify-center">
                        <Picker selectedValue="en" onValueChange={(itemValue) => console.log(itemValue)}>
                            <Picker.Item label="English" value="en" />
                            <Picker.Item label="Spanish" value="es" />
                            <Picker.Item label="French" value="fr" />
                        </Picker>
                    </View>
                </View>
                <View className="w-3/4">
                    <Text>Topic</Text>
                    <TextInput className="border h-[20px] w-full rounded-md" />
                </View>
                <View className="w-3/4">
                    <Text>Additional Details (Optional)</Text>
                    <TextInput className="border h-[20px] w-full rounded-md" />
                </View>
            </View>
            <TouchableOpacity className='bg-buttonprimary rounded-2xl py-4 w-full shadow-lg shadow-black flex flex-row items-center justify-center gap-3'>
                <Ionicons name="call" size={24} color="gray" className='self-center' />
                <Text className='text-buttontext text-center font-bold text-2xl'>Voice Call</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-buttonprimary rounded-2xl py-4 w-full shadow-lg shadow-black flex flex-row items-center justify-center gap-3'>
                <FontAwesome5 name="video" size={24} color="gray" className='self-center' />
                <Text className='text-buttontext text-center font-bold text-2xl'>Video Call</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CharacterPage;