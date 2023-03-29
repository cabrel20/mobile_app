import React,{useState} from 'react'
import { View,Text,Pressable,Modal,ScrollView } from 'react-native'
import PrimaryCard from './PrimaryCard'
import { MaterialIcons } from '@expo/vector-icons';
//import { products } from '../../constant/Data';
import ShopCategory from './ShopCategory';

const Category = ({title,products}) => {
    const [isViewModalShop, setIsViewModalShop] = useState(false);
  return (
    <View className="px-4 pt-8">
       <View>
            <View className="flex flex-row items-center justify-between px-5">
                <Text className="uppercase text-2xl text-primary-300 font-bold">{title}</Text>
                    <Pressable onPress={()=>setIsViewModalShop(true)} className="flex flex-row items-center gap-3">
                    <Text className="text-lg text-primary-200">Shop now</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={23} color="#9F9F9F" />
                    </Pressable>
            </View>
               
                <ScrollView horizontal={true} className="py-5 pl-3  pr-20">
                    {products.map((item)=><PrimaryCard key={item.id} price={item.price} description={item.description} image={item.image} id={item.id}/>)}
                </ScrollView>

          </View>

          {isViewModalShop && <Modal animationType='slide'><ShopCategory onViewModal={()=>setIsViewModalShop(false)} products={products} title={title}/></Modal>}
    </View>
  )
}

export default Category
