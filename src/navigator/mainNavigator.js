import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps198874Navigator from '../features/Maps198874/navigator';
import Additem198873Navigator from '../features/Additem198873/navigator';
import Maps198869Navigator from '../features/Maps198869/navigator';
import UserProfile198865Navigator from '../features/UserProfile198865/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps198874: { screen: Maps198874Navigator },
Additem198873: { screen: Additem198873Navigator },
Maps198869: { screen: Maps198869Navigator },
UserProfile198865: { screen: UserProfile198865Navigator },

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
