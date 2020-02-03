import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';
import echartsData from './echartsData.js';
export default class EpidemicSituation extends Component {
  render() {
    return (
      <>
        <ECharts option={echartsData.option1} backgroundColor="white" />
        <ECharts option={echartsData.option2} backgroundColor="white" />
      </>
    );
  }
}
