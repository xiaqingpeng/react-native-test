
import React, {Fragment} from 'react';
import {View, Text, ScrollView, SafeAreaView,} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import DrawerHeader from './drawerHeader'
import DrawerFooter from './drawerFooter'



const ContentComponent =(props) => {
    return (
      <Fragment>
        <ScrollView  showsVerticalScrollIndicator={false} >
            <DrawerHeader></DrawerHeader>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
            <DrawerItems {...props}></DrawerItems>
            </SafeAreaView>
        </ScrollView>
        <DrawerFooter navigation={this.props}></DrawerFooter>
      </Fragment>
    )
  }
  export default  ContentComponent