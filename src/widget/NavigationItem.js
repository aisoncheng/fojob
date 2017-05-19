/* @flow */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,Text
} from 'react-native';
import {BaseStyle} from '../css'

export default class NavigationItem extends Component {

  constructor(props){
    super();
  }
  render() {
    const icon = this.props.icon &&
        <Image source = {this.props.icon}  style = {BaseStyle.icon,this.props.iconStyle} />
    const title = this.props.title &&
        <Text style={BaseStyle.title,this.props.titleStyle}>{this.props.title}</Text>
    return (
      <TouchableOpacity style={this.props.navStyle} onPress = {this.props.onPressRight}>
         {icon}
         {title}
      </TouchableOpacity>
    );
  }
}
