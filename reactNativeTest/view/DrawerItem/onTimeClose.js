// 定时关闭
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  clock = require('../../images/drawerItem/clock.png')
const  clock_selected = require('../../images/drawerItem/clock_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={clock}> 定时关闭</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={clock_selected}>定时关闭</Text>
      //   }
      // },
      drawerLabel:'定时关闭',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.clock_image} source={clock}></Image>
        }else{
          return <Image  style={styles.clock_image} source={clock_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="定时关闭"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  clock_image:{
    width:28,
    height:28
  }
})

export default SkinCenter;
