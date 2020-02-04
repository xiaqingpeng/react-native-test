import React, { Component } from "react";
import { StyleSheet, View ,ScrollView} from "react-native";
import { ECharts } from "react-native-echarts-wrapper";
import echartsData from './echartsData'
export default class App extends Component {
 

  render() {
    return (
      <ScrollView>
      <View style={styles.chartContainer}>
        <ECharts
          option={echartsData.option1}
          backgroundColor="white"
        />
        <ECharts
          option={echartsData.option2}
          backgroundColor="white"
        />
        <ECharts
          option={echartsData.option3}
          backgroundColor="green"
        />
      </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
   // flex: 1
  }
})