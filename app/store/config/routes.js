import { createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation'; 
//  IMPORT STACKS
import Auth from '../../rutes/auth/index.routes';
import Main from '../../rutes/home/index';

const App = createSwitchNavigator(
    {
      auth: { screen:Auth },
      main: {screen: Main },
    }
  );
  export default createAppContainer(App);