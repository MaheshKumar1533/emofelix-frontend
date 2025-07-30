import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import emptyavatar from '../../assets/images/avatars/emptyavatar.png';
import { avatars } from '../../constants/constants';
import { BackButton } from '../../components/Buttons';

const ChooseAvatar = () => {
    const [avatar, setAvatar] = useState(emptyavatar);

    const handleAvatarSelect = (selectedAvatar: any) => {
        setAvatar(selectedAvatar);
    }

    return (
        <View className='w-full h-full flex flex-col items-center justify-center gap-10'>
            <BackButton absolute={true} />
            <Text className='font-bold text-2xl text-center'>Choose an Avatar</Text>
            <View className='w-1/3 aspect-square flex items-center'>
                <Image source={avatar} className='w-full h-full object-cover rounded-2xl shadow-lg' />
            </View>
            <FlatList
                data={avatars}
                numColumns={4}
                className='w-full h-full'
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index} className='w-[23%] aspect-square rounded-2xl overflow-hidden mr-[2.6%] my-4 border border-gray-400' onPress={() => handleAvatarSelect(item)}>
                        <View className='w-full h-full'>
                            <Image source={item} className='w-full h-full object-cover' />
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            />
            <TouchableOpacity className='bg-buttonprimary w-full rounded-full p-2'>
                <Text className='text-buttontext text-center font-bold text-2xl'>Save Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChooseAvatar