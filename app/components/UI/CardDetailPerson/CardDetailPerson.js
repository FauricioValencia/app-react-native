import React, { Component } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button, Input } from "react-native-elements";

const { height, width } = Dimensions.get("window");

export const CardDetailPerson = props => {
  return (
    <TouchableOpacity onPress={props.onHandle}>
      <View
        style={{
          width,
          backgroundColor: "#f8f8f8",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 10,
          paddingBottom: 10,
          marginTop: 20
        }}
      >
        <Icon name="user" size={40} color="black" />
        <View style={{ flexDirection: "column" }}>
          <Text>Pepito Perez</Text>
          <Text>22-Feb-2012</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {props.Detail && (
            <>
              <Text style={{ marginRight: 20 }}>Detalle</Text>
              <Icon name="angle-right" size={30} />
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardDetailPerson;
