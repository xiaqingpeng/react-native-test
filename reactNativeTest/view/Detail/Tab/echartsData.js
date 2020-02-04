export default {
  option2: {
    title:{
      text:'疫情趋势',
      textStyle:{
        fontSize:14
      }
    },
    legend: {
      data: ['确诊','死亡','疑似'],
      top:5,
      center:0
  },
    xAxis: {
      type: 'category',
      data: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name:'确诊',
        data: [0,200, 1000, 3000, 10000],
        type: 'line',
        color:'green',
        smooth: true,
      },
      { 
        name:'死亡',
        data: [0,100, 800, 2200, 9000],
        type: 'line',
        color:'red',
        smooth: true,
      },
      {
        name:'疑似',
        data: [0,101, 340, 3000, 7000],
        type: 'line',
        color:'black',
        smooth: true,
      }
    ],
  },
  dataSource1: [
    {
      leftAvatar: require('../../../swiper_images/swiper1.jpg'),
      title: '在线问医',
    },
    {
      leftAvatar: require('../../../swiper_images/swiper1.jpg'),
      title: '送药上门',
    },
    {
      leftAvatar: require('../../../swiper_images/swiper1.jpg'),
      title: '辟谣专区',
    },
  ],
  dataSource2: [
    {
      leftTitle:'确诊',
      leftColor:'#913d1d',
      centerColor:'#913d1d',
      centerTitle:20252,
      rightTitle: 3137,
    },
    {
      leftTitle:'疑似',
      leftColor:'#f05818',
      centerColor:'#f05818',
      centerTitle:23214,
      rightTitle: 1656,
    },
    {
      leftTitle:'死亡',
      leftColor:'#a0a0a0',
      centerColor:'#a0a0a0',
      centerTitle:426,
      rightTitle: 65,
    },
    {
      leftTitle:'治愈',
      leftColor:'#2b6f58',
      centerColor:'#2b6f58',
      centerTitle:727,
      rightTitle: 206,
    },
    
  ],
  dataSource3: [
    { province:'省市',
      leftTitle:'确诊(列)',
      leftColor:'#913d1d',
      centerColor:'#913d1d',
      centerTitle:'死亡',
      rightTitle: '痊愈',
    },
    { province:'湖北',
      leftTitle:'13522',
      leftColor:'#913d1d',
      centerColor:'#913d1d',
      centerTitle:20252,
      rightTitle: 3137,
    },
    { 
      city:'武汉',
      leftTitle:'6384',
      leftColor:'#f05818',
      centerColor:'#f05818',
      centerTitle:23214,
      rightTitle: 1656,
    }
  ]
};

 
