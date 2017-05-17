/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import {HomeStyle} from '../../css'

export default class HomeGrid extends Component {

  constructor(props){
     super(props);
  }

  render() {
    const data = this.props.menuInfos ? this.props.menuInfos : [{title:'no menus',icon:require('../../img/Home/icon_homepage_foottreatCategory.png')}];
    const ndata = data.length>10 ? data.slice(0,10) : data; //要用一个新的对象去接收 因为老的对象是属于上一级的元素的 更改了则上一级也会被更改
    const menus = ndata.map((info,i)=>(
        <TouchableOpacity style = {HomeStyle.menuItem} onPress={()=>this.props.onPress(info)} key={i}>
            <Image style={HomeStyle.menuIcon} source={info.icon}/>
            <Text style={HomeStyle.menuTitle}>{info.title}</Text>
        </TouchableOpacity>
    ))
    return (
      <View style = {HomeStyle.menuContainer}>
         {menus}
      </View>
    );
  }
}
