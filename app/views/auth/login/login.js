import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";

const { height, width } = Dimensions.get("window");

//  IMPORT COMPONENTS
import LogoBlanco from "../../../components/UI/logoBlanco/logoBlanco";
export default class Login extends Component {
    state={
        user:'',
        password: ''
    }
  static navigationOptions = {
    header: null
  };
  componentDidMount() {
  }
  render() {
      const { user, password }= this.state;
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: "yellow",
          alignContent: "center"
        }}
      >
        <LogoBlanco
          style={{
            width,
            height: height * 0.2,
            justifyContent: "center",
            alignItems: "center"
          }}
        />

        <View style={{height: height*0.5, width, justifyContent: 'center', alignItems: 'center'}}>
          <Input
            placeholder="USERNAME"
            label="Username"
            containerStyle={{ width: width * 0.8 }}
            value={user}
            leftIcon={<Icon name="user" size={24} color="black" />}
            onChangeText={(user)=>this.setState({user})}
          />
          <Input
            placeholder="Password"
            label="Password"
            value={password}
            containerStyle={{ width: width * 0.8 }}
            leftIcon={<Icon name="lock" size={24} color="black" />}
            keyboardType="visible-password"
            onChangeText={(password)=>this.setState({password})}
          />
          <Text style={{textAlign: 'center', marginTop: 20}}>¿Olvidaste tu contraseña?</Text>
        </View>
        <View
          style={{
            width,
            flexDirection: "row",
            justifyContent: "space-around",
            height: height*0.3
          }}
        >
          <Button
            title="Iniciar Sesión"
            containerStyle={{ width: width * 0.4 }}
            onPress={() => this.props.navigation.navigate("main")}
          />
          <Button
            title="Registrarse"
            containerStyle={{ width: width * 0.4 }}
            onPress={()=>this.props.navigation.push('Register')}
            />
        </View>
      </View>
    );
  }
}
