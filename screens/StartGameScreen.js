import React from 'react'
import {View, Text,TextInput,StyleSheet} from "react-native"
import PrimaryButton from './Components/PrimaryButton'


const StartGameScreen = () => {
  return (
    <View   style={styles.inputContainer} className="flex mt-14 p-5 bg-[#72063c] mx-7 rounded-md shadow">
      <Text>StartGameScreen</Text>
      <TextInput className=" py-2 text-[40px] border-b-2 border-[#ddb52f] text-[#ddb52f] my-1 w-[50px]" maxLength={2} keyboardType="number-pad"/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

export default StartGameScreen


const styles = StyleSheet.create({
  inputContainer:{
    shadowColor:'black',
    shadowOffset:{width: 0, height:2 },
    shadowOpacity:0.25,
    shadowRadius:6
  }
})