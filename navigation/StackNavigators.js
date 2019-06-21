import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';

export const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen },
  Login: { screen: LoginScreen }
});

export const CategoryNavigator = createStackNavigator({
  Category: { screen: CategoryScreen },
  Products: { screen: ProductsScreen },
  Product: { screen: ProductScreen },
  Login: { screen: LoginScreen }
});

export const SearchNavigator = createStackNavigator({
  Search: { screen: SearchScreen },
  Products: { screen: ProductsScreen },
  Product: { screen: ProductScreen },
  Login: { screen: LoginScreen }
})

export const CartNavigator = createStackNavigator({
  Cart: { screen: CartScreen },
  Login: { screen: LoginScreen, navigationOptions: () => ({ header: null }) }
})
