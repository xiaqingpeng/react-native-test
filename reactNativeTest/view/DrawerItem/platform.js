// 创作者平台
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  platform = require('../../images/drawerItem/platform.png')
const  platform_selected = require('../../images/drawerItem/platform_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={platform}> 创作者平台</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={platform_selected}>创作者平台</Text>
      //   }
      // },
      drawerLabel:'创作者平台',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.platform_image} source={platform}></Image>
        }else{
          return <Image  style={styles.platform_image} source={platform_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="创作者平台"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  platform_image:{
    width:32,
    height:32
  }
})

export default SkinCenter;
