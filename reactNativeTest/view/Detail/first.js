import React, {Component, Fragment} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      
      </View>
    );
  }
}

class ActiveScreen extends Component {
  render() {
    return (
      <View>
        <Text> ActiveScreen </Text>
      </View>
    );
  }
}
class DetailScreen extends Component {
  render() {
    return (
      <View>
        <Text> DetailScreen </Text>
      </View>
    );
  }
}
class CarScreen extends Component {
  render() {
    return (
      <View>
        <Text> CarScreen </Text>
      </View>
    );
  }
}
class MineScreen extends Component {
  render() {
    return (
      <View>
        <Text> MineScreen </Text>
      </View>
    );
  }
}

const TopNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Active: {
      screen: ActiveScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
    Car: {
      screen: CarScreen,
    },
    Mine: {
      screen: MineScreen,
    },
  },
  {
    tabBarPosition: 'top', //标签栏在屏幕顶部还是底部
    // swipeEnabled:true,
    // animationEnabled: true, //标签切换是否有动画效果
    tabBarOptions: {
      activeTintColor: 'white', //标签栏激活字体颜色
      inactiveTintColor: '#cccccc', //标签栏未激活字体颜色
      // showLabel: true, //是否显示标签栏
      labelStyle: {fontSize: 16}, //标签样式(可设置字体大小等)
      // showIcon: true, //是否显示标签栏上图标
      //scrollEnabled: true, //是否可以滚动标签栏目(当tab总数超过一屏)
      indicatorStyle: {height: 5, backgroundColor: 'white'}, //指示器样式 height：0则不显示
      style: {}, //设置整个tabbar样式(背景颜色等)
      tabStyle: {backgroundColor: 'rgb(3,127,254)', height: 60}, //设置单个tabbar样式
    },
  },
);

const TopNavigation = createAppContainer(TopNavigator);

class Detail extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.blank}></View>
        <TopNavigation></TopNavigation>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
});

export default Detail;
