import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const dataSource = [
  {
    icon: require('../../images/contentComponent/clean.png'),
    content: '扫一扫',
  },
  {
    icon: require('../../images/contentComponent/code.png'),
    content: '我的二维码',
  },
  {
    icon: require('../../images/contentComponent/my.png'),
    content: '我的好友',
  },
  {
    icon: require('../../images/contentComponent/car.png'),
    content: '驾驶模式',
  },
];
const music = require('../../images/contentComponent/music.png');
const tool = require('../../images/contentComponent/tool.png');
class DrawerHeader extends React.Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          {dataSource.map((item, index) => {
            return (
              <View key={index} style={styles.open_view}>
                <View style={styles.open_view_list}>
                  <Image
                    style={
                      index === 0
                        ? styles.open_view_list_image2
                        : styles.open_view_list_image1
                    }
                    source={item.icon}></Image>
                </View>
                <Text style={styles.open_view_list_text}>{item.content}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.music_tool}>
          <View style={styles.music_tool_view}>
            <Image source={music} style={styles.music_Image}></Image>
            <Text style={styles.music_tool_text}>听歌识曲</Text>
          </View>
          <View style={styles.music_tool_view}>
          <Image source={tool} style={styles.tool_Image}></Image>
            <Text style={styles.music_tool_text}>音乐工具</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 50,
    justifyContent: 'space-evenly',
  },
  open_view: {
    alignItems: 'center',
  },
  open_view_list: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  open_view_list_image1: {
    width: 35,
    height: 35,
  },
  open_view_list_image2: {
    width: 25,
    height: 25,
  },
  open_view_list_text: {
    fontSize: 16,
    color: 'black',
    marginTop: 20,
  },
  music_tool:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:30,
    paddingRight:30,
    paddingTop:20,
    paddingBottom:20,
  },
  music_tool_view:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:10,
    padding:10,
  },
  music_Image:{
    width:30,
    height:30,
  },
  tool_Image:{
    width:40,
    height:40,
   
  },
  music_tool_text:{
    marginLeft:10,
    fontSize:18,
    fontWeight:'bold'
  }
});
export default DrawerHeader;
