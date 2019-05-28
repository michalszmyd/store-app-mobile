import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ProductsScreen from '../screens/ProductsScreen';

const HomeNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen }
});

const CategoryNavigator = createStackNavigator({
  Category: CategoryScreen,
  Products: { screen: ProductsScreen },
  Product: { screen: ProductScreen }
});

const BottomNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Category: CategoryNavigator
})

const ScreenNavigation = createAppContainer(BottomNavigator);

export default ScreenNavigation;
