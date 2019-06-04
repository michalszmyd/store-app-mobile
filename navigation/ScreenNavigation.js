import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SearchScreen from '../screens/SearchScreen';
import LoginScreen from '../screens/LoginScreen';

const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen }
});

const CategoryNavigator = createStackNavigator({
  Category: CategoryScreen,
  Products: { screen: ProductsScreen },
  Product: { screen: ProductScreen }
});

const SearchNavigator = createStackNavigator({
  Search: { screen: SearchScreen },
  Products: { screen: ProductsScreen },
  Product: { screen: ProductScreen }
})

const BottomNavigator = createBottomTabNavigator({
  Login: LoginScreen,
  Home: HomeNavigator,
  Category: CategoryNavigator,
  Search: SearchNavigator,
})

const ScreenNavigation = createAppContainer(BottomNavigator);

export default ScreenNavigation;
