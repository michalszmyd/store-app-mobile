import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

export default function ProductQuantity ({ onDecrease, onIncrease, quantity }) {
  return (
    <View style={styles.productQuantitySelect}>
      <Icon onPress={onIncrease} size={19} name="plus" />
      <Text style={styles.quantityText}>{quantity}</Text>
      <Icon onPress={onDecrease} size={19} name="minus" />
    </View>
  )
}

const styles = {
  productQuantitySelect: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    marginTop: 5,
    marginBottom: 5,
    flexBasis: '33%',
  },
  quantityText: {
    marginLeft: 12,
    marginRight: 12,
    color: '#000'
  },
}