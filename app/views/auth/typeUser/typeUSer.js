import React, { Component } from 'react'
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

//  IMPORT COMPONENTS
import LogoBlanco from '../../../components/UI/logoBlanco/logoBlanco';
import Carrousel from '../../../components/Carrousel/Carrousel';
export default class TypeUser extends Component {
    static navigationOptions ={
        header: null
        }
        componentDidMount() {
            // setTimeout(() => {
            //     this.props.navigation.push('Login')
            // }, 2000);
        }
  render() {
    return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#f8f8f8']} style={{width, height}}>
            <LogoBlanco
                style={{width,height: height*0.2, justifyContent: 'center',alignItems: 'center'}}
            />
                <Carrousel/>
                <View style={{width, flexDirection: 'row', justifyContent:'space-around', }}>
                <Button
                    title="Entrar"
                    containerStyle={{width: width*0.4, marginTop: -140}}
                    onPress={()=>this.props.navigation.push('Login')}
                />
                <Button
                    title="Probar"
                    containerStyle={{width: width*0.4, marginTop: -140}}
                />
                </View>
    </LinearGradient>

    )
  }
}

