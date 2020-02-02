import React, {Component} from 'react';
import {Text, View, TouchableOpacity,Image} from 'react-native';
export default class index extends Component {
  render() {
    const {style,leftImageUrl,leftImage,rightImageUrl,content,rightImage,contentText} =this.props.styleHeader
    return (
      <View style={style}>
          <TouchableOpacity
            onPress={() =>this.props.handleClick('leftBtn')}>
            <Image
              style={leftImage}
              source={leftImageUrl}
            />
          </TouchableOpacity>
          {
            content?(<Text style={contentText}>{content}</Text>):this.props.children
          }
          
          <TouchableOpacity onPress={() =>this.props.handleClick('rightBtn')}>
            <Image
              style={rightImage}
              source={rightImageUrl}
            />
          </TouchableOpacity>
      </View>
    );
  }
}
