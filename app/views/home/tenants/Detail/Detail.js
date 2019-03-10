import React, { Component } from "react";
import { View, Dimensions, Text, ScrollView, TextInput } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import TextItem from "../../../../components/UI/textItem/textItem";
import CardPerson from "../../../../components/UI/CardDetailPerson/CardDetailPerson";
import CardComentary from "../../../../components/UI/CardComentary/CardComentary";
import TextInputCustom from '../../../../components/UI/textInputCustom/TextInputCustom';

const { height, width } = Dimensions.get("window");

//  IMPORT COMPONENTS
export default class DetailTenants extends Component {
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
          backgroundColor: "#efefef"
        }}
      >
        <View
          style={{
            width,
            height: height * 0.5,
            flexDirection: "column",
            backgroundColor: "#ffffff"
          }}
        >
          <CardPerson />
          <TextItem type="Nombre" value="Alvaro Uribe Velez" />
          <TextItem type="Cédula" value="11440123" />
          <TextItem type="Reportado en data credito" value="Si" />
          <TextItem type="Antecendentes" value="Si" />
        </View>
        <View>
          <View style={{width, backgroundColor: '#ffffff', marginTop: 10, height: height*0.1}}>
            <TextItem type="Calificar" value="5 etrellitas rey" />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#efefef",
            alignItems: "center",
            height: height * 0.18
          }}
        >
          <View style={{width: '100%', marginLeft: '10%'}}><Text style={{fontWeight: 'bold',}}> Agregar Comentario :D </Text></View>
          <ScrollView>
            <CardComentary />
            <CardComentary />
            <CardComentary />
          </ScrollView>
        </View>
        <TextInputCustom />
      </View>
    );
  }
}
