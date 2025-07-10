import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {

    const [loadingIndex, setLoadingIndex] = useState(0);

    const loader_images = [
        require('../assets/images/loadingImage1.png'),
        require('../assets/images/loadingImage2.png'),
        require('../assets/images/loadingImage3.png')
    ];
    function increaseLoadingIndex() {
        let ind = loadingIndex;
        if (ind == 2) setLoadingIndex(0);
        else setLoadingIndex((ind) => ind + 1);
    }

    setTimeout(increaseLoadingIndex, 2000)

    const loader_data = [{
        title: "You're Not Alone. Ever.",
        description: "EmoFelix is your emotional companion, here to talk, listen, and comfort—whenever you need someone.",
        backgroundColor: "#FCFFD8"
    }, {
        title: "Talk. Share. Feel Better.",
        description: "Pick a comforting character. Share your mood & topic. Choose voice or video call. Get emotional relief through a conversation that listens",
        backgroundColor: "#D6F7ED"
    }, {
        title: "Personal. Private. Safe.",
        description: "Choose your language and preferences. All calls are private and judgment-free. You control the tone, pace, and comfort level",
        backgroundColor: "#FCFFD8"
    }];

    return (
        <View
            style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 30, backgroundColor: loader_data[loadingIndex].backgroundColor }}
        >
            <Image source={require('../assets/images/emofelix_logo.png')} style={{ width: "50%", height: "10%", resizeMode: "contain" }} />
            <Image source={loader_images[loadingIndex]} style={{ width: "100%", height: "20%", resizeMode: "contain" }} />
            <Text style={{ color: "#333", fontFamily: "Segoe UI", fontSize: 24, textAlign: "center", fontWeight: "bold" }}>{loader_data[loadingIndex].title}</Text>
            <Text style={{ color: "#767676", fontFamily: "Segoe UI", textAlign: "center", fontSize: 16, padding: 16 }}>{loader_data[loadingIndex].description}</Text>
        </View>
    );
}
