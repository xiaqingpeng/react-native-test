export default {
  option1: {
    title: {
      text: '每日支出',
      x: '5%',
      y: '1%',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgb(3,127,254)',
      formatter: ' 2020 -{b}支出<br/> ¥ {c} ',
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          // 设置x轴颜色
          color: '#959595'
        }
      },
      data: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7','1-8','1-9','1-10','1-11', '1-12', '1-13', '1-14', '1-15', '1-16', '1-17','1-18','1-19','1-20','1-21', '1-22', '1-23', '1-24', '1-25', '1-26', '1-27','1-28','1-29','1-30','1-31'],
    },
    yAxis: {     
      type: 'value',
      show:false
    },
    series: [
      {
        data: [37, 69, 2, 27, 8, 8,4, 8, 560.94, 17.7, 39.5, 32.97,55,20.98,2,0,0,19,14,49,17.5,19,15,15,48.9,0,0,27,55.9,15,0,29.5,42.4],
        type: 'line',
        smooth: true,
        symbolSize:10,
        color:"#1c8ed4",
        itemStyle:{
          normal:{
            // 拐点上显示数值
            label : {
            show: true
            },
            borderColor:'#3c78a5',  // 拐点边框颜色
            lineStyle:{                 
              width:4,  // 设置线宽
              type:'solid'  //'dotted'虚线 'solid'实线
            }
          }
        }
      },
    ],
  },
  option2: {
    title: {
      text: '支出分类',
      x: '5%',
      y: '1%',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: ' {b}: ¥ {c} ({d}%)',
      backgroundColor: 'rgb(3,127,254)',
    },
    color: ['#f3d510', '#bbd45a  ', '#f0ad11', '#4bb5cc', '#00a69f', '#0f8ef0'],
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['25%', '40%'],
        center: ['50%', '50%'],
        minAngle: 12,
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: true,
            position: 'outside',
            formatter: '¥ {c|{c}} ({d|{d}%})\n{hr|}\n{b|{b}}',
            lineStyle: {
              color: 'red',
              width: 2,
            },
            rich: {
              a: {
                padding: 2,
              },
              b: {
                fontSize: 12,
                align: 'left',
                // padding: 82,
                // margin: 80,
                // lineHeight: 80
              },
              hr: {
                borderColor: '#ccc',
                width: '80%',
                borderWidth: 1,
                height: 0,
              },
              d: {
                fontSize: 12,
                align: 'left',
                // padding: 4
              },
              c: {
                fontSize: 12,
                align: 'left',
              },
            },
          },
          emphasis: {
            position: 'left',
            show: true,
            textStyle: {
              fontSize: '14',
              fontWeight: 'bold',
            },
            length: 1,
          },
        },
        labelLine: {
          normal: {
            show: true,
          },
        },
        data: [
          {value: 313.0, name: '交通出行'},
          {value: 137.9, name: '生活用品'},
          {value: 482.16, name: '餐饮美食'},
          {value: 95.0, name: '服装美容'},
          {value: 72.34, name: '通讯物流'},
          {value: 20.0, name: '医疗保健'},
        ],
      },
    ],
  },
  
};
