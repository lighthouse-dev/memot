import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const App = createStackNavigator(
  {
    Home: { screen: MemoListScreen },
    LoginScreen: { screen: LoginScreen }, // 一番上に定義している画面が表示
    SignUpScreen: { screen: SignUpScreen },
    MemoListScreen: { screen: MemoListScreen },
    MemoDetailScreen: { screen: MemoDetailScreen },
    MemoEditScreen: { screen: MemoEditScreen }
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Memot',
      headerStyle: {
        backgroundColor: '#3F52B5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3
      },
      headerTitleStyle: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78
  }
});

export default createAppContainer(App);
