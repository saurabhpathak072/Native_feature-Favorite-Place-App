import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomFlatList from '../UI/FlatList/CustomFlatList'
import PlaceItem from './PlaceItem'

const PlacesList = ({places}) => {
  return (
    // <View>
    //   <Text>PlacesList</Text>
      <CustomFlatList fallbackText={"No Places Added. Please Add Some!!"} data={places} keyExtractor={(item)=>item.id} renderItem={({item})=><PlaceItem place={item}/>}/>
    // </View> 
  )
}

export default PlacesList

const styles = StyleSheet.create({})