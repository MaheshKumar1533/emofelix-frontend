import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    const router = useRouter();

    // const navigation = useNavigation();

    useEffect(() => {
        const backupTimer = setTimeout(() => {
            router.replace('/auth/home')
        }, 2000);

        return () => clearTimeout(backupTimer);
    });

    if (!loaded) {
        // Async font loading only occurs in development.
        return null;
    }

    return (
        <LinearGradient
            colors={['#FCFFD8', '#53C2E1']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, height: '100%' }}>
                <Image source={require('../assets/images/emofelixLogo.png')} style={{ width: "50%", height: "30%", resizeMode: "contain" }} />
                <Image source={require('../assets/images/emofelix_logo.png')} style={{ width: "50%", height: "10%", resizeMode: "contain" }} />
            </SafeAreaView>
        </LinearGradient>
    );
}
