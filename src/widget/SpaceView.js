/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {BaseStyle} from  '../css'

export default class SpaceView extends Component {
  render() {
    return (
      <View style={BaseStyle.spaceView}></View>
    );
  }
}
