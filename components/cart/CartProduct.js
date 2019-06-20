import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

class CartProduct extends React.Component {
  onRemoveItem = () => {
    const { id, onProductRemove } = this.props;

    onProductRemove(id);
  }

  render () {
    const { name, quantity, imageUrl, totalPriceToString } = this.props;

    return (
      <View style={styles.column}>
        <View>
          <Image style={styles.mainImage} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.info}>
          <Text style={styles.priceHeader}>{totalPriceToString()}</Text>
          <Text>Quantity: {quantity}</Text>
          <Text style={styles.nameHeader}>{name}</Text>
        </View>
        <View>
          <Icon size={19} name="trash" onPress={this.onRemoveItem} />
        </View>
      </View>
    )
  }
}

const styles = {
  column: {
    width: '100%',
    padding: 12,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10
  },
  mainImage: {
    width: 125,
    height: 125
  },
  priceHeader: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 16,
    color: '#555',
  },
  nameHeader: {
    fontSize: 15,
    marginTop: 8,
    color: '#555',
  },
  info: {
    paddingLeft: 12,
    flex: 1,
  }
}

export default CartProduct;
