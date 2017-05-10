import React,{Component} from 'react'
import {StyleSheet,View} from 'react-native'

class TrigonCom extends Component{

     constructor(){
       super();
       
     }

     render(){
        return (
            <View style={styles[this.state.way]}></View>
        );
     }
}
const styles = StyleSheet.create({
     up:{
       width: 0,
       height:0,
       borderLeftWidth: 5,
       borderStyle: 'solid',
       borderLeftColor: 'transparent',
       borderRightWidth: 5,
       borderRightColor: 'transparent',
       borderBottomWidth: 10,
       borderBottomColor: 'red'
     },
     down:{
       width: 0,
       height:0,
       borderLeftWidth: 5,
       borderStyle: 'solid',
       borderLeftColor: 'transparent',
       borderRightWidth: 5,
       borderRightColor: 'transparent',
       borderTopWidth: 10,
       borderTopColor: 'red'
     }

})
export default TrigonCom;

/**
 width: 0;
 height: 0;
 border-left: 50px solid transparent;
 border-right: 50px solid transparent;
 border-top: 100px solid red;
*/
