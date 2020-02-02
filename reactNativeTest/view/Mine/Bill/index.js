import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import MyBill from './myBill'
import MyStatic from './myStatic'
const ScreenWidth = Dimensions.get('window').width;
class CarScreen extends React.Component {
  handleChangeTable = index => {
    console.log(index.i);
  };
  render() {
    console.log(this.props)
    return (
    
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar />}
          // tabBarUnderlineStyle={fa}
          scrollWithoutAnimation={true}
          tabBarBackgroundColor="rgb(0,115,227)"
          tabBarActiveTextColor="white"
          tabBarInactiveTextColor="#cccccc"
          tabBarPosition='bottom'
          tabBarTextStyle={{
            fontWeight: 'bold',
            fontSize: 16,
          }}
          onChangeTab={this.handleChangeTable}>
          <MyBill {...this.props} tabLabel='账单'>
           
          </MyBill>
          <MyStatic  {...this.props} tabLabel='统计'>
            统计
          </MyStatic>
        </ScrollableTabView>
     
    );
  }
}

const styles = StyleSheet.create({

  tabs:{
    position:'absolute',
    bottom:0,
    left:0
  },
  lineStyle: {
    width: ScreenWidth / 5,
    height: 2,
    backgroundColor: 'white',
  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    marginTop: 30,
    color: 'red',
    textAlign: 'center',
  },
});

export default CarScreen;
