import React from "react";
import { View, Text, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { height, width } = Dimensions.get("window");
export const CardComentary = props => {
  return (
    <View
      style={{
        height: height * 0.15,
        width: width * 0.9,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems:'center'
      }}
    >
      <View style={{width: width*0.3, alignItems: 'center', alignItems: 'center'}}>
        <Icon name="user" size={50} />
      </View>
      <View style={{ width: "100%", flexDirection: "column", width: width*0.6}}>
        <Text>Juan David mesa</Text>
        <Text>Es una persona muy cumplida, lo recomiendo</Text>
      </View>
    </View>
  );
};

export default CardComentary;
