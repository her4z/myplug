import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './components/home';
import Login from './components/login';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Parse, { User } from "parse/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './Main';
import { withAuthenticator } from 'aws-amplify-react-native'




Parse.setAsyncStorage(AsyncStorage);
Parse.initialize("5VkdWJ3nBCqG3OzurM86MNPEtRudm7eTcWPXLYIr", "iurB11v84oyOQWyqrSyGvaSwp6tQKBakg8vyEIge");
Parse.serverURL = 'https://parseapi.back4app.com/';



 
const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Login"
            component={Login}
          />
        <Stack.Screen
            name="Main"
            component={Main}
        />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
});

export default withAuthenticator(App)