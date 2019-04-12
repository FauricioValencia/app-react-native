/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import React, { Component } from "react";
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import App from "./app/store/config/routes";
import getStore from "./app/store/store";
// import App from "./app/rutes/";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
