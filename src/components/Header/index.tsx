import { Image, View } from 'react-native'
import React from 'react'
import logo from '../../../assets/Logo.png'

type Props = {}

export function Header(props: Props) {
  return (
    <View className="h-[173px] justify-center items-center bg-gray700">
      <Image source={logo} alt="" />
    </View>
  )
}
