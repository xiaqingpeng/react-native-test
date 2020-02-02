import React, { Component, Fragment } from 'react'
import { Text, View ,StyleSheet,Image,TouchableOpacity} from 'react-native'
const  image1=require('../../swiper_images/swiper1.jpg')

export default class ListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {ListItem } = this.props
       
        return (
            <Fragment>
            <View style={styles.container1}>
                <Image style={styles.viewImage} source={image1}></Image>
                <Text style={styles.viewTitle}> {ListItem.title} </Text>
                <TouchableOpacity  >
                    <View style={styles.btn}>
                        {
                            ListItem.isShow?( <Text style={styles.care} >未关注</Text>):(<Text style={styles.care} >已关注</Text>)
                        }
                     
                    
                    </View>
                  
                </TouchableOpacity>
               
            </View>
            <View style={styles.blank}>

            </View>
            </Fragment>
        )
    }
}

const styles=StyleSheet.create({
   container1:{
     
       justifyContent:'space-between',
       alignItems:'center',
       flexDirection:'row',
       padding:20,
       margin:10
   },
   viewImage:{
    width:'30%',
    height:100
   },
   viewTitle:{
      margin:5,
      fontSize:16
   },
   btn:{
     borderColor:'red',
     borderWidth:1,
     width:60,
     height:25,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:8
   },
   care:{
       color:'blue'
   },
   blank:{
       width:'100%',
       height:10,
       backgroundColor:'#ccc'
   }

})
