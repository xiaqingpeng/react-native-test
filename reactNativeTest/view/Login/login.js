import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  AlertIOS,
  Alert,
  AsyncStorage,
} from 'react-native';
import {Container, Header, Item, Content, Button, Spinner} from 'native-base';
// import AsyncStorage from '@react-native-community/async-storage';
import asyncStorage from '../../common/asyncStorage';
import {Avatar, Divider} from 'react-native-elements';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {setLogin} from '../../redux/action/create-action';
const screenWidth = Dimensions.get('window').width;
const dataSource = [
  {
    icon: require('../../images/Login/webo.png'),
    name: '微博',
  },
  {
    icon: require('../../images/Login/wechat.png'),
    name: '微信',
  },
  {
    icon: require('../../images/Login/github.png'),
    name: 'Github',
  },
];
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      spinner: false,
    };
  }
  componentDidMount() {}

  handleOtherLogin = () => {
    return dataSource.map((item, index) => {
      return (
        <View key={index} style={styles.wayContent}>
          {index === dataSource.length - 1 ? (
            <Image
              source={item.icon}
              style={{width: 48, height: 48, marginBottom: 30}}></Image>
          ) : (
            <Image source={item.icon} style={styles.wayImage}></Image>
          )}

          <Text style={styles.wayText}>{item.name}</Text>
        </View>
      );
    });
  };
  render() {
    const {username, password, spinner} = this.state;
    return (
      <Fragment>
        <View style={styles.blank}></View>
        <Container style={styles.container}>
          <Content>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Image
                style={styles.backImage}
                source={require('../../images/Login/back.png')}></Image>
            </TouchableOpacity>

            <View style={styles.headerTitle}>
              <View style={styles.headerCenter}>
                <Avatar
                  size="large"
                  rounded
                  source={require('../../swiper_images/swiper1.jpg')}
                  onPress={() => {}}
                  activeOpacity={0.7}
                />
              </View>
            </View>
            <View style={styles.login_view}>
              <View style={styles.login_content}>
                <TextInput
                  placeholder="用户名"
                  placeholderTextColor="rgba(0,0,0,0.7)"
                  style={styles.TextInput}
                  onChangeText={text => {
                    console.log(text);
                    this.setState({
                      username: text,
                    });
                  }}
                />

                <TextInput
                  placeholder="密码"
                  placeholderTextColor="rgba(0,0,0,0.7)"
                  style={styles.TextInput}
                  onChangeText={text => {
                    console.log(text);
                    this.setState({
                      password: text,
                    });
                  }}
                />
              </View>

              <Button
                primary
                style={styles.ViewText}
                onPress={async() => {
                  if (!username) {
                    Alert.alert('请输入用户名');
                    return;
                  }
                  if (username!=='xia') {
                    Alert.alert('用户名不正确');
                    return;
                  }
                  if (password!=='123') {
                    Alert.alert('密码不正确');
                    return;
                  }

                  if (!password) {
                    Alert.alert('请输入密码');
                    return;
                  }
               
                  console.log(this.state);

                 await this.setState({
                    spinner:true
                 })
                  this.props.setLogin(this.state, res => {
                    console.log(res);
                    console.log(this.props);
                    if (res.user_id) {
                       this.setState({
                        spinner:false
                       },()=>{
                          this.props.navigation.push('DrawerNavigator');
                       })
                     
                    }
                  });
                }}>
                <Text style={styles.login_keyword}>登录</Text>
              </Button>

              {spinner && <Spinner color="white" />}

              <View style={styles.reLogin}>
                <Text style={styles.reLoginText}> 忘记密码?</Text>
                <Text style={styles.reLoginText}> 注册账号</Text>
              </View>
              <View style={styles.otherLogin}>
                <View style={styles.container_view}>
                  <Divider style={styles.divider} />
                </View>
                <Text style={styles.otherLoginText}> 其他账号登录</Text>
                <View style={styles.container_view}>
                  <Divider style={styles.divider} />
                </View>
              </View>
              <View style={styles.otherWay}>{this.handleOtherLogin()}</View>
            </View>
          </Content>
        </Container>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(0,115,227)',
    width: '100%',
    height: 45,
  },
  container_view: {
    flex: 1,
    flexDirection: 'column',
  },
  divider: {
    marginTop: 12,
    height: 1,
    backgroundColor: 'white',
  },
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
  container: {
    backgroundColor: '#0080fe',
  },
  headerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  backImage: {
    width: 30,
    height: 30,
    marginLeft: (screenWidth * 0.1) / 2,
  },
  login_view: {
    width: screenWidth * 0.9,
    marginLeft: (screenWidth * 0.1) / 2,
  },
  login_content: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewText: {
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#016ad8',
    height: 70,
  },
  login_keyword: {
    color: 'white',
    fontSize: 20,
  },
  reLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  reLoginText: {
    fontSize: 20,
    color: 'white',
  },
  otherLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  otherLoginText: {
    fontSize: 20,
    color: '#004cb6',
  },
  otherWay: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wayContent: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wayImage: {
    width: 58,
    height: 58,
    marginBottom: 20,
  },
  wayText: {
    color: 'white',
  },
});
const mapStateToProps = state => {
  console.log(state);
  if (state.handleReducer.userInfo.role) {
    console.log(state.handleReducer.userInfo.role);
    const role = state.handleReducer.userInfo.role;
    console.log(asyncStorage);
    asyncStorage.saveData('role', role);
  }

  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    setLogin: (params, callback) => {
      dispatch(setLogin(params, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
