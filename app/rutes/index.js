import { createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation'; 
//  IMPORT STACKS
import Auth from './auth/index.routes';
import Main from './home/index';

const App = createSwitchNavigator(
    {
      auth: { screen:Auth },
      main: {screen: Main },
    }
  );
  export default createAppContainer(App);