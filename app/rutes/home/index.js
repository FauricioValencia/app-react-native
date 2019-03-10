import React from 'react'
import {  createDrawerNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Drawer from '../../components/CustomDrawer/CustomDrawer';

import Main from './main.routes';

const MyDrawerNavigator = createDrawerNavigator(
  {
  Main: {
    screen: Main,
    }
  }
  ,{
    contentComponent: Drawer
  }
);

export default createAppContainer(MyDrawerNavigator);


