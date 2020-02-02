import React from 'react';
import {View, Text, TouchableOpacity,Button} from 'react-native';
import Request from './request'


class Detail extends React.Component {
  
  static navigationOptions ={
    title:'详情页',
    headerStyle:{
        backgroundColor:'cyan',
       
       
        
    },
    headerTintColor:'purple',
    headerTitleStyle:{
        fontSize:20,
       
    },
    
    headerRight:()=>{
        return <Button title ='看一看' onPress={() => alert('扫一扫')}> </Button>;
    }
}

  render() {
    const {navigation} = this.props
 
    
    return (
      <>
    
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
       
    
        <TouchableOpacity
          onPress={() => {
            console.log(this.props);
            this.props.navigation.goBack()
          }}>
          <Text>返回上一级</Text>
         
        </TouchableOpacity>
      
      </View>
      <Request handleSelf={this.props.navigation}></Request>
      </>
    );
  }
}

export default  Detail