import React from 'react'
import { View,Text,Pressable } from 'react-native'

const PrimaryButton = ({children}) => {
  return (
    <View className="bg-slate-200 px-14 py-2 rounded-lg ">
      <Pressable>
        <Text className="text-lg text-secondary-100 uppercase font-bold text-center">{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton
