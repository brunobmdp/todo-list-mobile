/* eslint-disable camelcase */
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'

import { StatusBar, Text, View } from 'react-native'
import { Header } from './src/components/Header'
import Home from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>
  }

  return (
    <View className="flex-1  bg-gray600">
      <Header />
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  )
}
