/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Navigator from './src/Navigation/navigation'
import { Provider } from 'react-redux';
import store from './src/Redux/Store/store'
import NavigtionService from './src/Navigation/NavigationService';
import messaging from '@react-native-firebase/messaging';

import { Spinner } from 'native-base';
export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      profileData: '',
      loading: true,
    }
   
  }

  componentDidMount () {
    console.log(" this.props.navigation.state Notification APP.JS")
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if(remoteMessage) {
        NavigtionService.navigate("Splash", {notification: true})
        console.log(
          'this.props.navigation.state Notification caused app to open from quit state:',
          remoteMessage,
          );
        }
      });

      messaging().onNotificationOpenedApp(remoteMessage => {
        if(remoteMessage) {
          NavigtionService.navigate("Splash", {notification: true})
          console.log(
            ' Notification caused app to open from background state:',
            remoteMessage.notification,
          );
        }
      });

        // Check whether an initial notification is available
          
        // setTimeout(() => {
          this.setState({ loading: false });
        // }, 9000)
      }


  fetchProfileData = (data) => {
    this.setState({
      profileData: data
    })
  }
  


  render() {
    console.disableYellowBox = true
    if (this.state.loading) {
      return <Spinner />
    }
    return (
      <View style={{ flex:1 }}>
        <Provider store={store}>
            {this.state.loading ? 
              <Spinner /> 
            : 
              <Navigator 
                screenProps={{ fetchProfileData: this.fetchProfileData, profileData: this.state.profileData }}
                ref={(navigatorRef) => {
                  NavigtionService.setTopLevelNavigator(navigatorRef);
                  }} />
            }
          </Provider>
      </View>
    );
  }
};

