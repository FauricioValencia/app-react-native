import React, { Component } from "react";
import { View, Dimensions, Text, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/FontAwesome";
import TextItem from "../../../../components/UI/textItem/textItem";

const { height, width } = Dimensions.get("window");

//  IMPORT COMPONENTS
export default class ResultQuery extends Component {
  // componentDidMount(){
  //   this.props.navigation.openDrawer();
  //   setTimeout(() => {
  //     this.props.navigation.closeDrawer();
  //   }, 3000);
  // }
  render() {
    return (
      <View style={{ width, height, flexDirection: "column" }}>
        <TextItem type="Nombre" value="Alvaro Uribe Velez" />
        <TextItem type="Cédula" value="11440123" />
        <TextItem type="Reportado en data credito" value="Si" />
        <TextItem type="Antecendentes" value="Si" />
        <View style={{width,height:height*0.3, justifyContent: 'center', alignItems: 'center',}}>
          <Button
            title="Solicitar estudio"
            containerStyle={{ width: width * 0.4, }}
            onPress={() => this.props.navigation.navigate("StudyRequest")}
          />
        </View>
      </View>
    );
  }
}
