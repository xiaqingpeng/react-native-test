import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {View, Text} from 'native-base';
import {Button} from 'react-native-elements';
import {Col, Row, Grid} from 'react-native-easy-grid';
import asyncStorage from '../../common/asyncStorage';

class Navigation extends Component {
  state = {
    num: 5,
  };
  componentDidMount() {
    this.timer();
  }

  timer() {
    setInterval(async () => {
      this.setState(
        {
          num: this.state.num - 1,
        },
        async () => {
          let role = await asyncStorage.getData('role');
          if (this.state.num === 0) {
            clearInterval(this.timer);
            if (role === '2') {
              this.props.navigation.navigate('DrawerNavigator');
            } else {
              this.props.navigation.navigate('Login');
            }
          }
        },
      );
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.time);
  }

  render() {
    const {navigation} = this.props;
    return (
      <Grid>
        <Row style={styles.grid_top}>
          <Grid>
            <Row style={styles.grid_header_top}>
              <Button
                title={`${this.state.num}s 跳过`}
                onPress={async () => {
                  let role = await asyncStorage.getData('role');

                  if (role === '2') {
                    this.props.navigation.navigate('DrawerNavigator');
                  } else {
                    this.props.navigation.push('Login');
                  }
                }}
                color="white"
                buttonStyle={{
                  width: 80,
                  borderColor: 'white',
                  borderRadius: 8,
                  borderWidth: 1,
                  backgroundColor: 'rgba(3,127,254,0.8)',
                  position: 'absolute',
                  top: 70,
                  left: 300,
                }}></Button>
            </Row>
            <Row style={styles.grid_header_bottom}>
              <Text
                style={{
                  fontSize: 30,
                  color: 'white',
                  fontWeight: '800',
                  margin: 20,
                }}>
                深入理解react-native
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: 'white',
                  fontWeight: '800',
                  margin: 20,
                }}>
                从原理到实践
              </Text>
              <Text style={{fontSize: 20, color: 'white', margin: 20}}>
                原价39.9
              </Text>
              <View
                style={{
                  width: 150,
                  height: 40,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    color: 'rgb(3,127,254)',
                    fontWeight: '800',
                  }}>
                  今日五折
                </Text>
              </View>
            </Row>
          </Grid>
        </Row>
        <Row style={styles.grid_bottom}>
          <Col style={styles.grid_bottom_left}>
            <Text style={styles.left_title}>RN</Text>
          </Col>
          <Col style={styles.grid_bottom_right}>
            <Text style={styles.right_title}>一个帮助开发者成长的原生应用</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}
const styles = StyleSheet.create({
  grid_top: {
    backgroundColor: 'rgb(3,127,254)',
    flex: 9,
  },
  grid_header_top: {
    flex: 2,
  },
  grid_header_bottom: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },
  grid_bottom: {
    backgroundColor: 'white',
    flex: 2,
  },
  grid_bottom_left: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid_bottom_right: {
    flex: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left_title: {
    fontSize: 50,
    color: '#0380fc',
  },
  right_title: {
    fontSize: 25,
    color: '#565656',
  },
});
export default Navigation;
