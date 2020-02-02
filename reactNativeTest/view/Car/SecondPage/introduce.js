import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import native from 'react-native';
import {ListItem, Button} from 'react-native-elements';
import {Toast, Spinner} from 'native-base';
import BottomDialog from '../../../Components/Dialog/BottomDialog';
import Header from '../../../Components/Header/index';
import friendsData from './friendsData';
import ScollCenter from './scollCenter';
const leftIcon = require('../../../images/car/back.png');
const rightIcon = require('../../../images/car/share.png');
class Introduce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:false,
      visibleBuy: false,
    };
  }
  handleHeaderClick = e => {
    console.log(e);
    if (e === 'leftBtn') {
      this.props.navigation.goBack();
    } else if (e === 'rightBtn') {
      console.log('等会');
      this.popActionBuy()
    } else {
      console.log('不跳');
    }
  };
  popActionBuy() {
    console.log('left');
    this.setState({
      visibleBuy: true,
    });
  }
  popActionRead() {
    this.setState({
      visible:true
    });
  }
  render() {
    const {navigation} = this.props;
    const {content} = navigation.state.params;
    const {visible,visibleBuy} = this.state;
    const styleHeader = {
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
      leftImageUrl: leftIcon,
      leftImage: {
        width: 30,
        height: 30,
      },
      rightImageUrl: rightIcon,
      content: `${content}`,
      rightImage: {
        width: 30,
        height: 30,
      },
    };
    return (
      <Fragment>
        <View style={styles.blank}></View>
        <Header
          styleHeader={styleHeader}
          handleClick={e => this.handleHeaderClick(e)}></Header>
        <ScollCenter navigation={this.props.navigation}></ScollCenter>
        <View style={styles.bottom_btn} >
          <Fragment>
            <Button
             
              title="试读"
              buttonStyle={{borderColor:'#1b7bef',borderWidth:2,width:170}}
              type='outline'
              onPress={() =>{
                console.log(666)
              } }></Button>
          </Fragment>

          <Button
             title="购买29.8"
            buttonStyle={{borderColor:'#1b7bef',borderWidth:2,width:230}}
            onPress={() =>this.popActionRead()}></Button>
        </View>
        {visibleBuy && (
          <BottomDialog
            handleOk={props => {
              console.log(props);
            }}
            handleCancel={props => {
              console.log(props);
            }}
            visible={visibleBuy}
            footer={false}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {friendsData.map((item, index) => {
                return (
                  <View key={index} style={styles.open_view}>
                    <View
                      style={{
                        ...styles.open_view_list,
                        backgroundColor: `${item.backgroundColor}`,
                      }}>
                      {[1,3,5].includes(index+1)? (
                        <Image
                          style={styles.open_view_list_image1}
                          source={item.icon}></Image>
                      ) : (
                        <Image
                          style={styles.open_view_list_image2}
                          source={item.icon}></Image>
                      )}
                    </View>
                    <Text style={styles.open_view_list_text}>
                      {item.content}
                    </Text>
                  </View>
                );
              })}
            
            </View>
            <Button title='取消' type='clear' titleStyle={{color:'#767676'}}
            
            onPress={()=>{
              this.setState({
                visibleBuy:false
              })
            }}
            >
  
            </Button>
          </BottomDialog>
        )}
        {visible && (
          <BottomDialog
            handleOk={props => {
              console.log(props);
            }}
            handleCancel={props => {
              console.log(props);
            }}
            visible={visible}
            footer={false}>
            <View>
              <Text style={{fontSize: 18}}>大厂H5开发实战手册</Text>
            </View>
            <View style={styles.listView}>
              <Text>支付总额</Text>
              <Text>19.9</Text>
            </View>
            <View style={styles.listView}>
              <Text>支付方式</Text>
              <Text>微信支付</Text>
            </View>
            <View style={styles.listView}>
              <Text>优惠方式</Text>
              <Text>输入优惠码</Text>
            </View>
            <Button
              title="确认支付"
              onPress={() => {
                console.log('支付成功');
                this.setState({
                  visible: false,
                });
              }}></Button>
          </BottomDialog>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  blank: {
    height: 30,
    backgroundColor: 'rgb(0,115,227)',
  },
  left_header_image: {
    width: 10,
    height: 10,
  },
  right_header_image: {
    width: 20,
    height: 20,
  },
  left_image: {
    width: 50,
    height: 75,
  },
  bottom_btn:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingTop:5,
    paddingBottom:5,
    borderWidth:1,
    borderColor:'#767676'
  },
  listView: {
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  open_view: {
    alignItems: 'center',
    width: '20%',
  },
  open_view_list: {
    backgroundColor: 'pink',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  open_view_list_image1: {
    width: 40,
    height: 40,
  },
  open_view_list_image2: {
    width: 30,
    height: 30,
  },
  open_view_list_text: {
    fontSize: 16,
    color: '#767676',
    marginTop: 5,
    marginBottom: 5,
  },
});
export default Introduce;
