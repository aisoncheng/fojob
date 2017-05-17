/* @flow */

/**
 此页面的坑..
 1 如果你export default class xxx了 某个component 那么在另外的一个页面引入的时候则应该是 import xxx from  'xxx'; 不能是 import {xxx} from 'xxx';
   如果是export 没有default 的话 则需要有大刮号 引入的时候
 2
*/

import React, { Component } from 'react';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation'
import {TabBarItem} from './widget'

import HomeScreen from  './screen/home/HomeScreen'
import NearByScreen  from './screen/Nearby/NearbyScreen'
import OrderScreen from './screen/order/OrderScreen'
import MineScreen from  './screen/mine/MineScreen'
import {color} from './css'
import WebScreen from './screen/web/WebScreen'

export default class RootScreen extends Component {

  render() {
      return (
        <Navigator/>
      )
  }
}


//a tab for the footer
const Tab = TabNavigator({
      Home:{
        screen:HomeScreen,
        navigationOptions: ({ navigation }) => ({
                tabBarLabel: '团购',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage@2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
                    />
                )
        })
      },
      Nearby:{
        screen:NearByScreen,
        navigationOptions:({navigation})=>({
          tabBarLabel:'附近',
          tabBarIcon:({focused,tintColor})=>(  // ()=>() 表示一个方法 方法返回 后面这个方法里面的内容 第一个（）里面表述传入的参数
                <TabBarItem
                   tintColor = {tintColor}
                   focused = {focused}
                   normalImage={require('./img/tabbar/pfb_tabbar_merchant@2x.png')}
                   selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected@2x.png')}
                />
          )
        })
      },
      Order:{
        screen:OrderScreen,
        navigationOptions:({navigation})=>({
          tabBarLabel:'订单',
          tabBarIcon:({focused,tintColor})=>(
              <TabBarItem
                 tintColor = {tintColor}
                 focused = {focused}
                 normalImage={require('./img/tabbar/pfb_tabbar_order@2x.png')}
                 selectedImage={require('./img/tabbar/pfb_tabbar_order_selected@2x.png')}
              />
          )
        })
      },
      Mine:{
        screen:MineScreen,
        navigationOptions:({navigation})=>({
          tabBarLabel:'我的',
          tabBarIcon:({focused,tintColor})=>(
              <TabBarItem
                 tintColor = {tintColor}
                 focused = {focused}
                 normalImage={require('./img/tabbar/pfb_tabbar_mine@2x.png')}
                 selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected@2x.png')}
              />
          )
        })
      }
},
{
        tabBarComponent: TabBarBottom, //这个可以展示图标和文字
        tabBarPosition: 'bottom', //排序方法
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,//图标的颜色
            inactiveTintColor: '#979797', //字的颜色
            style: { backgroundColor: '#ffffff' }, //北京颜色
        },
    })



const  Navigator = StackNavigator({
     Tab:{
       screen:Tab
     },
     web:{
       screen:WebScreen
     }
})
