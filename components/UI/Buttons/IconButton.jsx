import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ name, size, color, onPress }) => {
  return (
    <Pressable android_ripple={{color:'#CCC'}} style={({pressed})=>[styles.button, pressed && styles.pressed]} onPress={onPress}>
      <Ionicons
        name={name}
        size={size}
        color={color}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    button:{
        padding: 8,
        margin: 4,
        justifyContent:'center',
        alignItems:'center'
    },
    pressed:{
        opacity: 0.7
    }
});