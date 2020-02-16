import React, {Component, useEffect, Fragment} from 'react';
import {Text, View} from 'react-native';
import Video from '../../Video';
import {NavigationEvents} from 'react-navigation';



export default class consult extends Component {
 
  render() {
    return (
      <Fragment>
        <NavigationEvents
          onWillFocus={payload => {
            console.log('will focus', payload);
          }}
          onDidFocus={payload => {
            console.log('did focus', payload);
          }}
          onWillBlur={payload => {
            console.log('will blur', payload);
          }}
          onDidBlur={payload => {
            console.log('did blur', payload);
          }}>
          {' '}
        </NavigationEvents>
        <View>
          <View style={{padding: 20}}>
            <Video
              styles={{width: '100%', height: 200}}
              uri={
                'http://vfx.mtime.cn/Video/2019/03/21/mp4/190321153853126488.mp4'
              }></Video>
          </View>
        </View>
      </Fragment>
    );
  }
}
