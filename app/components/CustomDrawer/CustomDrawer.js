import React, { Component } from 'react'
import { View, Dimensions, Text, ListView, TextInput, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerInput from '../DrawerItem/DrawerItem';
const {height, width} = Dimensions.get('window');

export default class Drawer extends Component {
  navigation =(path)=>{
    this.props.navigation.navigate(path);
    this.props.navigation.closeDrawer();
  }
  render() {
    return (
      // <LinearGradient colors={['#62C0DD', '#f8f8f8']} style={{height}}>
      <View style={{height}}>
        <View style={{width: '100%', height: height*0.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#62C0DD',}}>
          <Icon name="user" size={100}/>
          <Text>julian.f.valencia@hotmail.com</Text>
        </View>
          <View style={{width: '100%', height: height*0.7,}}>
              <DrawerInput name="Busqueda" onHandlePress={()=>this.navigation('Main')}>
                <Image style={{height:30, width: 30}} source={require('../../assets/icons/settings-gears.png')}/>
              </DrawerInput>
              <DrawerInput name="Cuenta" onHandlePress={()=>this.navigation('Perfil')}>
                <Image style={{height:30, width: 30}} source={require('../../assets/icons/settings-gears.png')}/>
              </DrawerInput>
              <DrawerInput name="Historial" onHandlePress={()=>this.navigation('History')}>
                <Image style={{height:30, width: 30}} source={require('../../assets/icons/contract.png')}/>
              </DrawerInput>
              <DrawerInput name="En estudio" onHandlePress={()=>this.navigation('Study')}>
                <Image style={{height:30, width: 30}} source={require('../../assets/icons/study.png')}/>
              </DrawerInput>
              <DrawerInput name="Mis inquilinos" onHandlePress={()=>this.navigation('Tenants')}>
                <Image style={{height:30, width: 30}} source={require('../../assets/icons/exit.png')}/>
              </DrawerInput>
              <DrawerInput name="Cerrar sesion" onHandlePress={()=>this.props.navigation.navigate('auth')}>
                <Image style={{height:30, width: 30}} source={require('../../assets/icons/exit.png')}/>
              </DrawerInput>
          </View>
      </View>
    )
  }
}

