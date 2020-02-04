import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';
import {ListItem} from 'react-native-elements';
import echartsData from './echartsData.js';
const leftAvatar = require('../../../swiper_images/swiper1.jpg');

class EpidemicSituation extends Component {
  render() {
    const {width} = Dimensions.get('window');
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <ListItem
              style={styles.view_header}
              containerStyle={{
                borderRadius: 8,
                marginBottom: 10,
              }}
              subtitleStyle={{color: 'rgba(0,0,0,0.5)', marginTop: 5}}
              leftAvatar={
                <Image
                  source={leftAvatar}
                  style={{width: 40, height: 40, borderRadius: 20}}></Image>
              }
              title={'全国发热门诊权威发布'}
              rightTitle={'查询'}
              subtitle="一键导航,附近就诊"
              chevron
            />
          </View>
          <View style={styles.header_button}>
            {echartsData.dataSource1.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  style={styles.view_header}
                  containerStyle={{
                    borderRadius: 5,
                    width: (width - 50) / 3,
                  }}
                  leftAvatar={
                    <Image
                      source={item.leftAvatar}
                      style={{width: 20, height: 20, borderRadius: 10}}></Image>
                  }
                  title={item.title}
                  titleStyle={{
                    fontSize: 12,
                  }}
                  chevron
                />
              );
            })}
          </View>

          <View>
            <ListItem
              containerStyle={{
                marginBottom: 0,
              }}
              subtitleStyle={{color: 'rgba(0,0,0,0.5)', marginTop: 5}}
              title={'全国疫情'}
              rightTitle={
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={leftAvatar}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      marginRight: 5,
                    }}></Image>
                  <Text style={{color: 'rgba(0,0,0,0.5)'}}>数据说明</Text>
                </View>
              }
              subtitle={'统计截止2020年02月04日 19:10'}
            />

            <View style={styles.epid_list}>
              {echartsData.dataSource2.map((item, index) => {
                return (
                  <View key={index}>
                    <Text style={{color: item.leftColor, ...styles.epid_top}}>
                      {item.leftTitle}
                    </Text>
                    <Text
                      style={{color: item.centerColor, ...styles.epid_center}}>
                      {item.centerTitle}
                    </Text>
                    <Text
                      style={{
                        color: item.rightColor,
                        ...styles.epid_bottom,
                      }}>{`较昨日+${item.rightTitle}`}</Text>
                  </View>
                );
              })}
            </View>

            <View style={{backgroundColor: 'white', padding: 12}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:15}}>
                <Text>本地疫情</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Image source={leftAvatar} style={{width:10,height:10}}>
                  </Image>
                  <Text>
                    深圳市
                  </Text>
                </View>
              </View>
              {echartsData.dataSource3.map((item, index) => {
                return (
                  <View key={index} style={styles.origin_list} >
                    <Text style={{color: item.leftColor, ...styles.epid_province}}>
                      {item.province||item.city}
                    </Text>
                    <Text style={{color:item.leftColor, ...styles.epid_true}}>
                    {item.leftTitle}
                    </Text>
                    <Text
                      style={{color: item.centerColor,...styles.epid_kill}}>
                      {item.centerTitle}
                    </Text>
                    <Text
                      style={{
                        ...styles.epid_good,
                      }}>{`${item.rightTitle}`}</Text>
                  </View>
                );
              })}
            </View>




          </View>


          <View style={styles.echart_two}>
            <ECharts option={echartsData.option2} backgroundColor="white" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffd8bf',
  },
  header_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  epid_list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'white',
  },
  epid_top: {
    fontWeight:'bold',
    textAlign:'center'
  },
  epid_center: {
    fontWeight:'bold',
    textAlign:'center',
    fontSize:24,
    marginTop:5,
    marginBottom:5
  },
  epid_bottom: {
    color:'rgba(0,0,0,0.5)',
    textAlign:'center',
    fontSize:12
  },
  origin_list: {
    flexDirection:'row',
    justifyContent: 'space-between',
  
    alignItems:'center'
  },
  epid_province: {
  
    fontWeight:'bold',
    textAlign:'center'
  },
  epid_truth: {
   
    fontWeight:'bold',
    textAlign:'center',
    fontSize:24,
    marginTop:5,
    marginBottom:5
  },
  epid_kill: {
  
    color:'rgba(0,0,0,0.5)',
    textAlign:'center',
  },
  epid_good: {
   
    color:'#2b6f58',
    textAlign:'center',
  },
  echart_one: {
    height: 400,

  },
  echart_two: {
    height: 300,
  },
});
export default EpidemicSituation;
