import React, {Component, Fragment} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import asyncStorage from '../../common/asyncStorage'
const leftIcon = require('../../images/mine/back.png');

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
    const setList = [
      {leftText: '邮箱', rightText: '未设置'},
      {leftText: '手机号', rightText: '17304472875'},
      {leftText: '修改账户密码', rightText: ''},
      {leftText: '绑定新浪微博', rightText: '未设置'},
      {leftText: '绑定微信', rightText: '绑定Github'},
      {leftText: '清除缓层', rightText: '0B'},
      {leftText: '推送消息设置', rightText: ''},
      {leftText: '移动网络下首页不显示图片', rightText: ''},
      {leftText: '自动检测粘贴板快速分享', rightText: ''},
      {leftText: '关于', rightText: ''},
    ];
    const blankStyle = {
      marginBottom: 8,
    };
    return (
      <View style={{backgroundColor: '#f7f6fc'}}>
        <View style={styles.blank}></View>
        <View style={styles.style}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.leftImage} source={leftIcon} />
          </TouchableOpacity>
          <Text style={styles.contentText}>设置</Text>
          <Text style={styles.rightText}></Text>
        </View>

        <View>
          {setList.map((item, index) => {
            return (
              <ListItem
                key={index}
                leftAvatar={<Text>{item.leftText}</Text>}
                rightAvatar={null}
                rightTitle={<Text>{item.rightText}</Text>}
                title={null}
                subtitle={null}
                bottomDivider={![2, 8, 9].includes(index)}
                style={[2, 8, 9].includes(index) && blankStyle}
              />
            );
          })}
          <TouchableOpacity onPress={async()=>{
            await asyncStorage.removeData('role')
            this.props.navigation.push('Mine')
          }}>
          <Text
            style={{
              textAlign: 'center',
              backgroundColor: 'white',
              height: 45,
              lineHeight: 45,
              color: 'red',
            }}>
            退出登录
          </Text>
          </TouchableOpacity>
         
          <Text
            style={{
              textAlign: 'center',
              height: 50,
              lineHeight: 50,
              backgroundColor: '#f7f6fc',
            }}>
            掘金5.9.1.juejin.im
          </Text>
        </View>
      </View>
    );
  }
}

export default Setting;
