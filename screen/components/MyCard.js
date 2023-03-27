import React from 'react'
import { Text,View,Image,Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const MyCard = ({id,image,title,price,isHorizontal,viewModalHandler}) => {
  return (
     <View   className="px-2 w-full my-3">
        <View className="relative">
            <Image className={`${isHorizontal ? "w-full h-30" :"w-full h-80"}   object-cover`} source={{uri:image}} alt="thing"/>
    
        </View>
        <View className="py-2">
           <View className="flex flex-row items-center justify-between">
           <Text className="text-primary-200 text-2xl">{title}</Text>
          
           </View>
            <View className="flex gap-2 pt-2">
            <View className="flex flex-row items-center justify-between">
            <Text className="text-primary-100 font-extrabold text-xl">${price}</Text>
            <Ionicons name="heart-outline" size={30} color="#0b0b0b" />
            </View>
            <Pressable className=" px-8 py-2 bg-primary-100" onPress={viewModalHandler}>
              <Text className="text-white text-lg text-center">View Now</Text>
            </Pressable>
            </View>
        </View>
     </View> 
  )
}

export default MyCard
