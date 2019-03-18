import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";

import { api, postApi } from "../../../service/";

const { height, width } = Dimensions.get("window");

// //  IMPORT COMPONENTS

export default class Register extends Component {
  state = {
    name: "",
    lastName: "",
    email: "",
    cedula: "",
    telephone: "",
    password: ""
  };
  static navigationOptions = {
    title: "Registro"
  };

  _register = async () => {
    const { name, lastName, email, cedula, phone, password } = this.state;
    const route = api.uri + api.users.register;
    const body = {
      name,
      lastName,
      email,
      cedula,
      phone,
      password,
      state:true
    };
    let resApi = await postApi(route, body);
    console.log("respuesta al registro: ", resApi);
    if (resApi.ok === true) {
      alert("Registro correcto :D");
      this.props.navigation.navigate("Login");
    }else {
      alert(`El registro no tuvo exito: ${resApi}`);
    }
  };

  render() {
    const { name, lastName, email, cedula, phone, password } = this.state;
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: "yellow"
        }}
      >
        <View style={{ height: height * 0.1 }} />
        <View
          style={{
            height: height * 0.6,
            width,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Input
            placeholder="Nombre"
            label="Nombre"
            value={name}
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={name => this.setState({ name })}
            containerStyle={{ width: width * 0.8 }}
          />
          <Input
            placeholder="Apellidos"
            label="Apellidos"
            value={lastName}
            leftIcon={<Icon name="user" size={24} color="black" />}
            keyboardType="visible-password"
            onChangeText={lastName => this.setState({ lastName })}
            containerStyle={{ width: width * 0.8 }}
          />
          <Input
            placeholder="Email"
            label="Email"
            leftIcon={<Icon name="envelope" size={24} color="black" />}
            keyboardType="visible-password"
            value={email}
            onChangeText={email => this.setState({ email: email.toLowerCase() })}
            containerStyle={{ width: width * 0.8 }}
          />
          <Input
            placeholder="Cédula"
            label="Cédula"
            leftIcon={<Icon name="user" size={24} color="black" />}
            keyboardType="visible-password"
            value={cedula}
            onChangeText={cedula => this.setState({ cedula })}
            containerStyle={{ width: width * 0.8 }}
          />
          <Input
            placeholder="Télefono"
            label="Télefono"
            leftIcon={<Icon name="phone" size={24} color="black" />}
            keyboardType="visible-password"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
            containerStyle={{ width: width * 0.8 }}
          />
          <Input
            placeholder="Contraseña"
            label="Contraseña"
            leftIcon={<Icon name="lock" size={24} color="black" />}
            value={password}
            keyboardType="visible-password"
            onChangeText={password => this.setState({ password })}
            containerStyle={{ width: width * 0.8 }}
          />
        </View>
        <View
          style={{
            width,
            justifyContent: "center",
            height: height * 0.2,
            alignItems: "center"
          }}
        >
          <Button onPress={this._register} title="Registrarse" containerStyle={{ width: width * 0.4 }} />
        </View>
      </View>
    );
  }
}
