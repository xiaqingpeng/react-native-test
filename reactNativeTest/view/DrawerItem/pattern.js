// 青少年模式
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  pattern = require('../../images/drawerItem/pattern.png')
const  pattern_selected = require('../../images/drawerItem/pattern_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={pattern}> 青少年模式</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={pattern_selected}>青少年模式</Text>
      //   }
      // },
      drawerLabel:'青少年模式',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.pattern_image} source={pattern}></Image>
        }else{
          return <Image  style={styles.pattern_image} source={pattern_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="青少年模式"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  pattern_image:{
    width:30,
    height:30
  }
})

export default SkinCenter;
