import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen }
});

const ScreenNavigation = createAppContainer(MainNavigator);

export default ScreenNavigation;
