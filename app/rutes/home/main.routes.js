import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Main from "../../views/home/main/main";
import ResultQuery from '../../views/home/main/resultQuery/resullQuery';
import History from '../../views/home/history/history';
import Perfil from '../../views/home/perfil/perfil';
import Request from '../../views/home/request/request';
import Study from '../../views/home/study/study';
import DetailStudy from '../../views/home/study/detail/Detail';
import Tenants from '../../views/home/tenants/tenants';
import DetailTenants from '../../views/home/tenants/Detail/Detail';
import StudyRequest from '../../views/home/main/resultQuery/studyRequest/studyRequest';
import DetailHistory from "../../views/home/history/Detail/Detail";

const MyDrawerNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Consulta",
          headerLeft: (
            <Icon
              style={{
                paddingLeft: 10
              }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    ResultQuery: {
      screen: ResultQuery,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Resultados busqueda",
        };
      }
    },
    StudyRequest: {
      screen: StudyRequest,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Solicitud de estudio",
        };
      }
    },
    History: {
      screen: History,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "History",
          headerLeft: (
            <Icon
              style={{
                paddingLeft: 10
              }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    DetailHistory: {
      screen: DetailHistory,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Detalle",
        };
      }
    },
    Perfil: {
      screen: Perfil,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Perfil",
          headerLeft: (
            <Icon
              style={{
                paddingLeft: 10
              }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    Request: {
      screen: Request,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Solicitud de estudio",
          headerLeft: (
            <Icon
              style={{
                paddingLeft: 10
              }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    Study: {
      screen: Study,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "En estudio",
          headerLeft: (
            <Icon
              style={{
                paddingLeft: 10
              }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    DetailStudy: {
      screen: DetailStudy,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Detalle del estudio",
        };
      }
    },
    Tenants: {
      screen: Tenants,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Mis Inquilinos",
          headerLeft: (
            <Icon
              style={{
                paddingLeft: 10
              }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
    DetailTenants: {
      screen: DetailTenants,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Detalle Inquilino",
          headerLeft: (
            <Icon
              style={{
                paddingLeft: 10
              }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
          )
        };
      }
    },
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createAppContainer(MyDrawerNavigator);
