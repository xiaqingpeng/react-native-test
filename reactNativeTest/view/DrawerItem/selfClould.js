// 私人云盘
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  cloud  = require('../../images/drawerItem/cloud.png')
const  cloud_selected = require('../../images/drawerItem/cloud_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={cloud}> 私人云盘</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={cloud_selected}>私人云盘</Text>
      //   }
      // },
      drawerLabel:'私人云盘',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.cloud_image} source={cloud}></Image>
        }else{
          return <Image  style={styles.cloud_image} source={cloud_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="私人云盘"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cloud_image:{
    width:32,
    height:32
  }
})

export default SkinCenter;
