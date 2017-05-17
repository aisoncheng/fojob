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

export default class HomeGrid2 extends Component {

  constructor(props){
      super();
  }

  render() {
    const gridData = this.props.gridData ;
    const girdItem  = gridData.map((info,i)=>{
       return (
         <TouchableOpacity  key={i}  onPress={()=>this.props.onPress(info)}>
           <View style = {HomeStyle.gridItem} >
              <View style={HomeStyle.gridTextView}>
                 <Text style={[{color:info.typeface_color},HomeStyle.gridItemTitle]}>{info.maintitle}</Text>
                 <Text style={HomeStyle.gridItemDes}>{info.deputytitle}</Text>
              </View>
              <View style={HomeStyle.gridImgView}>
                <Image style={HomeStyle.gridImg} source={{uri:info.imageurl.replace('w.h','120.0')}}/>
              </View>
           </View>
         </TouchableOpacity>
       )
    });

    return (
      <View style={HomeStyle.grid}>
        {girdItem}
      </View>
    );
  }
}
