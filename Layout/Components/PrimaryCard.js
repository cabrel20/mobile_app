import React from 'react'
import { View,Image,Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const PrimaryCard = ({id,price,image,description,isColumn}) => {
  return (
    <View className={`relative bg-primary-100  rounded-md pb-4 ${isColumn ?"":"w-60 mx-2 "}`}>
      <Image source={{uri:image}} className={ isColumn ? "h-80 rounded-md w-full":"w-full h-80 rounded-md"}/>
       
       <View className={`bg-primary-100 rounded-full p-2 absolute  ${isColumn ?"top-60 left-32":"top-[270px] left-44"}`}>
       <AntDesign name="hearto" size={20} color="#9F9F9F" />
       </View>
         
         <View className={isColumn ?"px-0" :"space-y-2 px-3"}>
              <Text className="text-xl text-primary-300">${price}</Text>
              <Text className={isColumn?"text-sm px-2":"text-md text-primary-200"}>{isColumn ? description.substring(0,40):description}</Text>
         </View>
    </View>
  )
}

export default PrimaryCard
