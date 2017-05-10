/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import {StackNavigator} from  'react-navigation'
import {Trigon} from './src/component';

export default class xuexi extends Component {
  static navigationOptions = ({navigation})=>({
     title:(
        <View style={styles.headerTitle}>
            <TextInput placeholder='请输入'   style={styles.headerInput}/>
            <Text style={styles.search}>搜索</Text>
        </View>
      ),
      headerLeft:(
         <View>
           <Text>杭州</Text>
           <Trigon way='down'/>
         </View>
      ),
      headerStyle:styles.headerStyle
  });
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const XuxiApp = StackNavigator({
   Home:{screen:xuexi}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  headerStyle:{
     backgroundColor:'yellow',
     height:70
  },
  headerTitle:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:150,
      height:30,
      flexDirection:'row'
  },
  headerInput:{
    borderWidth:1,
    borderColor:'#CCC',
    borderRadius:4,
    height:30,
    width:120,
    paddingLeft:5,
    fontSize:12
  },
  search:{
    width:40,
    height:'100%',
    lineHeight:29,
    backgroundColor:'#23bfff',
    marginLeft:-5,
    borderRadius:4,
    textAlign:'center',
    color:'white'
  }
});

AppRegistry.registerComponent('xuexi', () => XuxiApp);
