import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Dimensions, Text, ListView, TextInput, Image, TouchableOpacity } from 'react-native';

const {height, width} = Dimensions.get('window');

export const DrawerInput=(props)=> {
    return (
        <TouchableOpacity
            onPress={props.onHandlePress}
        >
        <View
            style={{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#f8f8f8',
                width: '100%',
                // backgroundColor: 'gray',
                flexDirection: 'row', height: height*0.07, justifyContent: 'space-around', alignItems: 'center' }}>
                <View style={{width: width*0.3, justifyContent:'center', alignItems: 'center'}}>
                   {props.children}
                    </View>
                <View style={{width: width*0.4,marginLeft: 30, justifyContent:'center', alignItems: 'flex-start'}}><Text>{ props.name }</Text></View>
                <View style={{width: width*0.3, justifyContent:'center', alignItems: 'center'}}><Icon name="angle-right" size={30}/></View>
              </View>
        </TouchableOpacity>
    )
}

export default DrawerInput
