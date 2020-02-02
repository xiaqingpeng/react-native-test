import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import TabNavigatorView from '../../Navigation/TabNavigatorView';
const home = require('../../images/drawerItem/home.png');
const home_selected = require('../../images/drawerItem/home_selected.png');
class MainNavigation extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      drawerLabel: '首页',
      drawerIcon: ({tintColor, focused}) => {
        console.log(tintColor, focused);
        if (!focused) {
          return <Image style={styles.home_image} source={home}></Image>;
        } else {
          return (
            <Image style={styles.home_image} source={home_selected}></Image>
          );
        }
      },
    };
  };
  render() {
    return <TabNavigatorView></TabNavigatorView>;
  }
}
const styles = StyleSheet.create({
  home_image: {
    width: 28,
    height: 28,
  },
});
export default MainNavigation;
