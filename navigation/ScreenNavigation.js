import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { HomeNavigator, CategoryNavigator, SearchNavigator, CartNavigator } from './StackNavigators';

const BottomNavigator = createBottomTabNavigator({
  Home: { screen: HomeNavigator },
  Category: CategoryNavigator,
  Search: SearchNavigator,
  Cart: { screen: CartNavigator },
})

const ScreenNavigation = createAppContainer(BottomNavigator);

export default ScreenNavigation;
