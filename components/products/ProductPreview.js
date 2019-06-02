import React from 'react';
import { View, Text, Image } from 'react-native';

class ProductPreview extends React.Component {
  showProductScreen = () => {
    this.props.navigate(this.props.id)
  }

  render () {
    const { name, price, imageUrl, formattedPrice } = this.props;

    return (
      <View style={styles.product}>
        <Text style={styles.productTitle}>{name}</Text>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text>Price: {formattedPrice()}</Text>
        <View style={styles.readMoreButton}>
          <Text style={styles.buttonText} onPress={this.showProductScreen}>Read more</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  product: {
    flex: 1,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 12,
    flexBasis: '50%',
    borderWidth: 1,
    borderColor: '#dadada',
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: 12
  },
  image: {
    width: '80%',
    height: 200,
    marginTop: 12,
    marginBottom: 12
  },
  readMoreButton: {
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#6D86E8',
    fontSize: 12,
  },
  buttonText: {
    color: '#fff'
  }
}

export default ProductPreview;
