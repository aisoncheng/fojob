/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  Image,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import {HomeStyle} from  '../../css'


export default class GuessYouLike extends Component {


  constructor(props){
     super(props);
     this.state={
       isRefreshing:false
     }
  }

  //返回每一行数据
  rowData = (rowData)=>{
    const uri = rowData.imgurl.replace('w.h','120.0');
    console.log(rowData);
    return(
      <TouchableOpacity>
        <View style={HomeStyle.listViewItem}>
           <Image source={{uri:uri}} style={HomeStyle.listViewItemImg} />
           <View style={HomeStyle.listViewItemRight}>
              <Text style={[HomeStyle.listViewItemTitle,rowData.itemTitleStyle]}>{rowData.mname}</Text>
              <Text >[{rowData.range}]{rowData.title}</Text>
              <Text style={[HomeStyle.listViewItemPrice,rowData.priceStyle]}>{rowData.price}元</Text>
           </View>
        </View>
      </TouchableOpacity>
    );
  }
  //刷新数据的方法
  _onRefresh = ()=>{

  }

  //render 之前
  componentWillMount(){
    console.log(this.props);
  }

  render() {
    return (
      <ListView
          {...this.props}
          style={HomeStyle.guessYouLike}
          //dataSource = {this.state.dataSource}  //数据源
          renderRow  = {this.rowData}  //f每一个元素的标签
          //initialListSize = {1}
         // renderFooter = {this.renderFoot}  //保持在尾部的一个元素 每次渲染元素的时候都会调用这个方法 开销肯能比较大
         // renderHeader = {this.renderHead}  //同上 在头部
         //renderSectionHeader = {this.renderSelect}
         refreshControl={
           <RefreshControl
             refreshing={this.state.isRefreshing} //表示当前刷新的状态..false 转圈圈  true停止转圈圈
             onRefresh={this._onRefresh}   // 加载数据的方法
             tintColor="#ff0000"  //圈圈的颜色ios
             title="Loading..."   //圈圈下面的文字 ios
             titleColor="#00ff00" //圈圈下面的文字颜色 ios
             colors={['#ff0000', '#00ff00', '#0000ff']} //圈圈转变的颜色 android
             progressBackgroundColor="#ffff00"  //圈圈的背景颜色 android
           />
         }>
       </ListView>
    );
  }
}

/*
_onClick = (row)=>{
  row.clicks++;
  this.setState({
    rowData: this.state.rowData,
  });
}
 renderFoot = ()=>{
    return (
      <View style={{backgroundColor:'red',width:400,height:30}}>
        <Text>{this.state.loadI++}</Text>
      </View>
    )
 }
/*renderHead = () =>{
  return (
    <View style={{backgroundColor:'red',width:400,height:30}}>
      <Text>i am the head {this.state.headLoad++}</Text>
    </View>
  )
}
//function (sectionData,sectionID)=>renderable
 /*renderSelect = (sectionData,sectionID)=>{
  console.log(sectionData,sectionID);
  return <Text>xxx</Text>
}*/
