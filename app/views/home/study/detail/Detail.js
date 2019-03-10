import React, { Component } from "react";
import { View, Dimensions, Text, ScrollView, TextInput } from "react-native";
import { Button, Input } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";
import TextItem from "../../../../components/UI/textItem/textItem";
import CardPerson from "../../../../components/UI/CardDetailPerson/CardDetailPerson";
import CardComentary from "../../../../components/UI/CardComentary/CardComentary";
import TextInputCustom from "../../../../components/UI/textInputCustom/TextInputCustom";

const { height, width } = Dimensions.get("window");

//  IMPORT COMPONENTS
export default class DetailStudy extends Component {
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
            height: height * 0.6,
            flexDirection: "column",
            backgroundColor: "#ffffff"
          }}
        >
          <CardPerson />
          <TextItem type="Nombre" value="Alvaro Uribe Velez" />
          <TextItem type="Cédula" value="11440123" />
          <TextItem type="Reportado en data credito" value="Si" />
          <TextItem type="Antecendentes" value="Si" />
          <TextItem type="Pago alquiler" value="$ 2'000.000" />
        </View>

        <View
          style={{
            width,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10
          }}
        >
          <View
            style={{
              width: width * 0.9,
              height: height * 0.2,
              backgroundColor: "#ffffff",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginHorizontal: 40,
                marginVertical: 10
              }}
            >
              Al momento de probar el estudio se legalizan los documentos y
              hacer efectiva la estdia del inquilino.
            </Text>
            <View
              style={{
                width: width * 0.9,
                flexDirection: "row",
                // backgroundColor: 'red',
                justifyContent: "space-around",
                height: height * 0.13,
                alignItems: "center",
                paddingBottom: 20,
              }}
            >
              <Button
                title="Aceptar"
                containerStyle={{ width: width * 0.3 }}
                // onPress={() => this.props.navigation.navigate("main")}
              />
              <Button
                title="Cancelar"
                containerStyle={{ width: width * 0.3, backgroundColor: 'red' }}
                style={{backgroundColor: 'green'}}
                onPress={() => this.setState({ modal: false })}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
