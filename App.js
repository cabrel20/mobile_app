
import { Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
export default function App() {

  return(
   <>
    <StatusBar style='auto'/>
    <View className="flex items-center py-12 px-5">
      <Text className="text-lg">Start</Text>
    </View>
   </>
   
  );
}


