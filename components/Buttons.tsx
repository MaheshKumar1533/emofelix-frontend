import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

type BackButtonProps = {
    absolute?: boolean;
};

const BackButton = ({ absolute }: BackButtonProps) => {
    return (
        <TouchableOpacity className={`left-0 top-[-5px] bg-white rounded-2xl shadow-lg h-[40px] w-[40px] flex align-center justify-center self-start justify-self-start ${absolute ? 'absolute' : ''}`} onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="gray" className='self-center' />
        </TouchableOpacity>
    )
}

type PrimaryButtonProps = {
    title: string;
    icon?: React.ComponentProps<typeof FontAwesome5>['name'];
    onPress: () => void;
};

const PrimaryButton = ({ title, icon, onPress }: PrimaryButtonProps) => {
    return (
        <TouchableOpacity className='bg-buttonprimary rounded-2xl py-4 w-full shadow-lg shadow-black flex flex-row items-center justify-center gap-3' onPress={onPress}>
            {icon ? <FontAwesome5 name={icon} size={24} color="gray" className='self-center' /> : ""}
            <Text className='text-buttontext text-center font-bold text-2xl'>{title}</Text>
        </TouchableOpacity>)
}

const SettingsButton = () => {
    return (
        <TouchableOpacity className="absolute top-10 right-8 p-2 rounded-xl bg-white shadow-lg">
            <Ionicons name="settings-sharp" size={24} color="gray" />
        </TouchableOpacity>
    )
}

export { BackButton, PrimaryButton, SettingsButton };

