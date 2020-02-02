import React, {Component} from 'react';
import {View, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';
import {
  Container,
  Text,
  Button,
  Card,
  CardItem,
  Content,
  ListItem,
  List,
  Icon, Fab
} from 'native-base';

import axios from 'axios'

class RequestList  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [],
      active: false
    };
  }
  async getList() {
   await axios
      .get(
        'https://dumall.baidu.com/api/products/spu_skus/v3?timestamp=1578494194516&spuNo=SPU4302690847&channelId=0&platformId=2',
      )

      .then(async (result )=> {
       console.log(result.data.data);
       await this.setState((state, props) => {
          return {
            listItem: result.data.data,
          };
        });

        // 网络请求成功，处理请求到的数据
      })
      .catch(error => {
        // 网络请求失败，处理错误信息
      });
  }
  handleListItem=(listData)=>{
    if(listData.length){
     return  listData[0].map((item, index) => {
        return (
          <Card>
              <CardItem header>
                   <Text>{item.skuDesc}</Text>
              </CardItem>
              <CardItem>
              <Text>{item.skuName}</Text>
              </CardItem>
              <CardItem footer>
              <Text>{item.price}</Text>
              </CardItem>
           </Card>
        );
      })
    }else{
      return <Text></Text>
    }
   
  }
 
  handleClick=()=>{
     
    this.getList();
  }
  componentDidMount() {
    this.getList();
  }

  render() {
    let listData = this.state.listItem;
    console.log(listData);
    return (
      <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.containerHome}>
          <View style={styles.HeaderHome}>
            
          </View>
          <Button title='登录拦截' onPress={()=>{
               console.log(this.props)
               this.props.handleSelf.navigate('Login')
             }}></Button>
          <View style={styles.CenterHome}>
            <List>
              { this.handleListItem(listData)}
              
              
            </List>
          </View>
          <View style={styles.FooterHome}>
           
            <Button primary style={styles.btn_button} >
                    <Text style={styles.btn_text}>确定</Text>
            </Button>
            <Button danger style={styles.btn_button}>
              <Text style={styles.btn_text}>删除</Text>
            </Button>
            <Button bordered style={styles.btn_button}>
              <Text style={styles.btn_cancer}>取消</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  containerHome: {},
  HeaderHome: {
    height: 200,

    // alignItems: 'center',
    // justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  CenterHome: {
   
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  FooterHome: {
    height: 400,

    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_button: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  btn_text: {
    color: 'white',
    fontSize: 20,
  },
  btn_cancer: {
    color: 'cyan',
    fontSize: 20,
  },
});
export default RequestList;
