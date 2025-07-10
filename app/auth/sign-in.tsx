import { router } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignIn = () => {

  const handleBackPress = () => {
    router.push('/auth/home');
  }
  return (
    <View className='w-full h-full flex items-center justify-center p-4 gap-10'>
      <View className='w-full flex items-center justify-center gap-2 relative'>
        <TouchableOpacity className='absolute left-4 bg-white rounded-full h-[40px] w-[40px] flex align-center justify-center' onPress={handleBackPress}>
          <Text className='text-2xl text-center'>&larr;</Text>
        </TouchableOpacity>
        <Text className='text-2xl font-bold text-center'>Create an Account</Text>
      </View>
      <View className='mt-4 bg-white p-8 w-full flex items-center justify-center rounded-[32px] shadow-lg gap-5'>
        <Text className='text-3xl font-bold'>Join EmoFelix</Text>
        <Text className='text-gray-400'>Create your account to start connecting</Text>
        <TextInput className='border border-gray-300 p-2 rounded-2xl w-full mt-2' placeholder='Email' autoCapitalize="none" autoComplete='email' />
        <TextInput className='border border-gray-300 p-2 rounded-2xl w-full mt-2' placeholder='Password' secureTextEntry={true} />
        <TextInput className='border border-gray-300 p-2 rounded-2xl w-full mt-2' placeholder='Confirm Password' secureTextEntry={true} />
        <TouchableOpacity className='bg-yellow-400 rounded-full p-2 w-full'>
          <Text className='text-center font-semibold text-2xl'>Sign Up</Text>
        </TouchableOpacity>
        <View className='w-full flex flex-row items-center justify-between mt-4'>
          <View className='w-[30%] h-[1px] bg-gray-400 justify-self-center'></View>
          <Text className='text-gray-500 text-sm font-bold'>or continue with</Text>
          <View className='w-[30%] h-[1px] bg-gray-400 justify-self-center'></View>
        </View>
        <View className='flex flex-row items-center justify-around mt-4 w-full'>
          <TouchableOpacity className='border border-gray-400 py-4 px-8 rounded-full'>
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className='border border-gray-400 py-4 px-8 rounded-full'>
            <Text>Apple</Text>
          </TouchableOpacity>
        </View>
        <Text className='text-center text-sm text-gray-500 mt-4'>By signing up, you agree to our Terms of Service and Privacy Policy</Text>
      </View>
      <Text>Already have an account? <Text className='text-blue-500'>Sign In</Text></Text>
    </View>
  )
}

export default SignIn;