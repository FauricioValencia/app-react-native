import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

//  IMPORT VIEWS
import Splash from '../../views/splash/splash';
import TypeUser from '../../views/auth/typeUser/typeUSer';
import Login from '../../views/auth/login/login';
import Register from '../../views/auth/register/register';

const AppNavigator = createStackNavigator(
    {
      Splash: { screen:Splash },
      TypeUser: {screen: TypeUser },
      Login:{ screen: Login },
      Register: {screen: Register},
    },
    {
      initialRouteName: "Splash"
    }
  );
  export default createAppContainer(AppNavigator);