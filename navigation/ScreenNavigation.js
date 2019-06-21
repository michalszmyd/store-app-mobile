import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/Feather';
import React from 'react';
import { HomeNavigator, CategoryNavigator, SearchNavigator, CartNavigator } from './StackNavigators';

const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon size={19} color={tintColor} name="home" />
      )
    }
  },
  Category: {
    screen: CategoryNavigator,
    navigationOptions: {
      title: 'Categories',
      tabBarIcon: ({ tintColor }) => (
        <Icon size={19} color={tintColor} name="list" />
      )
    }
  },
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon size={19} color={tintColor} name="search" />
      )
    }
  },
  Cart: {
    screen: CartNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon size={19} color={tintColor} name="shopping-cart" />
      )
    }
  },
})

const ScreenNavigation = createAppContainer(BottomNavigator);

export default ScreenNavigation;
