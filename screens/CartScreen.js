import React from 'react';
import {
  AsyncStorage,
  ScrollView
} from 'react-native';
import UsersService from '../services/UsersService';
import AuthenticateService from '../services/AuthenticateService';
import CartProduct from '../components/cart/CartProduct';

class CartScreen extends React.Component {
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

      this.setState({
        cartProducts: cartProducts.filter((cartProduct) => cartProduct.id !== id)
      })
    })
  }

  render () {
    const { cartProducts } = this.state;

    return (
      <ScrollView style={styles.container}>
        { cartProducts.map((product) => (
          <CartProduct
            key={product.id}
            onProductRemove={this.onProductRemove}
            {...product}
          />
        )) }
      </ScrollView>
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
