import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Checkbox } from 'expo-checkbox';
import { router } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignIn = () => {
  const goToNameSelection = () => {
    router.push('/namesetup');
  }

  const handleBackPress = () => {
    router.push('/auth/home');
  }
  return (
    <View className='w-full h-full flex items-center justify-center p-4 gap-10'>
      <View className='w-full flex items-center justify-center gap-2 relative'>
        <TouchableOpacity className='absolute left-0 bg-white rounded-2xl shadow-lg h-[40px] w-[40px] flex align-center justify-center' onPress={handleBackPress}>
          <Feather name="arrow-left" size={24} color="black" className='self-center' />
        </TouchableOpacity>
        <Text className='text-2xl font-bold text-center'>Login</Text>
      </View>
      <View className='mt-4 bg-white p-8 w-full flex items-center justify-center rounded-[32px] shadow-lg gap-5'>
        <View className='border border-gray-300 px-2 rounded-2xl w-full mt-2 flex flex-row items-center gap-2 overflow-hidden'>
          <Feather name="mail" size={24} color="black" />
          <TextInput className='w-full' placeholder='Email' autoCapitalize="none" autoComplete='email' />
        </View>
        <View className='border border-gray-300 px-2 rounded-2xl w-full mt-2 flex flex-row items-center gap-2 overflow-hidden'>
          <Feather name="lock" size={24} color="black" />
          <TextInput className='w-full' placeholder='Password' secureTextEntry={true} />
        </View>
        <View className='w-full flex flex-row items-center justify-between mb-4'>
          <View className='flex flex-row items-center gap-2'>
            <Checkbox
              value={false}
              onValueChange={() => { }}
              color={'#FFD700'}
              className='border border-gray-400 rounded-full'
            />
            <Text className='text-gray-500 text-sm'>Remember Me</Text>
          </View>
          <Text className='text-blue-500 text-sm'>Forgot Password?</Text>
        </View>
        <TouchableOpacity className='bg-buttonprimary rounded-full p-2 w-full' onPress={() => router.push("/")}>
          <Text className='text-buttontext text-center font-semibold text-2xl'>Continue</Text>
        </TouchableOpacity>
        <View className='w-full flex flex-row items-center justify-between mt-4'>
          <View className='w-[30%] h-[1px] bg-gray-400 justify-self-center'></View>
          <Text className='text-gray-500 text-sm font-bold'>or login with</Text>
          <View className='w-[30%] h-[1px] bg-gray-400 justify-self-center'></View>
        </View>
        <View className='flex flex-row items-center justify-around mt-4 w-full'>
          <TouchableOpacity className='border flex align-center justify-center flex-row gap-2 border-gray-400 py-4 px-8 rounded-full'>
            <AntDesign name="google" size={24} color="black" />
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border flex align-center justify-center flex-row gap-2 border-gray-400 py-4 px-8 rounded-full'>
            <AntDesign name="apple1" size={24} color="black" />
            <Text>Apple</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text className='flex items-center justify-center'>New to EmoFelix? <Text onPress={() => router.push('/auth/sign-up')}><Text className='text-blue-500 font-bold'>Sign Up</Text></Text></Text>
    </View>
  )
}

export default SignIn;