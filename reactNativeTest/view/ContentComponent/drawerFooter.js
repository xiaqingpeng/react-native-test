import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


// const dataSource = [
//   {
//     icon: require('../../images/contentComponent/set.png'),
//     content: '设置',
//   },
//   {
//     icon: require('../../images/contentComponent/back.png'),
//     content: '退出登录',
//   },
//   {
//     icon: require('../../images/contentComponent/close.png'),
//     content: '关闭',
//   },
// ];
class DrawerFooter extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
       
        
         
             
             
              <View  style={styles.open_view}>
                {/* <AntDesign  name='setting' size={25} ></AntDesign> */}
                <Text style={styles.open_view_list_text}>设置</Text>
              </View>
              <View  style={styles.open_view}>
                {/* <MaterialCommunityIcons  name='login-variant' size={28} ></MaterialCommunityIcons> */}
                <Text style={styles.open_view_list_text}>退出登录</Text>
              </View>
              <View  style={styles.open_view}>
                {/* <AntDesign  name='poweroff' size={21} ></AntDesign> */}
                <Text style={styles.open_view_list_text}>关闭</Text>
              </View>
          
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-evenly',
  },
  open_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  open_view_list_image: {
    width: 35,
    height: 35,
  },
  open_view_list_text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
});
export default DrawerFooter;
