import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item162157Navigator from '../features/Add-Item162157/navigator';
import Maps162153Navigator from '../features/Maps162153/navigator';
import UserProfile162149Navigator from '../features/UserProfile162149/navigator';
import BlankScreen79158054Navigator from '../features/BlankScreen79158054/navigator';
import BlankScreen78158053Navigator from '../features/BlankScreen78158053/navigator';
import UserProfile158049Navigator from '../features/UserProfile158049/navigator';
import Maps158030Navigator from '../features/Maps158030/navigator';
import Settings158008Navigator from '../features/Settings158008/navigator';
import Settings157993Navigator from '../features/Settings157993/navigator';
import NotificationList157992Navigator from '../features/NotificationList157992/navigator';
import Maps157991Navigator from '../features/Maps157991/navigator';
import UserProfile157954Navigator from '../features/UserProfile157954/navigator';
import Maps157935Navigator from '../features/Maps157935/navigator';
import Settings157913Navigator from '../features/Settings157913/navigator';
import Settings157898Navigator from '../features/Settings157898/navigator';
import NotificationList157897Navigator from '../features/NotificationList157897/navigator';
import Maps157896Navigator from '../features/Maps157896/navigator';
import BlankScreen41157895Navigator from '../features/BlankScreen41157895/navigator';
import Maps157836Navigator from '../features/Maps157836/navigator';
import Add-Item157835Navigator from '../features/Add-Item157835/navigator';
import Maps157831Navigator from '../features/Maps157831/navigator';
import UserProfile157827Navigator from '../features/UserProfile157827/navigator';
import Maps157787Navigator from '../features/Maps157787/navigator';
import Add-Item157786Navigator from '../features/Add-Item157786/navigator';
import Maps157782Navigator from '../features/Maps157782/navigator';
import UserProfile157778Navigator from '../features/UserProfile157778/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item162157: { screen: Add-Item162157Navigator },
Maps162153: { screen: Maps162153Navigator },
UserProfile162149: { screen: UserProfile162149Navigator },
BlankScreen79158054: { screen: BlankScreen79158054Navigator },
BlankScreen78158053: { screen: BlankScreen78158053Navigator },
UserProfile158049: { screen: UserProfile158049Navigator },
Maps158030: { screen: Maps158030Navigator },
Settings158008: { screen: Settings158008Navigator },
Settings157993: { screen: Settings157993Navigator },
NotificationList157992: { screen: NotificationList157992Navigator },
Maps157991: { screen: Maps157991Navigator },
UserProfile157954: { screen: UserProfile157954Navigator },
Maps157935: { screen: Maps157935Navigator },
Settings157913: { screen: Settings157913Navigator },
Settings157898: { screen: Settings157898Navigator },
NotificationList157897: { screen: NotificationList157897Navigator },
Maps157896: { screen: Maps157896Navigator },
BlankScreen41157895: { screen: BlankScreen41157895Navigator },
Maps157836: { screen: Maps157836Navigator },
Add-Item157835: { screen: Add-Item157835Navigator },
Maps157831: { screen: Maps157831Navigator },
UserProfile157827: { screen: UserProfile157827Navigator },
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
