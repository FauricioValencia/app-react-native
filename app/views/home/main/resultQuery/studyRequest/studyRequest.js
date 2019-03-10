import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import { Button, Input } from "react-native-elements";
import Modal from "react-native-modal";

const { height, width } = Dimensions.get("window");
export default class StudyRequest extends Component {
  state = {
      modal: false
  };
  render() {
    return (
      <View style={{ height, width }}>
        <Text style={{ textAlign: "center" }}>
          LLena correctamente todos los campos del formulario para realizar la
          solicitud correspondiente.
        </Text>
        <Modal 
            animationIn="slideInUp"
            animationInTiming={1000}
            isVisible={this.state.modal}>
          <View
            style={{
              height: height * 0.25,
              width: width * 0.9,
              justifyContent: "center",
              backgroundColor: "white", alignItems: 'center',
            }}
          >
            <Text style={{ textAlign: "center", marginHorizontal: 20 }}>
              Estas seguro de realizar en estudio completo al inquilino. tendran
              costo $40.000, la solicitud tardara mucho 48 horas{" "}
            </Text>
            <View
              style={{
                width: width*0.8,
                flexDirection: "row",
                // backgroundColor: 'red',
                justifyContent: "space-between",
                height: height * 0.13,
                alignItems: 'center',
              }}
            >
              <Button
                title="Aceptar"
                containerStyle={{ width: width * 0.3 }}
                // onPress={() => this.props.navigation.navigate("main")}
              />
              <Button
                title="Cancelar"
                containerStyle={{ width: width * 0.3 }}
                onPress={() => this.setState({modal: false})}
              />
            </View>
          </View>
        </Modal>
        <View
          style={{
            height: height * 0.7,
            width,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Input
            placeholder="USERNAME"
            label="Username"
            containerStyle={{ width: width * 0.8 }}
            // value={user}
            // leftIcon={<Icon name="user" size={24} color="black" />}
            // onChangeText={(user)=>this.setState({user})}
          />
          <Input
            placeholder="USERNAME"
            label="Username"
            containerStyle={{ width: width * 0.8 }}
            // value={user}
            // leftIcon={<Icon name="user" size={24} color="black" />}
            // onChangeText={(user)=>this.setState({user})}
          />
          <Input
            placeholder="USERNAME"
            label="Username"
            containerStyle={{ width: width * 0.8 }}
            // value={user}
            // leftIcon={<Icon name="user" size={24} color="black" />}
            // onChangeText={(user)=>this.setState({user})}
          />
          <Input
            placeholder="USERNAME"
            label="Username"
            containerStyle={{ width: width * 0.8 }}
            // value={user}
            // leftIcon={<Icon name="user" size={24} color="black" />}
            // onChangeText={(user)=>this.setState({user})}
          />
          <Input
            placeholder="USERNAME"
            label="Username"
            containerStyle={{ width: width * 0.8 }}
            // value={user}
            // leftIcon={<Icon name="user" size={24} color="black" />}
            // onChangeText={(user)=>this.setState({user})}
          />
          <Input
            placeholder="USERNAME"
            label="Username"
            containerStyle={{ width: width * 0.8 }}
            // value={user}
            // leftIcon={<Icon name="user" size={24} color="black" />}
            // onChangeText={(user)=>this.setState({user})}
          />
        </View>
        <View
          style={{
            width,
            flexDirection: "row",
            justifyContent: "center",
            height: height * 0.1
          }}
        >
          <Button
            title="Solicitar estudio"
            containerStyle={{ width: width * 0.4 }}
            onPress={() => this.setState({modal: true})}
          />
        </View>
      </View>
    );
  }
}
