import { View,SafeAreaView,ScrollView,Text } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';


import NavBar from "./Layout/Components/NavBar";
import PrimaryButton from "./Layout/Components/PrimaryButton";
import WomenScreen from "./Layout/Screens/WomenScreen";

export default function App() {

   

  return(
   <>
    <SafeAreaView>
    <View className=" bg-gray-100 h-screen relative pt-3">
       
      <View className="flex flex-row justify-between  items-center mx-4 pb-2">
       <Text className="text-4xl text-secondary-200 font-bold">Discover</Text>
       <View className="relative">
       <SimpleLineIcons name="handbag" size={24} color="black" />
        <View className="h-2 w-2 rounded-full ring-4 bg-red-600 absolute top-1 left-5"></View>
       </View>
      </View>

      {/* header */}
      <View className="p-1 mx-5 my-3 bg-primary-100 rounded-lg flex flex-row  items-center  justify-between  ">
        <PrimaryButton>Women</PrimaryButton>
        <PrimaryButton>Men</PrimaryButton>
      </View>

      {/* screen */}
      <ScrollView>
       
       <WomenScreen/>

      </ScrollView>

      {/* Navabar */}
      <NavBar/>


    </View>
    </SafeAreaView>
   </>
   
  );
}


