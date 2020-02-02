import React, {Component, Fragment} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
class BottomDialog extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      visible: props.visible,
      footer:props.footer
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
    const {visible,footer} = this.state;
    return (
      <Fragment>
        {visible && (
          <View style={styles.container_dialog}>
            <View style={styles.dialog}>
              <View style={styles.content}>
                 {this.props.children}
              </View>
              {
                footer&&( <View style={styles.footer}>
                  <Button
                    title="取消"
                    buttonStyle={{width:70}}
                    type='clear'
                    onPress={() => this.handleCancel()}></Button>
                  <Button
                    title="确认"
                    buttonStyle={{width: 70}}
                    type='clear'
                    onPress={() => this.handleOk()}></Button>
                </View>)
              }
             
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
  },
  dialog: {
    height: 250,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    //alignItems:'flex-end',
    justifyContent:'space-between',

    padding: 20,
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:30,
  }

});
export default BottomDialog;
