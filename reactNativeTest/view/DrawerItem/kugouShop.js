// 酷狗商城
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  shop = require('../../images/drawerItem/shop.png')
const  shop_selected = require('../../images/drawerItem/shop_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={shop}> 酷狗商城</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={shop_selected}>酷狗商城</Text>
      //   }
      // },
      drawerLabel:'酷狗商城',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.shop_image} source={shop}></Image>
        }else{
          return <Image  style={styles.shop_image} source={shop_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="酷狗商城"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  shop_image:{
    width:30,
    height:30
  }
})

export default SkinCenter;
