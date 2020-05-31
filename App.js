/* APP */

/* IMPORTS*/
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Splashscreen from './Components/Splashscreen';
import Home from './Components//Home';
import Login from './Components/Login';
import Submit from './Components/Submit';

/*  Navigation 2eme niveau*/
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: Home,
    Submit: Submit,
  },
  {
    initialRouteName: 'Home' /* ouverture par defaut*/,
    activeColor: 'white',
    inactiveColor: '#E5E0E0',
    barStyle: {backgroundColor: '#906454'},
  },
);
/* Navigation 1er niveau*/
const App = createAppContainer(
  createSwitchNavigator(
    {
      TabNavigator: TabNavigator,
      Splashscreen: Splashscreen,
      Login: Login,
      Submit: Submit,
    },
    {
      initialRouteName: 'Splashscreen' /* à l'ouverture de l'appli*/,
    },
  ),
);

export default App;
