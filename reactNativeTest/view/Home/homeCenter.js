import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {ListItem} from 'react-native-elements';
import dataSource from './dataSource';
import Swiper from './Swiper'
class ScollCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutOpacity: new Animated.Value(1),
      scrollHeight: 0,
      visible: true,
    };
    this.fadeOutAnimated = Animated.timing(this.state.fadeOutOpacity, {
      toValue: 0, //透明度动画最终值
      duration: 500, //动画时长3000毫秒
    });
  }
  handleClick = (item, index) => {
    console.log(item, index);
  };
  _startAnimated() {
    this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(0));
  }

  static getDerivedStateFromProps(nextProps, preState) {
    console.log(nextProps, preState);
    return true;
  }
  handleMineCenter = () => {
    return dataSource.map((item, index) => {
      return (
        <TouchableHighlight key={index}>
          <View>
            <ListItem
              onPress={() => this.handleClick(item, index)}
              leftAvatar={
                <Image
                  source={item.icon}
                  style={{width: 30, height: 30, borderRadius: 15}}></Image>
              }
              rightTitle={<Text style={styles.btn_text}>试读</Text>}
              title={item.content}
            />
            <Text>年底了'谈个对象'吧</Text>
            <Text>
              最近在做React
              Native的开发，作为一名java程序员，搞一搞app开发还是蛮有意思的。但是毕竟是跨平台开发，所以遇到的坑还是挺多的。因此我打算记录一下这些坑与跳坑经历，希望可以帮到和我一样的新手。
              作者：木书 链接：https://www.jianshu.com/p/4fe94716f9e8 来源：简书
              著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
            </Text>
          </View>
        </TouchableHighlight>
      );
    });
  };

  render() {
    const add_icon = require('../../images/home/add.png');
    const note_icon = require('../../images/home/note.png');
    return (
      <Fragment>
        <NavigationEvents
          onWillFocus={payload => {
            console.log('will focus', payload);
          }}
          onDidFocus={payload => {
            this.state.fadeOutOpacity.setValue(1);
            this.setState({
              visible: true,
            });
            console.log('did focus', payload);
          }}
          onWillBlur={payload => {
            console.log('will blur', payload);
          }}
          onDidBlur={payload => {
            this.setState({
              visible: false,
            });
            console.log('did blur', payload);
          }}
        />
        {this.state.visible && (
          <Fragment>
          <ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={async event => {
              {
                console.log(event.nativeEvent.contentOffset.y); //垂直滚动距离
                const scrollHeight = event.nativeEvent.contentOffset.y;
                if (scrollHeight >= 200) {
                  this._startAnimated();
                }
              }
            }}>
            <Swiper></Swiper>
            <View style={styles.mine_center}>{this.handleMineCenter()}</View>
          </ScrollView>
        

        <TouchableOpacity
          onPress={e => {
            console.log(e);
            this.props.navigation.push('ShareArticle')
          }}>
          <Animated.View
            style={{
              ...styles.fab,
              transform: [{scale: this.state.fadeOutOpacity}],
            }}>
            <Image source={add_icon} style={styles.add_icon}></Image>
            {/* <Image source={note_icon} style={styles.note_icon}></Image> */}
          </Animated.View>
        </TouchableOpacity>
        </Fragment>)}
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  mine_center: {
    backgroundColor: 'white',
  },
  cell_text: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 10,
  },
  info_image: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginLeft: 5,
  },
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
  fab: {
    width: 70,
    height: 70,
    borderRadius: 35,
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'rgb(3,127,254)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_icon: {
    width: 20,
    height: 20,
  },
  // note_icon: {
  //   width: 30,
  //   height: 30,
  // },
});
export default ScollCenter;
