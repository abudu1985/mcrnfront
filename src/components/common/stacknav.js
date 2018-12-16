import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from  'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
import MainScreen from "./MainScreen";
import DetailScreen from "./DetailScreen";
import {Todo} from "../Todo";
import Profile from "../Profile";

const stackNav = createStackNavigator({
  Main : {
    screen: MainScreen,
    navigationOptions: ({navigation}) => ({
      title: "Main",
      headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
          <IOSIcon name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: {}
    })
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({navigation}) => ({
      title: "Detail",
    })
  },
  Todo: {
    screen: Todo,
    navigationOptions: ({navigation}) => ({
      title: "Todo",
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: "Profile",
    })
  }
});

export default stackNav;