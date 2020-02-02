import React, {Component, Fragment} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import { Button } from 'react-native-elements'
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
class ModalDialog extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      visible: props.visible,
    };
  }
  componentDidMount() {
    this.setState({
      visible: this.props.visible,
    });
  }
  static getDerivedStateFromProps (nextProps,preState){
    console.log(nextProps,preState)
    //    this.setState({
    //    visible: nextProps.visible,
    // });
    return true
  }
  
  handleOk = () => {
    const listData = {message: '弹窗数据'};
    this.props.handleOk(listData);
  };
  handleCancel = () => {
    this.setState(
      {
        visible: false,
      },
      () => {
        this.props.handleOk(false);
      },
    );
  };
  render() {
    console.log(this.props);
    const {visible} = this.state;
    return (
      <Fragment>
        {visible && (
          <View style={styles.container_dialog}>
            <View style={styles.dialog}>
              <Button
                title="取消"
                buttonStyle={{width:100}}
                
                onPress={() => this.handleCancel()}></Button>
              <Button
                title="确认"
                buttonStyle={{width:100}}
                onPress={() => this.handleOk()}></Button>
            </View>
          </View>
        )}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container_dialog: {
    width: ScreenWidth,
    height: ScreenHeight,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center'
  },
  dialog: {
    height: 250,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    padding: 20,
  },
});
export default ModalDialog;
