import React from 'react'
import { View} from 'react-native'
import Category from '../Components/Category'
import { products } from '../../constant/Data'
import {topUpProducts} from "../../constant/Data"


const WomenScreen = () => {

  return (
    <View>
      {/* activewaer */}
      <Category title="Activewear" products={products}/>
      <Category title="Up to 50% Off" products={topUpProducts}/>

          

    </View>
  )
}

export default WomenScreen
