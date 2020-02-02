import React, { Component } from 'react'
import { StyleSheet,SafeAreaView} from 'react-native'
import Swiper from './Swiper'
class Navigation extends Component {
    render() {
        const {navigation}=this.props
        return (
         <SafeAreaView style={styles.container}>
            <Swiper navigation={navigation}></Swiper>
          </SafeAreaView>
          
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    welcome:{
        color:'cyan'
    },
    btn:{
        fontSize:100
    }

})
export  default  Navigation