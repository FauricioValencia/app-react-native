import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";

import { api, postApi } from '../../../service/';

const { height, width } = Dimensions.get("window");

// //  IMPORT COMPONENTS

export default class Register extends Component {
    state={
        names:'',
        last_name: '',
        email: '',
        id: '',
        telephone: '',
        password: '',

    }
  static navigationOptions = {
    title:"Registro"
  };


  _register = async () => {
    const { names, last_name, email, id, telephone, password } = state;
    const route  = api.uri + api.users.register;
    const body = {
      names,
      last_name,
      email,
      id,
      telephone,
      password
    }
    await postApi(route,body);
  }


  render() {
      const { nombres, apellidos, email, cedula, telefono, password }= this.state;
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: "yellow",
        }}
      >
        <View style={{height: height*0.1}}/>
        <View style={{height: height*0.6, width, justifyContent: 'center', alignItems: 'center'}}>
          <Input
            placeholder="Nombre"
            label="Nombre"
            value={nombres}
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={(nombres)=>this.setState({nombres})}
            containerStyle={{width: width*0.8}}
          />
          <Input
            placeholder="Apellidos"
            label="Apellidos"
            value={apellidos}
            leftIcon={<Icon name="user" size={24} color="black" />}
            keyboardType="visible-password"
            onChangeText={(apellidos)=>this.setState({apellidos})}
            containerStyle={{width: width*0.8}}
          />
          <Input
            placeholder="Email"
            label="Email"
            leftIcon={<Icon name="envelope" size={24} color="black" />}
            keyboardType="visible-password"
            value={email}
            onChangeText={(email)=>this.setState({email})}
            containerStyle={{width: width*0.8}}
          />
          <Input
            placeholder="Cédula"
            label="Cédula"
            leftIcon={<Icon name="user" size={24} color="black" />}
            keyboardType="visible-password"
            value={cedula}
            onChangeText={(cedula)=>this.setState({cedula})}
            containerStyle={{width: width*0.8}}
          />
          <Input
            placeholder="Télefono"
            label="Télefono"
            leftIcon={<Icon name="phone" size={24} color="black" />}
            keyboardType="visible-password"
            value={telefono}
            onChangeText={(telefono)=>this.setState({telefono})}
            containerStyle={{width: width*0.8}}
          />
          <Input
            placeholder="Contraseña"
            label="Contraseña"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            value={password}
            keyboardType="visible-password"
            onChangeText={(password)=>this.setState({password})}
            containerStyle={{width: width*0.8}}
          />
        </View>
        <View
          style={{
            width,
            justifyContent: "center",
            height: height*0.2,
            alignItems: 'center'
          }}
        >
          <Button title="Registrarse" containerStyle={{ width: width * 0.4 }} />
        </View>
      </View>
    );
  }
}
