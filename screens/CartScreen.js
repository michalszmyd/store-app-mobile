import React from 'react';
import {
  AsyncStorage,
  ScrollView
} from 'react-native';
import UsersService from '../services/UsersService';
import AuthenticateService from '../services/AuthenticateService';
import CartProduct from '../components/cart/CartProduct';
import AppContext from '../contexts/AppContext';
import FlashMessages from '../components/shared/FlashMessages';

class CartScreen extends React.Component {
  static contextType = AppContext;

  state = {
    cartProducts: []
  }

  componentDidMount () {
    this.navigationWillFocusListener = this.props.navigation.addListener('willFocus', () => {
      AsyncStorage.getItem('user').then((user) => {
        if (user) {
          const parsedUser = JSON.parse(user);
          const service = new UsersService({ authToken: parsedUser.token });

          service.cartProducts().then((cartProducts) => {
            this.setState({
              cartProducts: cartProducts
            })
          })
        } else {
          this.context.pushFlashMessage({
            title: 'Unathorized',
            description: 'You need to login before this action',
            type: 'warning'
          });
          this.props.navigation.replace('Login', { previousScreen: 'Cart' })
        }
      })
    });
  }

  componentWillUnmount () {
    this.navigationWillFocusListener.remove()
  }

  onProductRemove = async (id) => {
    const csrfToken = await AuthenticateService.csrfToken();
    const user = await AsyncStorage.getItem('user');
    const parsedUser = JSON.parse(user);
    const service = new UsersService({
      csrfToken: csrfToken,
      authToken: parsedUser.token
    });

    service.removeProductFromCart({
      cartItemId: id
    }).then(() => {
      const cartProducts = this.state.cartProducts;

      this.context.pushFlashMessage({ title: 'Product', description: 'Product removed', type: 'success' });
      this.setState({
        cartProducts: cartProducts.filter((cartProduct) => cartProduct.id !== id)
      })
    })
  }

  render () {
    const { cartProducts } = this.state;

    return (
      <React.Fragment>
        <FlashMessages />
        <ScrollView style={styles.container}>
          { cartProducts.map((product) => (
            <CartProduct
              key={product.id}
              onProductRemove={this.onProductRemove}
              {...product}
            />
          )) }
        </ScrollView>
      </React.Fragment>
    )
  }
}

const styles = {
  container: {
    padding: 12,
    backgroundColor: '#fafafa'
  }
}

export default CartScreen;
