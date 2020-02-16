import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import {Header,Button} from 'react-native-elements';

const screenWidth = Dimensions.get('window').width;

class Position extends Component {
    state={
        text:''
    }
    search=()=>{
      console.log(this.state.text)
    }
  render() {
    const {navigation} = this.props;
    const {params} = navigation.state;

    return (
      <Fragment>
        <Header
         placement="left"
          containerStyle={{
            backgroundColor: 'rgb(3,127,254)',
          }}
          leftContainerStyle={{
              width:120
          }}
          leftComponent={
            <View style={styles.position}>
              <TouchableOpacity
                onPress={() => {
                  console.log(this.props.navigation);
                  this.props.navigation.goBack();
                }}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../../images/home/back.png')}></Image>
              </TouchableOpacity>
              <Text style={styles.contentText}>城市选择</Text>
            </View>
          }
          centerComponent={null}
          rightComponent={null}
        />
        <View style={styles.search} >
          <TextInput
                  placeholder="输入城市名,拼音,或字母查询"
                  placeholderTextColor="rgba(0,0,0,0.7)"
                  style={styles.TextInput}
                  onChangeText={text => {
                    console.log(text);
                    this.setState({
                        text:text
                    })
                  }}
            />
            <Button title='查询' color='rgb(3,127,254)' buttonStyle={{height:35}}
            onPress={this.search}>

            </Button>
        </View>
       
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
    search:{
      padding:20,
      flexDirection:'row',
      alignItems: 'center',
      justifyContent:'space-between'
    },
    TextInput: {
        borderWidth: 1,
        borderColor: 'rgb(0,115,227)',
        borderRadius:5,
        width: '80%',
        height: 35,
        paddingLeft:10
      },
  position: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
export default Position;
