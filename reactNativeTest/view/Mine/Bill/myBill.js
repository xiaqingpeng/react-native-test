import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Header} from 'react-native-elements';
import * as Progress from 'react-native-progress';
const screenWidth = Dimensions.get('window').width;
import {getBannerList} from '../../../utils/index';
import axios from 'axios';
import request from '../../../utils/http';
class Setting extends Component {
  componentDidMount() {}
 
  render() {
    return (
      <Fragment>
        <View>
          <Header
            containerStyle={{
              backgroundColor: 'rgb(3,127,254)',
            }}
            leftComponent={
              <TouchableOpacity
                onPress={() => {
                  console.log(this.props.navigation);
                  this.props.navigation.goBack();
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../../images/Login/back.png')}></Image>
              </TouchableOpacity>
            }
            centerComponent={<Text style={styles.contentText}>账单</Text>}
            rightComponent={null}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
          
          }}>
          <Text>请求</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
  style: {
    height: 70,
    backgroundColor: 'rgb(3,127,254)',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  leftImage: {
    width: 30,
    height: 30,
  },

  rightText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Setting;
