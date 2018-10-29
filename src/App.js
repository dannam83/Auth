import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  }

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
          );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.findUserSpinnerStyle}>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {
    return (
        <View>
          <Header headerText="Authorization" />
          {this.renderContent()}
        </View>
    );
  }
}

const styles = {
   findUserSpinnerStyle: {
     paddingTop: 100
   }
 };

export default App;
