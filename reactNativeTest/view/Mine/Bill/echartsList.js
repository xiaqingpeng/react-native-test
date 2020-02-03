import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import echartsData from './echartsData'
export default class App extends Component {
 

  render() {
    return (
      <View style={styles.chartContainer}>
        <ECharts
          option={echartsData.option1}
          backgroundColor="white"
        />
        <ECharts
          option={echartsData.option2}
          backgroundColor="white"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1
  }
})