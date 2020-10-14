import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AccountScreen from './src/screens/AccountScreen';
import MapMainScreen from './src/screens/MapScreens/MapMain';
import MapAddScreen from './src/screens/MapScreens/MapAdd';
import MapSafeScreen from './src/screens/MapScreens/MapSafe';
import MapUnsafeScreen from './src/screens/MapScreens/MapUnsafe';
import FeedScreen from './src/screens/FeedScreen';
import ComplaintsScreen from './src/screens/ComplaintsScreen';
import LoadingScreen from './src/screens/LoadingScreen';
import {Provider as AuthProvider} from './src/Context/AuthContext'; 
import {setNavigator} from './src/navigationRef';

const switchNavigator = createSwitchNavigator({
  Loading:LoadingScreen,
  loginFlow:createStackNavigator({
    SignUp:SignUpScreen,
    SignIn:SignInScreen
  }),
  mainFLow:createBottomTabNavigator({
    MapFlow:createStackNavigator({
      MapMain:MapMainScreen,
      MapAdd:MapAddScreen,
      MapSafe:MapSafeScreen,
      MapUnsafe:MapUnsafeScreen
    }),
    Account:AccountScreen,
    Feed:FeedScreen,
    Complaints:ComplaintsScreen,
  })
})
const App =createAppContainer(switchNavigator);

export default()=>{
  return(
    <AuthProvider>
      <App ref={(navigator)=>{setNavigator(navigator)}}/>
      </AuthProvider>
  )
};