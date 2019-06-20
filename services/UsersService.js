import ApiService from './ApiService';
import UserModel from '../models/UserModel';
import CartProductModel from '../models/CartProductModel';

class UsersService {
  constructor ({ csrfToken, authToken }) {
    this.csrfToken = csrfToken;
    this.authToken = authToken;
  }

  cartProducts = () => (
    ApiService.get({ url: 'users_products', authToken: this.authToken })
      .then((json) => json.map((value) => new CartProductModel(value)))
  )

  addProductToCart = (params) => (
    ApiService.post({
      body: JSON.stringify({ users_product: params }),
      url: 'users_products',
      csrfToken: this.csrfToken,
      authToken: this.authToken
    }).then((json) => json.map((value) => new CartProductModel(value)))
  )

  removeProductFromCart = (params) => (
    ApiService.delete({
      url: `users_products/${params.cartItemId}`,
      csrfToken: this.csrfToken,
      authToken: this.authToken
    }).then(() => true )
  )

  login = (params) => (
    ApiService.post({
      body: JSON.stringify({ user: params }),
      csrfToken: this.csrfToken,
      url: 'users/sign_in'
    }).then((json) => new UserModel(json))
  )

  register = (params) => (
    ApiService.post({
      body: JSON.stringify({ user: params }),
      csrfToken: this.csrfToken,
      url: 'users'
    }).then((json) => new UserModel(json))
  )
}

export default UsersService;
