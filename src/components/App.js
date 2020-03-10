import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducer from '../reducers'
import Login from './auth/Login';
import EmployeeList from './employee/EmployeeList';
import firebase from 'firebase';
import Router from './Router';

export default class App extends Component {
  
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDIKwsP1yFtYbnjuuOIVSudLs_GxbL9lyI',
      authDomain: 'authentication-fccac.firebaseapp.com',
      databaseURL: 'https://authentication-fccac.firebaseio.com',
      projectId: 'authentication-fccac',
      storageBucket: '',
      messagingSenderId: '78369891088',
      appId: '1:78369891088:web:bee1bf1a7a767e34'
    });
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      // <Text>a</Text>
      <Provider store={store} >
        <Router />
      </Provider>
    );

  }

}