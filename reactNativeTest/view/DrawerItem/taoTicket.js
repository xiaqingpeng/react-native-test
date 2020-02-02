// 胖汪淘票
import React, {Component} from 'react';
import {View, Text, Button,Image, StyleSheet} from 'react-native';
const  ticket = require('../../images/drawerItem/ticket.png')
const  ticket_selected = require('../../images/drawerItem/ticket_selected.png')
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // drawerLabel: (tintColor,focused) => {
      //   console.log(tintColor,focused)
      //   if(!focused){
      //     return <Text styles={{color:'black'}} source={ticket}> 胖汪淘票</Text>
      //   }else{
      //     return <Text  styles={{color:"red"}} source={ticket_selected}>胖汪淘票</Text>
      //   }
      // },
      drawerLabel:'胖汪淘票',
      drawerIcon:({tintColor,focused})=>{
        console.log(tintColor,focused)
        if(!focused){
          return <Image style={styles.ticket_image} source={ticket}></Image>
        }else{
          return <Image  style={styles.ticket_image} source={ticket_selected}></Image>
        }
      }
    };
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title="胖汪淘票"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ticket_image:{
    width:35,
    height:35
  }
})

export default SkinCenter;
