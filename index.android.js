/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native'
import RootScreen from './src/RootScreen';


export default class xuexi extends Component {

     render(){
       return (
        <RootScreen />
       )
     }
}
AppRegistry.registerComponent('xuexi', () => xuexi);
