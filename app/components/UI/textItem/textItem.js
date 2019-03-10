import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types'
const { height, width } = Dimensions.get("window");
export const TextItem=(props)=> {
    return (
        <View style={{marginHorizontal:10,width, height: height*0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                <View style={{width: width*0.5, justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={{fontWeight: 'bold'}}>{props.type}</Text>
                </View>
                <View style={{width:width*0.5, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>{props.value}</Text>
                </View>
            </View>
    )
}

export default TextItem
