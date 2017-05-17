
import {StyleSheet} from 'react-native'
import {screen} from '../../common'

// flex :1 的意思  flex-grow: 1 如果空间有多则放大 flex-grow: 1 如果空间不足则缩小
// 如果需要换行排列的话 则不能用flex:1
//flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

//当组件引入style的时候如果有多个 则需要使用style = {[a,b]} 数组形式
const halfWidth = screen.width/2;
const partW4 = screen.width/4;

const HomeStyle = StyleSheet.create({
    container:{
        flex:1
    },
    headerTitle:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      backgroundColor:'#ffff',
      height:30,
      borderRadius:2
    },
    headerTitleContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      height:30,
      width:screen.width*0.7
    },
    searchIcon:{
      width:15,
      height:15
    },
    input:{
       width:screen.width*0.7-30,
       height:30,
       padding:5
    },
    leftTitle:{
      flex:1,
      width:screen.width*0.1,
      height:30,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    rightTilte:{
      flex:1,
      width:screen.width*0.1,
      flexDirection:'row',
      height:30,
      alignItems:'center'
    },
    headerStyle:{
      backgroundColor:'#06C1AE'
    },
    //首页菜单容器
    menuContainer:{
       flex:1,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'flex-start',
       width:screen.width,
       flexWrap:'wrap',
       backgroundColor:'white',
    },
    //菜单的元素
    menuItem:{
      display:'flex',
      width:screen.width/5,
      height:screen.width/5,
      padding:10,
      flexDirection:'column',
      alignItems:'center'
    },
    //图标的样式
    menuIcon:{
       width:screen.width/10,
       height:screen.width/10
    },
    //菜单文字样式
    menuTitle:{
      textAlign:'center',
      height:screen.width/10,
      fontSize:13,
      lineHeight:screen.width/20
    },

    //第二个grid的样式
    grid:{
       flex:1,
       backgroundColor:'white',
       flexDirection:'row',
       flexWrap:'wrap',
       justifyContent:'center',
    },
    //每个grid的样式
    gridItem:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:screen.width/2,
        height:screen.width/4,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderBottomColor:'#f5f2ed',
        borderRightColor:'#f5f2ed',
        justifyContent:'center',
    },
    gridTextView:{
      marginRight:10
    },
    gridImgView:{
      display:'flex',
      width:screen.width/5,
      height:screen.width/5,
      borderRadius:screen.width/5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    gridItemTitle:{
      fontSize:14,
      fontWeight:'500'
    },
    gridItemDes:{
      fontSize:12,
    },
    gridImg:{
      width:screen.width/5,
      height:screen.width/5
    },

    //猜你喜欢的容器样式
    guessYouLike:{
      backgroundColor:'white'
    },

    //ListView 样式
    listViewItem:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-start',
      padding:10,
      borderBottomWidth:1,
      borderBottomColor:'#f5f2ed',
      height:screen.width/6+20
    },
    listViewItemImg:{
      width:screen.width/6,
      height:screen.width/6,
      borderRadius:2
    },
    listViewItemRight:{
      flex:1,
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'flex-start',
      marginLeft:10,
      height:screen.width/6
    },
    listViewItemTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:15
    },
    listViewItemPrice:{
        color:'#06C1AE',
        fontWeight:'bold',
    }




})

export default  HomeStyle
