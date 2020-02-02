import React, {Component,Fragment} from 'react';
import {Text, View, StyleSheet, ScrollView,RefreshControl} from 'react-native';
import ListItemChild from './ListItem'
class Detail extends Component {
  constructor(props) {
    super(props)
    this.state={
      loading:false,
      loaded:0,
      ListItem:Array.from(new Array(20)).map((item,index)=>{
        let flag = (index)%4+1
        return {
          key:index+1,
          title:`我是数据${index}`,
          isShow:index%2,
         
        }
      })
    }
  }
  _onRefresh=()=>{
    //开启loading
    this.setState((state, props) => { return { 
      loading:true,

     }})

     // 下拉请求数据

     setTimeout(() => {
      const newList =Array.from(new Array(5)).map((item,index)=>{
        let flag = (index)%4+1
        return {
          key:index+1,
          title:`我是下请求回来的数据${index+this.state.loaded}`,
          isShow:index%2
        }
      })
      this.setState({
        ListItem:[...newList,...this.state.ListItem],
        loaded:this.state.loaded+5
      })

     }, 100);
     //关闭loading
     this.setState((state, props) => { return { 
      loading:false,

     }})
    
  }
  render() {
    let { ListItem ,loading,loaded} =this.state
    return (
      <Fragment>
      <View style={styles.detailHeader}>
         <Text style={styles.nav}>导航部分</Text>
      </View>
      <ScrollView  showsVerticalScrollIndicator={false} refreshControl={
          <RefreshControl
          title={'下拉刷新'}
          refreshing={loading}
          colors={['rgb(255, 176, 0)',"#ffb100"]}
          onRefresh={
    
            this._onRefresh
          }
          onBottom={()=>{
             console.log(7777)
          }}
        />
      }>
    
    
      {ListItem.map((item,index)=>{
        return <ListItemChild ListItem={item} key={index}></ListItemChild>
      })
      }
      
      </ScrollView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  containerDetail: {},
  detailHeader:{
    height:60,
    backgroundColor:'white',
    justifyContent: 'center',
   
  },
  nav:{
    fontSize:20,
    marginLeft:20
  },
  HeaderDetail: {
    height: 200,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CenterDetail: {
    height: 1600,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FooterDetail: {
    height: 400,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Detail;
