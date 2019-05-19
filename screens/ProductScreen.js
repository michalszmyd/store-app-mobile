import React from 'react';
import { ScrollView } from 'react-native';
import ProductsService from '../services/ProductsService';
import HeroProduct from '../components/products/HeroProduct';

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
    return (
      <ScrollView>
        <HeroProduct {...this.state.product} />
      </ScrollView>
    )
  }
}

export default ProductScreen;
