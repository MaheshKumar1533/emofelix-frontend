import { Slot } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LinearGradient colors={['#FCFFD8', '#53C2E1']}
        locations={[0.4073, 1.2]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 }}
        className='w-full h-full items-center justify-center p-5'>
        <Slot />
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Layout;