import React, {Component, Fragment} from 'react';
import {Text, View, StyleSheet, Image, ScrollView,TouchableOpacity,TouchableHighlight} from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import dataSource from './bought.js';
class AllTable extends Component {

  handleClick =(item,index)=>{
    console.log(item,index)
    console.log(this.props)
    this.props.navigation.push('Introduce',{...item,index})
  }
  handleMineCenter = () => {
    return dataSource.map((item, index) => {
      return (
        <TouchableHighlight>
        <View  key={index} >
          <ListItem
           onPress={
             ()=>this.handleClick(item,index)
           }
            leftAvatar={
              <Image style={styles.left_image} source={item.icon}></Image>
            }
            rightTitle={
              <View style={styles.btn}>
                <Text style={styles.btn_text}>29.8</Text>
              </View>
            }
            title={item.content}
            subtitle={
              <Fragment>
                <View style={styles.sub1}>
                  <Text>{item.content}</Text>
                  <Text>{item.time}</Text>
                </View>
                <View style={styles.sub2}>
                  <Text>{item.num}小节.</Text>
                  <Text>{item.num}人已购买</Text>
                </View>
              </Fragment>
            }
            bottomDivider
          />
        </View>
        </TouchableHighlight>
       
      );
    });
  };
  render() {
    return (
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.mine_center}>{this.handleMineCenter()}</View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
 
 
  
  left_image: {
    width: 50,
    height: 75,
  },

  rightTitle: {
    flexDirection: 'row',
  },
  sub1: {
    flexDirection: 'row',
  },
  sub2: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor:'#f4f6fe',
    color: 'blue',
    width: 110,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  btn_text: {
    color: '#28738b',
    fontWeight:'bold'
  },
});
export default AllTable;
