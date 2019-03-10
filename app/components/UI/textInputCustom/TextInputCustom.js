import React from "react";
import { View, TextInput, Dimensions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const { height, width } = Dimensions.get("screen");
export const TextInputCustom = props => {
  return (
    <View style={{ width, height: height * 0.15,  flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
      <TextInput
        style={{width: width*0.7, borderColor: 'gray', borderWidth: 1, height: height*.05, backgroundColor: 'white', borderRadius: 5}}
      />
      <TouchableOpacity>
        <Icon name="user" size={30} style={{marginLeft: 10}}/>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputCustom;
