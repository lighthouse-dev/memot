import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoAddScreen from './src/screens/MemoAddScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import ENV from './env.json';

require('firebase/firestore');

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.FIREBASE_APPID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen }, // 一番上に定義している画面が表示
    SignUpScreen: { screen: SignUpScreen },
    MemoAddScreen: { screen: MemoAddScreen },
    MemoEditScreen: { screen: MemoEditScreen },
    MemoListScreen: { screen: MemoListScreen },
    MemoDetailScreen: { screen: MemoDetailScreen }
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
      },
      headerTintColor: '#FFF',
      headerBackTitle: null
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
