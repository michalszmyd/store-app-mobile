import React from 'react';
import { ScrollView } from 'react-native';
import RecentProducts from '../components/products/RecentProducts';
import FlashMessages from '../components/shared/FlashMessages';

class HomeScreen extends React.Component {
  productNavigate = (productId) => {
    this.props.navigation.navigate('Product', { id: productId })
  }

  render () {
    return (
      <React.Fragment>
        <FlashMessages />
        <ScrollView style={{ backgroundColor: '#efefef' }}>
          <RecentProducts navigate={this.productNavigate} />
        </ScrollView>
      </React.Fragment>
    )
  }
}

export default HomeScreen;
