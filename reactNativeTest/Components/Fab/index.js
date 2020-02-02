import React, {Component, Fragment} from 'react';
import {Text, View, StyleSheet, Image,Animated} from 'react-native';
import { Button } from 'react-native-elements'

class FabCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeOutOpacity: new Animated.Value(1)
    };
    this.fadeOutAnimated = Animated.timing(
      this.state.fadeOutOpacity,
      {
          toValue: 0,  //透明度动画最终值
          duration: 500,   //动画时长3000毫秒
      }
  );
  }
  
  _startAnimated() {
    this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(0));
  }
  
 
  static getDerivedStateFromProps (nextProps,preState){
    console.log(nextProps,preState)
    return true
  }
 
 
  
  render() {
    console.log(this.props);
    const  add_icon =require('../../images/home/add.png')
    const  note_icon =require('../../images/home/note.png')
    const {scrollHeight} = this.props;
    return (
      <Fragment>
         <Animated.View style={{...styles.fab,transform: [{scale:this.state.fadeOutOpacity}]}}>
            {/* <Image source={add_icon} style={styles.add_icon}></Image> */}
            <Image source={note_icon} style={styles.note_icon}></Image>
         </Animated.View>
         <Button title="变化" onPress={()=>{
              this._startAnimated()
         }}></Button>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    width: 70,
    height: 70,
    borderRadius:35,
    position: 'absolute',
    right:20,
    bottom:20,
    backgroundColor: 'rgb(3,127,254)',
    justifyContent: 'center',
    alignItems:'center'
  },
  add_icon:{
      width:20,
      height:20
  },
  note_icon:{
      width:30,
      height:30
  }
});
export default FabCircle;
