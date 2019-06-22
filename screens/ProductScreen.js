import React from 'react';
import Screen from './Screen';
import { ScrollView, AsyncStorage } from 'react-native';
import ProductsService from '../services/ProductsService';
import HeroProduct from '../components/products/HeroProduct';
import ProductModel from '../models/ProductModel';
import UsersService from '../services/UsersService';
import AuthenticateService from '../services/AuthenticateService';
import AppContext from '../contexts/AppContext';
import FlashMessages from '../components/shared/FlashMessages';

class ProductScreen extends Screen {
  static contextType = AppContext;

  state = {
    product: new ProductModel({})
  }

  addProductToCart = async (params) => {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      const csrfToken = await AuthenticateService.csrfToken().catch((e) => this.noApiResponse(e));
      if (!csrfToken) return;

      const parsedUser = JSON.parse(user);
      const service = new UsersService({
        csrfToken: csrfToken,
        authToken: parsedUser.token
      });

      await service.addProductToCart(params).then(() => {
        this.context.pushFlashMessage({
          description: 'Product added to cart',
          type: 'success'
        })
      }).catch((e) => {
        this.noApiResponse(e);
      });
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
    }).catch((e) => {
      this.noApiResponse(e);
    })
  }

  render () {
    return (
      <React.Fragment>
        <FlashMessages />
        <ScrollView>
          <HeroProduct
            {...this.state.product}
            addProductToCart={this.addProductToCart}
          />
        </ScrollView>
      </React.Fragment>
    )
  }
}

export default ProductScreen;
