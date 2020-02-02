// 流量包月
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  flow = require('../../images/drawerItem/flow.png')
const  flow_selected = require('../../images/drawerItem/flow_selected.png')
class FlowPay extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={flow}> 流量包月</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={flow_selected}>流量包月</Text>
      //   }
      // },
      drawerLabel:'流量包月',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.flow_image} source={flow}></Image>
        }else{
          return <Image  style={styles.flow_image} source={flow_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="流量包月"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flow_image:{
    width:28,
    height:28
  }
})

export default FlowPay;
