import React from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import ProductsService from '../services/ProductsService';
import HeroProduct from '../components/products/HeroProduct';
import ProductModel from '../models/ProductModel';
import UsersService from '../services/UsersService';
import AuthenticateService from '../services/AuthenticateService';
import AppContext from '../contexts/AppContext';

class ProductScreen extends React.Component {
  static contextType = AppContext;

  state = {
    product: new ProductModel({})
  }

  addProductToCart = async (params) => {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      const csrfToken = await AuthenticateService.csrfToken();
      const parsedUser = JSON.parse(user);
      const service = new UsersService({
        csrfToken: csrfToken,
        authToken: parsedUser.token
      });

      service.addProductToCart(params).then(() => {
        this.context.pushFlashMessage({
          title: 'Product',
          description: 'Product added to cart',
          type: 'success'
        })
      })
    } else {
      this.context.pushFlashMessage({
        title: 'Unathorized',
        description: 'You need to login before this action',
        type: 'warning'
      });
      this.props.navigation.replace('Login',
        { previousScreen: ['Product', { id: this.state.product.id }] }
      )
    }
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
        <HeroProduct {...this.state.product} addProductToCart={this.addProductToCart} />
      </ScrollView>
    )
  }
}

export default ProductScreen;
