import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductPreview from '../components/products/ProductPreview';
import ProductsService from '../services/ProductsService';

class ProductsScreen extends React.Component {
  state = {
    products: []
  }

  componentDidMount () {
    const filterParams = this.props.navigation.state.params;

    ProductsService.filter(filterParams).then((products) => {
      this.setState({ products: products })
    })
  }

  productNavigate = (productId) => {
    this.props.navigation.navigate('Product', { id: productId })
  }

  render () {
    const { products } = this.state;

    return (
      <ScrollView>
        <View style={styles.productsContainer}>
          { products.length > 0 ? products.map((product) => (
            <ProductPreview
              navigate={this.productNavigate}
              key={product.id}
              {...product}
            />
          )) : <Text>Loading...</Text> }
        </View>
      </ScrollView>
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

export default ProductsScreen;