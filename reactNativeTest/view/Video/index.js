import React, {Component} from 'react';
import { Dimensions,StyleSheet} from 'react-native';
import Video from 'react-native-video';
const screenWidth = Dimensions.get('window').width;
class VideoCompoent extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  };
  render() {
    const  {styles,uri} =this.props
    console.log(this.props)
    return (
      <Video
        source={{uri:uri}}
        style={styles}
        controls={true}
        rate={this.state.rate} //播放速率
        paused={this.state.paused} //暂停
        volume={this.state.volume} //调节音量
        muted={this.state.muted} //控制音频是否静音
        resizeMode={this.state.resizeMode} //缩放模式
        onLoad={this.onLoad} //加载媒体并准备播放时调用的回调函数。
        onProgress={this.onProgress} //视频播放过程中每个间隔进度单位调用的回调函数
        onEnd={this.onEnd} //视频播放结束时的回调函数
        onAudioBecomingNoisy={this.onAudioBecomingNoisy} //音频变得嘈杂时的回调 - 应暂停视频
        onAudioFocusChanged={this.onAudioFocusChanged} //音频焦点丢失时的回调 - 如果焦点丢失则暂停
        repeat={false} //确定在到达结尾时是否重复播放视频。
      ></Video>
    );
  }
}

const styles=StyleSheet.create({
    backgroundVideo: {
        width:screenWidth,
        height:220
    }
})
export default VideoCompoent