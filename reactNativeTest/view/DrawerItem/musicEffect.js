// 蝰蛇音效
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  effect = require('../../images/drawerItem/effect.png')
const  effect_selected = require('../../images/drawerItem/effect_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={effect}> 蝰蛇音效</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={effect_selected}>蝰蛇音效</Text>
      //   }
      // },
      drawerLabel:'蝰蛇音效',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.effect_image} source={effect}></Image>
        }else{
          return <Image  style={styles.effect_image} source={effect_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="蝰蛇音效"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  effect_image:{
    width:35,
    height:35
  }
})

export default SkinCenter;
