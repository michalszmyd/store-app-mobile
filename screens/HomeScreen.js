import React from 'react';
import Screen from './Screen';
import { ScrollView } from 'react-native';
import RecentProducts from '../components/products/RecentProducts';
import FlashMessages from '../components/shared/FlashMessages';

class HomeScreen extends Screen {
  productNavigate = (productId) => {
    this.props.navigation.navigate('Product', { id: productId })
  }

  render () {
    return (
      <React.Fragment>
        <FlashMessages />
        <ScrollView style={{ backgroundColor: '#efefef' }}>
          <RecentProducts
            navigate={this.productNavigate}
            noApiResponse={this.noApiResponse}
          />
        </ScrollView>
      </React.Fragment>
    )
  }
}

export default HomeScreen;
