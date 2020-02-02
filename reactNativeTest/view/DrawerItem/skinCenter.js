// 皮肤中心
import React, {Component,Fragment} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
const skin = require('../../images/drawerItem/skin.png');
const skin_selected = require('../../images/drawerItem/skin_selected.png');
import Header from '../../Components/Header';
const leftIcon = require('../../images/drawerItem/back.png');
const rightIcon = require('../../images/drawerItem/search.png');
class SkinCenter extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      drawerLabel: (tintColor, focused) => {
        console.log(tintColor, focused);
        if (!focused) {
          return (
            <View style={styles.label}>
              <Text styles={{color: 'white',fontWeight: 'bold',}} > 皮肤中心</Text>
              <Text styles={{color: 'white',fontWeight: 'bold',}}> 鼠年快乐</Text>
            </View>
          );
        } else {
          return (
            <View style={styles.label_focused}>
              <Text styles={{color: 'white',fontWeight: 'bold',}}> 皮肤中心</Text>
              <Text styles={{color: 'white',fontWeight: 'bold',}}> 鼠年快乐</Text>
            </View>
          );
        }
      },
      // drawerLabel:'皮肤中心',
      drawerIcon: ({tintColor, focused}) => {
        console.log(tintColor, focused);
        if (!focused) {
          return <Image style={styles.skin_image} source={skin}></Image>;
        } else {
          return (
            <Image style={styles.skin_image} source={skin_selected}></Image>
          );
        }
      },
    };
  };
  handleHeaderClick = e => {
    console.log(e);
    if (e === 'leftBtn') {
      console.log(this.props.navigation)
      this.props.navigation.openDrawer()
    } else if (e === 'rightBtn') {
      console.log('等会');
    } else {
      console.log('不跳');
    }
  };
  render() {
    const {navigation} = this.props;
    const styleHeader = {
      style: {
        height: 70,
        backgroundColor: 'rgb(3,127,254)',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      contentText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      leftImageUrl: leftIcon,
      leftImage: {
        width: 30,
        height: 30,
      },
      rightImageUrl: rightIcon,
      content: '皮肤中心',
      rightImage: {
        width: 30,
        height: 30,
      },
    };
    return (

      <Fragment>
         <View style={styles.blank}></View>
      <Header
        styleHeader={styleHeader}
        handleClick={e => this.handleHeaderClick(e)}>
        </Header>
        <Button
          title="皮肤中心"
          onPress={() => {
            this.props.navigation.openDrawer();
          }}></Button>
    </Fragment>
      
       
     
    );
  }
}
const styles = StyleSheet.create({
  label: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   // backgroundColor: 'pink',
    width: '80%',
    height: 50,
    marginLeft:-2,
    paddingLeft:0
  },
  label_focused: {
    flexDirection:'row',
    justifyContent:'space-between',
   //  backgroundColor:'yellow',
    width:'80%',
    height:50,
    alignItems:'center',
  },
  skin_image: {
    width: 30,
    height: 30,
  },
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
});

export default SkinCenter;


