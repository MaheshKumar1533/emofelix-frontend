import Feather from '@expo/vector-icons/Feather'
import { router } from 'expo-router';
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const NameSetup = () => {

    const goToAvatarSelection = () => {
        router.push('/chooseavatar');
    }

    return (
        <View className='w-full h-5/6 flex flex-col items-center justify-between'>
            <Text className='font-bold text-2xl text-center'>Your name & pronouns</Text>
            <View className='border border-gray-300 px-2 rounded-2xl w-full mt-2 flex flex-row items-center gap-2 overflow-hidden bg-white'>
                <Feather name="user" size={24} color="black" />
                <TextInput className='w-full' placeholder='Name' autoCapitalize="none" autoComplete='name' />
            </View>
            <View className='flex flex-row items-center gap-2 mt-4'>
                <TouchableOpacity className='bg-cyan-200  py-2 px-5 rounded-xl shadow-lg'>
                    <Text>She/Her</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-cyan-200  py-2 px-5 rounded-xl shadow-lg'>
                    <Text>He/Him</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-cyan-200  py-2 px-5 rounded-xl shadow-lg'>
                    <Text>They/Them</Text>
                </TouchableOpacity>
            </View>
            <Text className='font-bold text-2xl mt-4'>Language Preference</Text>
            <TextInput className='bg-white border border-gray-300 px-2 rounded-2xl w-full mt-2' placeholder='Language' autoCapitalize="none" autoComplete='off' />
            <Text className='font-bold text-2xl mt-4'>Age</Text>
            <View className='bg-white border border-gray-300 rounded-[24px] w-full mt-2 flex flex-col items-center gap-2 p-6'>
                <Text className='text-gray-400 text-center'>To make your experience more relevant & safe</Text>
                <TouchableOpacity className='bg-cyan-100 w-full py-2 px-4 rounded-2xl'><Text className='text-center font-semibold'>Under 18</Text></TouchableOpacity>
                <TouchableOpacity className='bg-cyan-100 w-full py-2 px-4 rounded-2xl'><Text className='text-center font-semibold'>18-25</Text></TouchableOpacity>
                <TouchableOpacity className='bg-cyan-100 w-full py-2 px-4 rounded-2xl'><Text className='text-center font-semibold'>26-64</Text></TouchableOpacity>
                <TouchableOpacity className='bg-cyan-100 w-full py-2 px-4 rounded-2xl'><Text className='text-center font-semibold'>65 and over</Text></TouchableOpacity>
            </View>
            <TouchableOpacity className='bg-buttonprimary rounded-full p-2 w-full mt-4' onPress={goToAvatarSelection}>
                <Text className='text-center font-semibold text-2xl text-buttontext'>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NameSetup;