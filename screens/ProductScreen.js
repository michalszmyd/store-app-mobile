import React from 'react';
import { ScrollView, Image } from 'react-native';
import ProductsService from '../services/ProductsService';

class ProductScreen extends React.Component {
  state = {
    product: {}
  }

  componentDidMount () {
    const productId = this.props.navigation.state.params.id;

    ProductsService.find(productId).then((product) => {
      this.setState({
        product: product
      })
    })
  }

  render () {
    const { name, imageUrl, description, price } = this.state.product;

    return (
      <ScrollView>
        <Image source={{ src: imageUrl }} />
      </ScrollView>
    )
  }
}

export default ProductScreen;
