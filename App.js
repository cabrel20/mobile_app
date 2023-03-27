
import React,{useState} from 'react';
import { Text, View,Image, ScrollView,Modal,Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { filter } from './screen/components/Data';
import Card from './screen/components/Card';
import { Articles } from './screen/components/Data';
import Single from './screen/components/Single';
import { SimpleGrid } from 'react-native-super-grid';
export default function App() {

    const [isViewModal,setIsViewModal] = useState(false);
    const  [item,setItem] = useState({});

    const viewArticleHandler =(title,image,price)=>{
              setIsViewModal(true);
              setItem({title:title,image:image,price:price});
    }


  return(
   <>
    <StatusBar style='auto'/>

       {isViewModal && <Modal animationType='slide'><Single title={item.title} image={item.image} price={item.price} viewModalHandler={()=>setIsViewModal(false)}/></Modal>}

    <View className="flex items-center pb-64">
       
           
      <View className="mt-6  flex flex-row items-center justify-between px-4 py-6 bg-secondary-200 w-full">
        <Text className="text-2xl text-primary-100 font-bold">Discover</Text>
        <Pressable>
        <Feather name="align-right" size={24} color="black" />
        </Pressable>
      </View>
     
      <ScrollView alwaysBounceVertical={false} alwaysBounceHorizontal={false} className="w-full h-screen mb-60">
      <View className="h-[467px] w-full">
       <View className="relative h-[467px] w-full">
       <Image className="w-full h-full" source={require("./assets/images/img1.jpg")}/>
        <View className=" flex gap-10 pt-20 absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40">
          
          <Text className="text-secondary-200 font-bold text-6xl pl-5">
             Discover
          </Text>

          <View className="pl-5">
          <Text className="text-secondary-200 font-bold uppercase text-4xl">New autumn</Text>
          <Text className="text-secondary-200 font-bold  text-4xl">2022 collections</Text>
          <Text className="text-secondary-200 text-xl pt-2">Choose the perfect outfit in your app</Text>
          </View>

           <View className="pl-40">
           <FontAwesome name="angle-double-down" size={50} color="white" />
           </View>

        </View>
       </View>
       </View>

      <ScrollView horizontal={true}>
      <View className=" flex flex-row gap-4 items-center px-2 py-6">
           {filter.map((fil)=> <Text className="text-primary-100 text-lg font-semibold" key={fil}>{fil}</Text>)}
       </View>
      </ScrollView>


      <SimpleGrid 
                  className="px-1 pb-36"
                 itemDimension={120}
                 spacing={4}
                 data={Articles}
                 renderItem={({item})=><Card   viewModalHandler={()=>viewArticleHandler(item.title,item.image,item.price)} title={item.title} image={item.image} price={item.price} key={item.id} />}
            />

      </ScrollView>

         
        
       
    </View>
   </>
   
  );
}


