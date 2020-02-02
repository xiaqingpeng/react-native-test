import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
const dataSource = [
  {
    icon: require('../../images/contentComponent/set.png'),
    content: '设置',
  },
  {
    icon: require('../../images/contentComponent/back.png'),
    content: '退出登录',
  },
  {
    icon: require('../../images/contentComponent/close.png'),
    content: '关闭',
  },
];
class DrawerFooter extends React.Component {
  handleSetting(value) {
    console.log(value);
  }
  render() {
    return (
      <View style={styles.container}>
        {dataSource.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => this.handleSetting({...item, index})}
              key={index}>
              <View key={index} style={styles.open_view}>
                {index === 1 ? (
                  <Image
                    style={{width: 28, height: 28}}
                    source={item.icon}></Image>
                ) : (
                  <Image
                    style={styles.open_view_list_image}
                    source={item.icon}></Image>
                )}

                <Text style={styles.open_view_list_text}>{item.content}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-evenly',
  },
  open_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  open_view_list_image: {
    width: 35,
    height: 35,
  },
  open_view_list_text: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
});
export default DrawerFooter;
