import React from 'react';
import { ScrollView, Text } from 'react-native';
import Products from '../components/products/Products';

class HomeScreen extends React.Component {
  state = {
    products: []
  }

  render () {
    return (
      <ScrollView>
        <Text>Hello world</Text>
        <Products />
      </ScrollView>
    )
  }
}

export default HomeScreen;
