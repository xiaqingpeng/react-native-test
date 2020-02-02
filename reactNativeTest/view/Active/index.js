import React,{Fragment} from 'react';
import {View, Text, TouchableOpacity,Dimensions,StyleSheet} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import slideData from './slideData';
const ScreenWidth = Dimensions.get('window').width;
class CarScreen extends React.Component {
  handleChangeTable = index => {
    console.log(index.i);
   

  
  };
  render() {
    return (
      <Fragment>
          <View style={styles.blank}></View>
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarUnderlineStyle={styles.lineStyle}
        scrollWithoutAnimation={true}
        tabBarBackgroundColor= 'rgb(3,127,254)'
       
        tabBarActiveTextColor="white"
        tabBarInactiveTextColor="#cccccc"
        tabBarTextStyle={{
          fontWeight: 'bold',
          fontSize: 16,
        }}
        onChangeTab={this.handleChangeTable}>
        {slideData.map((item, index) => {
          return (
            <Text style={styles.textStyle} key={index} tabLabel={item.tabLabel}>
              {item.content}
            </Text>
          );
        })}
      </ScrollableTabView>
      
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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

export default  CarScreen