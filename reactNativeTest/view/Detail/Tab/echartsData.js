export default {
  option1: {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'},
        ],
      },
    ],
  },
  option2: {
    xAxis: {
      type: 'category',
      data: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [0,200, 1000, 3000, 10000],
        type: 'line',
        color:'green',
        smooth: true,
      },
      {
        data: [0,100, 800, 2200, 9000],
        type: 'line',
        color:'red',
        smooth: true,
      },
      {
        data: [0,101, 340, 3000, 7000],
        type: 'line',
        color:'black',
        smooth: true,
      }
    ],
  },
};
