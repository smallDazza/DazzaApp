import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
 import { Provider } from 'react-redux';
 import { createStore } from 'redux';
 import reducers from '../reducers/PeopleReducer';
 import Navigation from './Navigation';
 import { Appbar } from 'react-native-paper';
 import {SafeAreaProvider} from 'react-native-safe-area-context';


 const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 
 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return (
       <SafeAreaProvider>
        <Provider store={store}>
         <Appbar.Header style={{backgroundColor: '#c64c38'}}>
           <Appbar.Content color={'#ffffff'} style={{backgroundColor: '#c64c38'}} title="ROI Staff Directory App" subtitle={'Developed using React Native'} />
         </Appbar.Header>
         <Navigation />
        </Provider>
       </SafeAreaProvider>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#c64c38',
    },
  });

 
 



