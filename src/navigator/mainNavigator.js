import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps157787Navigator from '../features/Maps157787/navigator';
import Add-Item157786Navigator from '../features/Add-Item157786/navigator';
import Maps157782Navigator from '../features/Maps157782/navigator';
import UserProfile157778Navigator from '../features/UserProfile157778/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps157787: { screen: Maps157787Navigator },
Add-Item157786: { screen: Add-Item157786Navigator },
Maps157782: { screen: Maps157782Navigator },
UserProfile157778: { screen: UserProfile157778Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
