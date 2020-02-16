import React, { Component, Fragment } from 'react'
import { Text, View ,Dimensions,StyleSheet,TouchableOpacity,Image} from 'react-native'
import {Header} from 'react-native-elements';
import { WebView  } from 'react-native-webview';

import * as Progress from 'react-native-progress';
const screenWidth = Dimensions.get('window').width;

 class LinkItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          progress: 0,
          loading: true,
        };
      }
      componentDidMount(){
        this.animate()
      }
      animate(){
        let progress = 0;
        setInterval(() => {
          progress += Math.random() / 10;
          if (progress > 1) {
            progress = 0.98;
          }
          this.setState({ progress })
        }, 100);
      }
    _success= async(result)=>{
       
        await this.setState({
            progress:1
        })
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },50)
    }
    handList=(id)=>{

        switch (id) {
            case 1:
                return    <WebView  onLoad ={this._success} source={{uri:'https://www.tmall.com/'}} />
                break;
            case 2:
                return    <WebView  onLoad ={this._success} source={{uri:'https://www.baidu.cn/'}} />
                break;
            case 3:
                return    <WebView  onLoad ={this._success} source={{uri:'https://m.amap.com'}} />
                break;
        
            default:
                return null
                break;
        }
        return 
    }
    goPosition=(navigation)=>{
        console.log(navigation)
        navigation.push('Position')
    }
    render() {
       
        const  {navigation} = this.props
        const  {params} =navigation.state
        const {loading} =this.state
        return <Fragment>
            
             <Header
          containerStyle={{
            backgroundColor:'rgb(3,127,254)',
          }}
          leftComponent={
            <TouchableOpacity onPress={() => {
              console.log(this.props.navigation)
              this.props.navigation.goBack()
              
              }}>
                  <Image
                style={{width:30,height:30}}
                source={require('../../images/home/back.png')}></Image>
            
          </TouchableOpacity>
          }
          centerComponent={
          <Text style={styles.contentText}>{params.content}</Text>
          }
          rightComponent={
              <TouchableOpacity onPress={()=>this.goPosition(navigation)}>
              <View style={styles.position}>
                   <Image
                style={{width:25,height:25}}
                source={require('../../images/home/position.png')}
                >
                </Image>
                  <Text style={{...styles.contentText,marginLeft:8}}>
                      深圳
                  </Text>
              </View>
              </TouchableOpacity>
          }
        />
      
      {loading && (
            <Progress.Bar  progress={this.state.progress} width={screenWidth} borderRadius={0} />
        )}
         {this.handList(params.id)}
      
       
        </Fragment>
       
    }
}

const  styles= StyleSheet.create({
    position:{
       flexDirection:'row',
       alignItems: 'center',
    },
    activityIndicator:{
     marginTop:300,
    
    

    },
    contentText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
})
export default LinkItem
