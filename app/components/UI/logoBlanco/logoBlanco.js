import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types'

export const LogoBlanco=(props)=> {
    return (
        <View style={props.style}>
            <Image
                 source={require('../../../assets/duenio-blanco.png')}/>
        </View>
    )
}
LogoBlanco.prototype ={
    style: PropTypes.object
}
export default LogoBlanco
