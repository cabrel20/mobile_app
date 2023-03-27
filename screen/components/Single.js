import React,{useState} from 'react'
import {View ,Text,Image, Pressable,ScrollView} from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { text } from './Data';


const Single = ({viewModalHandler,title,price,image}) => {

    const [isViewText,setIsViewText] = useState(false);

  return (
    <View>
      <View className=" flex flex-row justify-between items-center py-6 mt-10 px-5 bg-secondary-200">
       <Pressable onPress={viewModalHandler}>
       <AntDesign name="arrowleft" size={30} color="black" />
       </Pressable>
        <Text className="text-primary-100 text-lg font-light ">{title}</Text>
        <SimpleLineIcons name="handbag" size={24} color="black" />
      </View>
          <ScrollView className="mb-20">
          <Image className="w-full h-72 object-cover" source={{uri:image}} alt="things"/>
         
         <View className=" flex flex-row justify-between items-center px-5 py-3">
            <Text className="text-xl text-primary-100">{title}</Text>
            <Text className="text-lg text-primary-100 font-bold">${price}</Text>
         </View>

         <View className="flex gap-3 items-center px-5">
             <Text className="text-primary-200 text-md">{isViewText ? text :text.substring(0,400)}<Text className="text-md text-primary-100 font-bold" onPress={()=>setIsViewText(!isViewText)}>{isViewText ? " ...Lire moins":" ...Lire plus"}</Text></Text>
             <View className="flex flex-row gap-2 items-center w-full">

                 <Pressable className="px-3 py-2 bg-secondary-100">
                 <Ionicons name="heart-outline" size={24} color="#0b0b0b" />
                 </Pressable>

                <Pressable className="px-24 py-2 bg-primary-100">
                    <Text className="text-white text-lg text-center">Buy Now</Text>
                </Pressable>
             </View>
         </View>
    
    
          </ScrollView>
    </View>
  )
}

export default Single
