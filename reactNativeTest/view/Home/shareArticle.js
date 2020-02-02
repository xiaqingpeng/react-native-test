import React, {Component, Fragment} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
const leftIcon = require('../../images/home/back.png');
import { setCompanyList,setHomeList} from '../../redux/action/create-action';
import { getBannerList } from '../../utils/index'
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

class shareArticle extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.blank}></View>
        <View style={styles.style}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image style={styles.leftImage} source={leftIcon} />
          </TouchableOpacity>
          <Text style={styles.contentText}>分享文章</Text>
          <TouchableOpacity onPress={() => this.props.handleClick('rightBtn')}>
            <Text style={styles.rightText}>发布</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="redux"
          onPress={() => {
            // const count = this.props.payload+1
            // console.log(count)
             this.props.setHomeList();
          
          
          }}></Button>
          <View>
            <Text>
              {this.props.payload}
            </Text>
          </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    payload:state.handleReducer.payload
  };
};
const mapDispatchToProps = dispatch => {
  return {
  
    setCompanyList: params => {
      dispatch(setCompanyList(params));
    },
    setHomeList: params => {
      dispatch(setHomeList(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(shareArticle);
