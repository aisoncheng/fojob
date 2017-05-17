
import {Dimensions,Platform,PixelRatio} from 'react-native'
/**
Demensions 屏幕的宽高
Plathform 平台
http://reactnative.cn/docs/0.23/pixelratio.html

*/
export default {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    onePixel:1 / PixelRatio.get(),
    statusBarHeight: (Platform.OS === 'ios' ? 20 : 0)
}
