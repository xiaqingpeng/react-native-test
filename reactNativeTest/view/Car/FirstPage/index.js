import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import AllTable from './allTable';
import HasBought from './hasBought';
const ScreenWidth = Dimensions.get('window').width;
class CarScreen extends React.Component {
  handleChangeTable = index => {
    console.log(index.i);
  };
  render() {
    const {navigation} = this.props;
    return (
      <>
      <View style={styles.blank}></View>
      <ScrollableTabView
        style={styles.container}
        renderTabBar={() => <ScrollableTabBar />}
        tabBarUnderlineStyle={styles.lineStyle}
        scrollWithoutAnimation={true}
        tabBarBackgroundColor="rgb(3,127,254)"
        tabBarActiveTextColor="white"
        tabBarInactiveTextColor="#cccccc"
        tabBarTextStyle={{
          fontWeight: 'bold',
          fontSize: 18,
        }}
        onChangeTab={this.handleChangeTable}>
        <AllTable tabLabel="全部" navigation={navigation}></AllTable>
        <HasBought tabLabel="已购" navigation={navigation}></HasBought>
      </ScrollableTabView>
      </>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarScreen;
