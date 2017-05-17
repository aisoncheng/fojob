/* @flow */
/**
附近的component
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class NearByScreen extends Component {
  render() {
    return (
      <View >
        <Text>I'm the NearByScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
