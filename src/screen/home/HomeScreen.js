/* @flow */
/**
 坑
 1  this的传递  尽量使用构造器在里面初始化 state
 2  方法使用 ()=>{} 方式定义 这样就可以不需要绑定this 程序会自动绑定this
 3  ListView 的dataSource  必须是ListView.dataSource的类型不然报错 不能是普通的Array类型
 4
 RefreshControl 用法..
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ListView
} from 'react-native';

import {HomeStyle} from '../../css'
import {NavigationItem,SpaceView} from '../../widget'
import GuessYouLike from './GuessYouLike'
import HomeGrid from './HomeGrid'
import HomeGrid2 from './HomeGrid2'

import {commonApi} from '../../services'

//componentDidMount 组件渲染完毕后 render 之后

//componentWillMount 组件渲染之前 render 之前

class HomeScreen extends Component {

  static navigationOptions = ({navigator})=>({
       headerTitle:(
         <View style={HomeStyle.headerTitleContainer}>
           <TouchableOpacity style={HomeStyle.headerTitle}>
              <Image source={require('../../img/Home/search_icon.png')} style={HomeStyle.searchIcon} />
              <TextInput style={HomeStyle.input}
                underlineColorAndroid='transparent' //设置下划线背景色透明达到去掉下划线的效果
                returnKeyType='go'
                placeholder='请输入'
              />
           </TouchableOpacity>
         </View>
       ),
       headerLeft:(
         <NavigationItem
            navStyle={HomeStyle.leftTitle}
            title = '杭州'
         />
       ),
       headerRight:(
         <NavigationItem
            navStyle={HomeStyle.rightTilte}
            icon={require('../../img/Home/icon_navigationItem_message_white@2x.png')}
         />
       ),
       headerStyle:HomeStyle.headerStyle
  })

 constructor(props){
   super();
   const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
   this.state = {
     gridData:[],
     groupData:ds.cloneWithRows([])
   }
 }

 onPressMenu = (data) => {
    this.props.navigation.navigate('Nearby',{url:'xx'})
 }

 onPressGrid = (grid) =>{
     const url = grid.tplurl;
     const index = url.indexOf('url=');
     const uri = url.substring(index+4);
     this.props.navigation.navigate('web',{uri:uri});
 }
 //这个是组件本身的方法 不需要等于号   在render方法之前
 componentWillMount (){
     this.fetchGrid();
     this.fetchGrouData();
 }

 //获取listView 商品的信息
 fetchGrouData = () =>{
   fetch(commonApi.recommend)
   .then((response)=>response.json())
   .then((json)=>{
       const dsRows = this.state.groupData.cloneWithRows(json.data);
       this.setState({
         groupData:dsRows
       });

   });
 }
 //获取grid 第二grid的数据
 fetchGrid = () =>{
     fetch(commonApi.discount).then((response) => response.json())
     .then((json)=>{
        this.setState({
           gridData:json.data
        })
     });
 }

  render() {
    return (
       <View style={HomeStyle.container}>
         <HomeGrid menuInfos = {commonApi.menuInfo} onPress = {this.onPressMenu}/>
         <SpaceView />
         <HomeGrid2 gridData = {this.state.gridData}  onPress={this.onPressGrid}/>
         <SpaceView />
         <GuessYouLike  dataSource = {this.state.groupData} />
       </View>
    );
  }



}



export default HomeScreen
