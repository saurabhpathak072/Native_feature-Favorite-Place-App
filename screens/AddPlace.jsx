import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaceForm from '../components/Places/PlaceForm'

const AddPlace = () => {
  return (
    <View style={styles.formContainer}>
      <PlaceForm />
     </View>
  )
}

export default AddPlace

const styles = StyleSheet.create({
  formContainer:{
    flex: 1
  }
})