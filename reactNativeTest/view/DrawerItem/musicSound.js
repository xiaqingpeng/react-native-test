// 铃声彩铃
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  sound = require('../../images/drawerItem/sound.png')
const  sound_selected = require('../../images/drawerItem/sound_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={sound}> 铃声彩铃</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={sound_selected}>铃声彩铃</Text>
      //   }
      // },
      drawerLabel:'铃声彩铃',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.sound_image} source={sound}></Image>
        }else{
          return <Image  style={styles.sound_image} source={sound_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="铃声彩铃"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sound_image:{
    width:30,
    height:30
  }
})

export default SkinCenter;
