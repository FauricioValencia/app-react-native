import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Carousel from "react-native-carousel";

const { height, width } = Dimensions.get("window");
export const Carrousel = () => {
  return (
    <Carousel width={375}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/carrousel1.jpg")}
        />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/carrousel1.jpg")}
        />
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/carrousel1.jpg")}
        />
      </View>
    </Carousel>
  );
};
var styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: height*0.3
  },
  image: {
    resizeMode: "contain",
    width: width * 0.9
  }
});

export default Carrousel;
