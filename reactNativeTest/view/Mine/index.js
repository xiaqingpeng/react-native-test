import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
const screenWidth = Dimensions.get('window').width;
import dataSource from './listData';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default class Mine extends Component {
  static navigationOptions = {
    title: '我的',
    headerStyle: {
      backgroundColor: 'rgb(0,115,227)',
      height: 107,
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 20,
      backgroundColor: 'rgb(3,127,254)',
      width: screenWidth,
      height: 64,
      lineHeight: 64,
      textAlign: 'center',
    },
  };
  handleMineCenter = () => {
    return dataSource.map((item, index) => {
      return (
        <TouchableOpacity
          onPress={() => this.handleLogin({...item, index: index})}
          key={index}>
          <View>
            <ListItem
              leftAvatar={
                <Image style={styles.left_image} source={item.icon}></Image>
              }
              rightAvatar={null}
              rightTitle={
                <View style={styles.rightTitle}>
                  <Text>{item.num}</Text>
                  <Text>{item.unit}</Text>
                </View>
              }
              title={null}
              subtitle={item.content}
              bottomDivider
            />
          </View>
        </TouchableOpacity>
      );
    });
  };
  handleLogin = props => {
    console.log(props);
    if (!props) return this.props.navigation.push('Login');
    if (props.content === '我的账单') {
      this.props.navigation.push('Bill');
    } else if (props.content === '设置') {
      this.props.navigation.push('Setting');
    } else {
      this.props.navigation.push('Login');
    }
  };
  render() {
    return (
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.mine_container}>
          <TouchableOpacity onPress={() => this.handleLogin()}>
            <View style={styles.header}>
              <ListItem
                leftAvatar={
                  <View  style={styles.header_left_image} >
                     {/* <SimpleLineIcons name='user' color="white"  size={30}></SimpleLineIcons> */}
                  </View>
                 
                }
                rightAvatar={
                  null
                  // <SimpleLineIcons name='arrow-right'  size={22}></SimpleLineIcons>
                }
                title={'登录/注册'}
                subtitle={<Text>添加职位@添加公司</Text>}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.mine_center}>{this.handleMineCenter()}</View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mine_container: {
    backgroundColor: '#cccccc',
  },
  header: {
    marginBottom: 5,
  },
  header_left_image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor:'#8a8a8a',
    justifyContent:'center',
    alignItems:'center'
  },

  left_image: {
    width: 30,
    height: 30,
  },

  rightTitle: {
    flexDirection: 'row',
  },
});
