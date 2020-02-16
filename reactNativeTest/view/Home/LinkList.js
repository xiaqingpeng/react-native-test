import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity 
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
class LinkList extends Component {
  _onPress=(item)=>{
      console.log(item)
      console.log(this.props)
      this.props.navigation.push('LinkItem',item)
  }
  render() {
    const dataSource = [
      {
        icon: require('../../images/home/tianmao.png'),
        content: '天猫',
        id:1
      },
      {
        icon: require('../../images/home/baidu.png'),
        content: '百度',
        id:2
      },
      {
        icon: require('../../images/home/map.png'),
        content: '高德地图',
        id:3
      },
      {
        icon: require('../../images/home/city.png'),
        content: '城市服务',
        id:4
      },
      {
        icon: require('../../images/home/express.png'),
        content: '我的快递',
        id:5
      },
      {
        icon: require('../../images/home/taoTicket.png'),
        content: '淘票票',
        id:6
      },
      {
        icon: require('../../images/home/cost.png'),
        content: '充值',
        id:7
      },

      {
        icon: require('../../images/home/more.png'),
        content: '更多',
        id:8
      },
    ];
    return (
      <View style={styles.view_container}>
        <FlatList
          data={dataSource}
          horizontal={false}
          numColumns={4}
          renderItem={({item, index}) => {
            return (
            <TouchableOpacity onPress={()=>this._onPress(item)}>
              <View
                style={{
                  ...styles.view_box,
                  marginLeft: [0, 4].includes(index)
                    ? 0
                    : (screenWidth - 40 - 70 * 4) / 3,
                }}>
                <Image style={styles.view_image} source={item.icon}></Image>
                <Text style={styles.view_text}>{item.content}</Text>
              </View>
            </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_container: {
    padding: 20,
  },
  view_box: {
    width: 70,
    height: 70,

    flexDirection: 'column',

    alignItems: 'center',
  },
  view_image: {
    width: 35,
    height: 35,
  },
  view_text: {
    marginTop: 8,
  },
});



export default LinkList;
