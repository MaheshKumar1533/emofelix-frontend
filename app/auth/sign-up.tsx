import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React from 'react';

import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { BackButton, PrimaryButton } from '../../components/Buttons';

const SignUp = () => {

  const handleSignUp = () => {
    router.push('/namesetup');
  }

  return (
    <View className='w-full h-full flex items-center justify-center p-4 gap-10'>
      <View className='w-full flex flex-row items-center justify-center gap-2 relative'>
        <BackButton absolute={true} />
        <Text className='text-2xl font-bold text-center'>Create an Account</Text>
      </View>
      <View className='mt-4 bg-white p-8 w-full flex items-center justify-center rounded-[32px] shadow-lg gap-5'>
        <Text className='text-3xl font-bold'>Join EmoFelix</Text>
        <Text className='text-gray-400'>Create your account to start connecting</Text>
        <View className='border border-gray-300 px-2 rounded-2xl w-full mt-2 flex flex-row items-center gap-2 overflow-hidden'>
          <Feather name="mail" size={24} color="black" />
          <TextInput className='w-full' placeholder='Email' autoCapitalize="none" autoComplete='email' />
        </View>
        <View className='border border-gray-300 px-2 rounded-2xl w-full mt-2 flex flex-row items-center gap-2 overflow-hidden'>
          <Feather name="lock" size={24} color="black" />
          <TextInput className='w-full' placeholder='Password' secureTextEntry={true} />
        </View>
        <View className='border border-gray-300 px-2 rounded-2xl w-full mt-2 flex flex-row items-center gap-2 overflow-hidden'>
          <Feather name="check" size={24} color="black" />
          <TextInput className='w-full' placeholder='Confirm Password' secureTextEntry={true} />
        </View>
        <PrimaryButton title='Sign Up' onPress={handleSignUp} />
        <View className='w-full flex flex-row items-center justify-between mt-4'>
          <View className='w-[30%] h-[1px] bg-gray-400 justify-self-center'></View>
          <Text className='text-gray-500 text-sm font-bold'>or continue with</Text>
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
        <Text className='text-center text-sm text-gray-500 mt-4'>By signing up, you agree to our Terms of Service and Privacy Policy</Text>
      </View>
      <Text>Already have an account? <Text onPress={() => router.push('/auth/sign-in')}><Text className='text-blue-500 font-bold'>Sign In</Text></Text></Text>
    </View>
  )
}

export default SignUp;