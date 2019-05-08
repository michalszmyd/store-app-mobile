import React from 'react';
import { View } from 'react-native';
import ProductPreview from './ProductPreview';
import ProductsService from '../../services/ProductsService';

class Products extends React.Component {
  state = {
    products: []
  }

  componentDidMount () {
    ProductsService.recent().then((products) => {
      this.setState({ products: products })
    })
  }

  render () {
    const products = this.state.products;

    return (
      <View>
        { products.map((product) => (
          <ProductPreview {...product} />
        )) }
      </View>
    )
  }
}

export default Products;
