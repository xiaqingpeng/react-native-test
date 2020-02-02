import React, {Component, Fragment} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
//import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
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

  leftImage: {
    width: 30,
    height: 30,
  },

  rightText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

class Setting extends Component {
  render() {
   
    return (
      <View style={{backgroundColor: '#f7f6fc'}}>
        <View style={styles.blank}></View>
        <View style={styles.style}>
          <TouchableOpacity onPress={() => {
              console.log(this.props.navigation)
              this.props.navigation.goBack()
              
              }}>
                  <Image
                style={{width:30,height:30}}
                source={require('../../../images/Login/back.png')}></Image>
             {/* <AntDesign name='arrowleft' size={35} color='white'></AntDesign> */}
          </TouchableOpacity>
          <Text style={styles.contentText}>账单</Text>
          <Text style={styles.rightText}></Text>
        </View>

       
      </View>
    );
  }
}

export default Setting;
