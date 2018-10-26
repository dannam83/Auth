import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAnyqYFEmON9P8GqnnRYLvn66KoFjtcRG8',
      authDomain: 'auth-13ae9.firebaseapp.com',
      databaseURL: 'https://auth-13ae9.firebaseio.com',
      projectId: 'auth-13ae9',
      storageBucket: 'auth-13ae9.appspot.com',
      messagingSenderId: '843003811955'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
        <View>
          <Header headerText="Authorization" />
          <LoginForm />
        </View>
    );
  }
}

export default App;
