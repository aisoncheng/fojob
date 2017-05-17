
import {StyleSheet} from 'react-native'
import {screen} from '../../common'


const BaseStyle = StyleSheet.create({
    //头的右侧图标样式
    icon: {
      width: 27,
      height: 27,
      margin: 8,
    },
    title: {
      fontSize: 15,
      color: '#333333',
      margin: 8,
    },
    navLeft:{

    },
    //裤腰带
    spaceView:{
      width:screen.widht,
      height:14
    }
})

export default  BaseStyle
