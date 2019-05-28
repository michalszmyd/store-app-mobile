import React from 'react';
import { View, Text } from 'react-native';
import ProductPreview from './ProductPreview';
import ProductsService from '../../services/ProductsService';

class RecentProducts extends React.Component {
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
        <View style={styles.productsContainer}>
          { products.length > 0 ? products.map((product) => (
            <ProductPreview
              navigate={this.props.navigate}
              key={product.id}
              {...product}
            />
          )) : <Text>Loading...</Text> }
        </View>
      </View>
    )
  }
}

const styles = {
  header: {
    textAlign: 'center',
    fontSize: 32
  },
  productsContainer: {
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  }
}

export default RecentProducts;
