import { StyleSheet, FlatList, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../Constants/Color';

const CustomFlatList = ({ data, keyExtractor, renderItem,fallbackText, ...props }) => {
  if (Array.isArray(data) && data.length > 0)
    return (
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        {...props}
      />
    );

  return (
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>{fallbackText}</Text>
    </View>
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  },

});
