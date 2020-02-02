import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import {List} from 'native-base';
import {Button} from 'react-native-elements';
import asyncStorage from '../common/asyncStorage';
const dataSource = [
  require('../swiper_images/swiper1.jpg'),
  require('../swiper_images/swiper2.jpg'),
  require('../swiper_images/swiper3.jpg'),
  require('../swiper_images/swiper4.jpg'),
];
const swiperWidth = Dimensions.get('window').width;
const swiperHeight = Dimensions.get('window').height;
const ListArr = ['初级体验', '快速上手', '轻松掌握', '成为大神'];
class SwiperList extends Component {
  state = {
    showsPagination: true,
  };
  handleSwiper = navigation => {
    return dataSource.map((item, index) => {
      return (
        <View key={index}>
          <Image style={styles.swiper_images} source={item}></Image>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.welcome}>
              欢迎来到react-native,你将是{ListArr[index]}
            </Text>
            {index === ListArr.length - 1 && (
              <Button
                title="开始体验"
                buttonStyle={{width: 120}}
                type="outline"
                onPress={async () => {
                  let role = await asyncStorage.getData('role');
                  if (role === '2') {
                    navigation.navigate('DrawerNavigator');
                  } else {
                    navigation.navigate('Login');
                  }
                }}
              />
            )}
          </View>
        </View>
      );
    });
  };
  render() {
    const {navigation} = this.props;
    const dot = {
      backgroundColor: 'rgba(255,0,0,0.8)',
      width: 12,
      height: 12,
      borderRadius: 6,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    };
    const activeDot = {
      backgroundColor: 'cyan',
      width: 14,
      height: 14,
      borderRadius: 7,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    };
    return (
      <View style={styles.HeaderHome}>
        <Swiper
          style={styles.container}
          showsButtons={false}
          autoplay={false}
          loop={false}
          onMomentumScrollEnd={(e, state, context) =>{
            // console.log(e, state.index, context)
          }
           
          }
          dot={<View style={dot} />}
          activeDot={<View style={activeDot} />}
          paginationStyle={{
            bottom: 25,
            left: 0,
          }}
          showsPagination={this.state.showsPagination}
          onIndexChanged={index => {
        
            this.setState({
              showsPagination: index !== dataSource.length - 1,
            });
          }}>
          {this.handleSwiper(navigation)}
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  HeaderHome: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CenterHome: {
    height: 600,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    textAlign: 'center',
    margin: 20,
  },
  swiper_images: {
    width: '100%',
    height: 600,
  },
});
export default SwiperList;
