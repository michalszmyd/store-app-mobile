import React from 'react';
import { View, Text } from 'react-native';

export default function ProductPreview ({ name, imageUrl }) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}
