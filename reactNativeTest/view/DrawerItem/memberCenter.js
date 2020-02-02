// 会员中心
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  member = require('../../images/drawerItem/member.png')
const  member_selected = require('../../images/drawerItem/member_selected.png')
class MemberCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={member}> 会员中心</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={member_selected}>会员中心</Text>
      //   }
      // },
      drawerLabel:'会员中心',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.member_image} source={member}></Image>
        }else{
          return <Image  style={styles.member_image} source={member_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="会员中心"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  member_image:{
    width:25,
    height:25
  }
})

export default MemberCenter;
