import React from 'react'
import { View,Text,Pressable, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleGrid } from 'react-native-super-grid';
//import { products } from '../../constant/Data';
import PrimaryCard from './PrimaryCard';


const ShopCategory = ({onViewModal,title,products}) => {
  return (
    <View className="pb-36 bg-primary-100">
     <View className="bg-primary-100 flex flex-row items-center gap-24 px-5 py-6">
      <Pressable onPress={onViewModal}><MaterialIcons name="keyboard-arrow-left" size={28} color="black" /></Pressable>
      <Text className="text-xl text-primary-300">{title}</Text>
      </View>

      <View className="bg-white py-3 px-2 mx-7 mt-3 mb-5 rounded-lg flex flex-row items-center justify-around">
        <View className="flex flex-row items-center gap-2">
            <Text className="text-lg text-primary-300">Sort</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <Text className="text-xl text-primary-200">|</Text>
        <Text className="text-lg text-primary-300">Filter</Text>
      </View>

      <ScrollView>
      <SimpleGrid
          className="bg-primary-100"
          itemDimension={130}
          data={products}
          renderItem={({item})=>(<PrimaryCard isColumn={true} key={item.id} price={item.price} description={item.description} image={item.image} id={item.id}/>)}
       />

      </ScrollView>
      
    </View>
  )
}

export default ShopCategory
