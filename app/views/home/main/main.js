import React, { Component } from "react";
import { View, Dimensions, Text, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("window");

//  IMPORT COMPONENTS
export default class Main extends Component {
  state = {
    user: ""
  };
  // componentDidMount(){
  //   this.props.navigation.openDrawer();
  //   setTimeout(() => {
  //     this.props.navigation.closeDrawer();
  //   }, 3000);
  // }
  render() {
    const { user } = this.state;
    return (
      <KeyboardAwareScrollView innerRef={ref => (this.scroll = ref)}>
        <View style={{ width, height, }}>
          <Image
            style={{
              width,
              height: height * 0.4
            }}
            source={require("../../../assets/main.jpg")}
          />
          <View style={{ height: height * 0.3, justifyContent: "center", width, alignItems: 'center', }}>
            <Input
              placeholder="Ingrese la cédula"
              label="Ingrese la cédula"
              containerStyle={{ width: width * 0.8 }}
              value={user}
              leftIcon={<Icon name="user" size={24} color="black" />}
              onChangeText={user => this.setState({ user })}
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
              onPress={() => this.props.navigation.navigate("ResultQuery")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
