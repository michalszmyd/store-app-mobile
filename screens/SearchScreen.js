import React from 'react';
import Screen from './Screen';
import { ScrollView, View } from 'react-native';
import ProductPreview from '../components/products/ProductPreview';
import ProductsService from '../services/ProductsService';
import SearchBar from '../components/search/shared/SearchBar';
import FlashMessages from '../components/shared/FlashMessages';

class SearchScreen extends Screen {
  state = {
    products: []
  }

  componentDidMount () {
    ProductsService.paginate().then((products) => {
      this.setState({
        products: products
      })
    }).catch((e) => {
      this.noApiResponse(e);
    })
  }

  onQueryChange = (value) => {
    this.filterQueryChangedAt = new Date();
    this.filterValue = value;

    setTimeout(() => {
      if (new Date() - this.filterQueryChangedAt >= 700) {
        ProductsService.filter({
          page: 1,
          query: value,
          categoriesIds: []
        }).then((products) => {
          this.setState({
            products: products
          })
        })
      }
    }, 700);
  }

  productNavigate = (productId) => {
    this.props.navigation.navigate('Product', { id: productId })
  }

  render () {
    const { products, query } = this.state;

    return (
      <React.Fragment>
        <FlashMessages />
        <SearchBar onQueryChange={this.onQueryChange} query={query} />
        <ScrollView>
          <View style={styles.productsContainer}>
            { products.map((product) => (
              <ProductPreview navigate={this.productNavigate} key={product.id} {...product} />
            )) }
          </View>
        </ScrollView>
      </React.Fragment>
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

export default SearchScreen;
