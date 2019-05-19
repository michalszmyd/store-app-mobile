import React from 'react';
import { ScrollView, Text } from 'react-native';
import RecentProducts from '../components/products/RecentProducts';

class HomeScreen extends React.Component {
  productNavigate = (productId) => {
    this.props.navigation.navigate('Product', { id: productId })
  }

  render () {
    return (
      <ScrollView style={{ backgroundColor: '#efefef' }}>
        <RecentProducts navigate={this.productNavigate} />
      </ScrollView>
    )
  }
}

export default HomeScreen;
