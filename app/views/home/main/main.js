import React, { Component } from "react";
import { View, Dimensions, Text, Image, AsyncStorage } from "react-native";
import { Button, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import { api, getApi } from "../../../service/";
const { height, width } = Dimensions.get("window");

//  IMPORT COMPONENTS
export default class Main extends Component {
  state = {
    cedula: ""
  };

  _getUserByCedula = async () => {
    const token = await AsyncStorage.getItem("token");
    const { cedula } = this.state;
    const route = `${api.uri}${api.users.byCedula}${cedula}`;
    let resApi = await getApi(route, token);
    console.log('respuesta al consultar la cedula :D',resApi);
    if(resApi.ok){
        this.props.navigation.navigate("ResultQuery");
    }else{
      alert(`error al consultar la cedula: ${resApi}`);
    }
  };
  render() {
    const { cedula } = this.state;
    return (
      <KeyboardAwareScrollView innerRef={ref => (this.scroll = ref)}>
        <View style={{ width, height }}>
          <Image
            style={{
              width,
              height: height * 0.4
            }}
            source={require("../../../assets/main.jpg")}
          />
          <View
            style={{
              height: height * 0.3,
              justifyContent: "center",
              width,
              alignItems: "center"
            }}
          >
            <Input
              placeholder="Ingrese la cédula"
              label="Ingrese la cédula"
              containerStyle={{ width: width * 0.8 }}
              value={cedula}
              leftIcon={<Icon name="user" size={24} color="black" />}
              onChangeText={cedula => this.setState({ cedula })}
            />
          </View>
          <View
            style={{
              width,
              flexDirection: "row",
              justifyContent: "center",
              height: height * 0.3
            }}
          >
            <Button
              title="Consultar"
              containerStyle={{ width: width * 0.4 }}
              onPress={this._getUserByCedula}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
