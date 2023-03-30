import React from 'react'
import { View } from 'react-native'
import NavBarItem from './NavBarItem'
import { icons } from '../../constant/Data'

const NavBar = () => {
  return (
    <View className="py-3 px-2 bg-primary-100 flex flex-row  justify-around items-center absolute top-[600px] w-full ">
        {icons.map((icon)=><NavBarItem icon={icon.icon} key={icon.id}/>)}
    </View>
  )
}

export default NavBar
