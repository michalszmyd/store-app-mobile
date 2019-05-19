import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

class HeroProduct extends React.Component {
  state = {
    quantity: 1
  }

  onQuantityIncrease = () => {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  onQuantityDecrease = () => {
    const quantity = this.state.quantity;

    if (quantity <= 0) return; 

    this.setState({
      quantity: quantity - 1
    })
  }

  render () {
    const { quantity } = this.state;
    const { name, imageUrl, description, price } = this.props;

    return (
      <View style={styles.productBody}>
        <Image style={styles.mainImage} source={{ uri: imageUrl }} />
        <View style={styles.productActions}>
          <View style={styles.productAction}>
            <Icon size={19} name='shopping-bag' />
            <Text style={{ marginTop: 5, textAlign: 'center' }}>Add to cart</Text>
          </View>
          <View style={styles.productAction}>
            <Icon size={19} name='heart' />
            <Text style={{ marginTop: 5, textAlign: 'center' }}>Add to favorites</Text>
          </View>
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.price}>${price}</Text>
          <Text style={{ color: '#9f9f9f' }}>{description}</Text>
          <View style={styles.productDetails}>
            <Text>{name}</Text>
            <Text>{quantity}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  productBody: {
    flex: 1
  },
  productActions: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#dadada',
    backgroundColor: '#fff'
  },
  productAction: {
    width: '50%',
    padding: 12,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  mainImage: {
    width: '100%',
    height: 300,
    marginTop: 12,
    marginBottom: 12
  },
  productInfo: {
    padding: 12,
    marginTop: 12
  },
  price: {
    fontSize: 19,
  }
}

export default HeroProduct;