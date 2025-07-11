import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {

    const onLoginButtonClick = () => {
        router.push('/auth/sign-in');
    }

    const onRegisterButtonClick = () => {
        router.push('/auth/sign-up');
    }

    return (
        <View className='w-full h-full flex flex-col items-center justify-center'>
            <View className='w-full h-1/2 relative flex items-center justify-center'>
                <Image source={require('../../assets/images/emofelixLogo.png')} style={{ width: "50%", height: "40%" }} resizeMode='contain' />
                <Image source={require('../../assets/images/emofelix_logo.png')} style={{ width: "60%", height: "50%" }} resizeMode='contain' />
            </View>
            <View className='flex items-center justify-center gap-4 w-full'>
                <Text className='text-3xl text-center text-gray-700'>Ready to Connect?</Text>
                <Text className='text-xl text-center text-gray-500'>Your emotional wellness journey begins here.</Text>
                <TouchableOpacity className='bg-buttonprimary rounded-full p-2 w-full'>
                    <Text className='text-center  text-buttontext font-semibold text-2xl' onPress={onRegisterButtonClick}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity className='bg-white rounded-full p-2 w-full' onPress={onLoginButtonClick}>
                    <Text className='text-center font-semibold text-2xl'>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className='underline text-center'>Free Trial</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home