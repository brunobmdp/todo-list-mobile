import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'

interface Props extends TouchableOpacityProps {
  checked: boolean
}

export function Checkbox({ checked = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="h-6 w-6 justify-center items-center mr-2"
      {...rest}
    >
      {checked ? (
        <View className="h-4 w-4 rounded-full border border-purple-dark bg-purple-dark justify-center items-center">
          <AntDesign name="check" size={10} color="#F2F2F2" />
        </View>
      ) : (
        <View className="h-4 w-4 rounded-full border border-blue-light " />
      )}
    </TouchableOpacity>
  )
}
