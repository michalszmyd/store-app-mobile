import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

const ScreenNavigation = createAppContainer(MainNavigator);

export default ScreenNavigation;
