import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Header} from 'react-native-elements';
import {ECharts} from 'react-native-echarts-wrapper';

import echartsData from './echartsData';
const screenWidth = Dimensions.get('window').width;
import * as Progress from 'react-native-progress';

class Static extends Component {
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
      progress += Math.random() /20;
      if (progress > 1) {
        progress = 0.98;
      }
      this.setState({ progress })
    }, 100);
  }
 
  render() {
    const {loading,backgroundColor} = this.state;
    return (
      <Fragment>
        <View>
          <Header
            containerStyle={{
              backgroundColor: 'rgb(3,127,254)',
            }}
            leftComponent={
              <TouchableOpacity
                onPress={() => {
                  console.log(this.props.navigation);
                  this.props.navigation.goBack();
                }}>
                <Image
                  style={{width: 30, height: 30}}
                  source={require('../../../images/Login/back.png')}></Image>
              </TouchableOpacity>
            }
            centerComponent={<Text style={styles.contentText}>统计</Text>}
            rightComponent={null}
          />
        </View>
        {loading && (
            <Progress.Bar  progress={this.state.progress} width={screenWidth} borderRadius={0} />
        )}
      
          <ScrollView style={{backgroundColor: '#f5f5f5 '}}>
            <View style={styles.circle}>
              <ECharts
                option={echartsData.option1}
                onLoadEnd={async() => {
                 
                 await this.setState({
                    progress:1,
                  
                  })
                  setTimeout(() => {
                     this.setState({
                      loading:false                   
                    })
                  }, 50);

                }}
              />
            </View>
           
            <View style={styles.circle}>
              <ECharts
                option={echartsData.option2}
               
              
              />
            </View>
            
          </ScrollView>
        
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  
  activityIndicator: {
    marginTop: 200,
  },
  circle: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
    width: screenWidth - 40,
    height: 300,
  
  },
  contentText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  

  

  
});
export default Static;


