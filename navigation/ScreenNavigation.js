import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Product: { screen: ProductScreen }
});

const BottomNavigator = createBottomTabNavigator({
  Home: MainNavigator
})

const ScreenNavigation = createAppContainer(BottomNavigator);

export default ScreenNavigation;
