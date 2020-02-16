import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

export default class prevent extends Component {
    render() {
        return (
            <TouchableOpacity onPress={()=>{
                // ImagePicker.openPicker({
                //     width: 300,
                //     height: 400,
                //     cropping: true
                //   }).then(image => {
                //     console.log(image);
                //   });
                console.log(11)
                console.log(ImagePicker)

            }}>
               <View>
                <Text> 如何预防 </Text>
               </View>
            </TouchableOpacity>
           
        )
    }
}
