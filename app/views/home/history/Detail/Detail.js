import React, { Component } from "react";
import { View, Dimensions, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import TextItem from "../../../../components/UI/textItem/textItem";
import CardPerson from "../../../../components/UI/CardDetailPerson/CardDetailPerson";
import CardComentary from "../../../../components/UI/CardComentary/CardComentary";

const { height, width } = Dimensions.get("window");

//  IMPORT COMPONENTS
export default class DetailHistory extends Component {
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.props.navigation.navigate('Perfil')
  //             }, 3000);
  // }
  render() {
    return (
      <View
        style={{
          width,
          height,
          backgroundColor: "gray"
        }}
      >
        <View
          style={{
            width,
            height: height * 0.6,
            flexDirection: "column",
            backgroundColor: "white"
          }}
        >
          <CardPerson />
          <TextItem type="Nombre" value="Alvaro Uribe Velez" />
          <TextItem type="Cédula" value="11440123" />
          <TextItem type="Reportado en data credito" value="Si" />
          <TextItem type="Antecendentes" value="Si" />
          <TextItem type="Calificación" value="5" />
        </View>
        <View
          style={{
            backgroundColor: "gray",
            alignItems: "center",
            height: height*0.4
          }}
        >
          <Text> Comentarios </Text>
          <ScrollView>
            <CardComentary />
            <CardComentary />
            <CardComentary />
          </ScrollView>
        </View>
      </View>
    );
  }
}
