import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ContentComponent from '../view/ContentComponent/index.js';
//抽屉导航中间路由堆栈
import Home from '../view/DrawerItem/home';
import SkinCenter from '../view/DrawerItem/skinCenter';
import MemberCenter from '../view/DrawerItem/memberCenter';
import FlowPay from '../view/DrawerItem/flowPay';
import SelfClould from '../view/DrawerItem/selfClould';
import OnTimeClose from '../view/DrawerItem/onTimeClose';
import MusicEffect from '../view/DrawerItem/musicEffect';
import TaoTicket from '../view/DrawerItem/taoTicket';
import MusicSound from '../view/DrawerItem/musicSound';
import KugouShop from '../view/DrawerItem/kugouShop';
import Platform from '../view/DrawerItem/platform';
import Pattern from '../view/DrawerItem/pattern';
const DrawerNavigator = createDrawerNavigator(
  {
    Home: Home,
    SkinCenter: SkinCenter,
    MemberCenter: MemberCenter,
    FlowPay: FlowPay,
    SelfClould: SelfClould,
    OnTimeClose: OnTimeClose,
    MusicEffect: MusicEffect,
    TaoTicket: TaoTicket,
    MusicSound:MusicSound,
    KugouShop:KugouShop,
    Platform:Platform,
    Pattern:Pattern,
  },
  {
    initialRouteName: 'Home',
    lazy: true,
    drawerWidth: 350,
    backBehavior: 'none',
    drawerBackgroundColor: '#fbfbfb',
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: '#0080fe',
      // inactiveBackgroundColor: 'pink',
      itemStyle:{
        height:50,
        //backgroundColor:'cyan'
      },
      labelStyle:{
        height:50,
        lineHeight:50,
        // backgroundColor:'cyan'
        marginLeft: 0,
        paddingLeft:0,
      },
      onItemPress: ({route, focused}) => {
        console.log(route, focused);
      },
    },
    contentComponent: ContentComponent,
  },
);

export default createAppContainer(DrawerNavigator);
