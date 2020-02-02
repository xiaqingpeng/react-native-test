import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import {ListItem} from 'react-native-elements';
class ScollCenter extends Component {
    handleClick = (item, index) => {
        console.log(item, index);
      };
  handleMineCenter = () => {
    return dataSource.map((item, index) => {
      return (
        <TouchableHighlight key={index}>
          <View>
            <ListItem
              onPress={() => this.handleClick(item, index)}
              leftAvatar={<Text>{index + 1}</Text>}
              rightTitle={
                <View style={styles.btn}>
                  <Text style={styles.btn_text}>试读</Text>
                </View>
              }
              title={item.content}
              subtitle={
                <Fragment>
                  <View style={styles.sub1}>
                    <Text>{item.content}</Text>
                    <Text>{item.time}</Text>
                  </View>
                  <View style={styles.sub2}>
                    <Text>{item.num}小节.</Text>
                    <Text>{item.num}人已购买</Text>
                  </View>
                </Fragment>
              }
              bottomDivider
            />
          </View>
        </TouchableHighlight>
      );
    });
  };

  render() {
    const {navigation} = this.props;
    let item = navigation.state.params;
    return (
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View>
          <ListItem
            leftAvatar={
              <Image style={styles.left_image} source={item.icon}></Image>
            }
            title={item.content}
            subtitle={
              <Fragment>
                <View style={styles.sub1}>
                  <Text>{item.content}</Text>
                  <Text>{item.time}</Text>
                  <Image
                    style={{width: 15, height: 15}}
                    source={require('../../../images/car/other.png')}></Image>
                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../../../images/car/add.png')}></Image>
                </View>
                <View style={styles.sub2}>
                  <Text>{item.num}小节.</Text>
                  <Text>{item.num}人已购买</Text>
                </View>
              </Fragment>
            }
            bottomDivider
          />
          <ListItem
            leftAvatar={
              <Image
                style={{width: 25, height: 25}}
                source={require('../../../images/car/finish.png')}></Image>
            }
            title={`${item.num}人已购买`}
            rightTitle={
              <View style={{flexDirection: 'row'}}>
                {[1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <Image key={index}
                       style={styles.info_image}
                      source={require('../../../swiper_images/swiper4.jpg')}></Image>
                  );
                })}
              </View>
            }
            subtitle={
              <Fragment>
                <View style={styles.sub1}></View>
                <View style={styles.sub2}></View>
              </Fragment>
            }
            bottomDivider
          />
        </View>
      
        <View style={styles.mine_center}>
      
          <Text style={styles.cell_text}>小册内容</Text>
       
            {this.handleMineCenter()}</View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    mine_center:{
       backgroundColor:'white'
    },
    cell_text:{
      fontSize:20,
      fontWeight:'700',
      marginLeft:10,
      marginTop:10,
    },
    info_image:{
        width: 26, height: 26,borderRadius:13,
        marginLeft:5
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
  btn: {
    borderColor:'#ec891c',
    borderWidth:2,
    color: 'blue',
    width: 53,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text:{
      color:'#d69f59'
  }
});
export default ScollCenter;
