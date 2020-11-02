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
import { FontAwesome,MaterialCommunityIcons,MaterialIcons  } from '@expo/vector-icons';


const switchNavigator = createSwitchNavigator({
  Loading:LoadingScreen,
  loginFlow:createStackNavigator({
    SignUp:SignUpScreen,
    SignIn:SignInScreen
  }),
  mainFlow:createBottomTabNavigator({
    Feed:{screen:FeedScreen,navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <FontAwesome name="newspaper-o" size={24} color={tintColor} />
      )
    }},
    MapFlow:createStackNavigator({
      MapMain:MapMainScreen,
      MapAdd:MapAddScreen,
      MapSafe:MapSafeScreen,
      MapUnsafe:MapUnsafeScreen,
    },{
      navigationOptions:{
        tabBarIcon: ({tintColor}) => (
          <MaterialIcons name="location-on" size={24} color={tintColor} />
      )
      }
    }),
    Complaints:{screen:ComplaintsScreen,navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <MaterialCommunityIcons name="alarm-light-outline" size={26} color={tintColor} />
      )
    }},
    Account:{screen:AccountScreen,navigationOptions:{
      tabBarIcon: ({tintColor}) => (
        <MaterialCommunityIcons name="account" size={24} color={tintColor} />
    )
    }},
  },{
    tabBarOptions: {
        showLabel:false,
        activeTintColor:'black',
        inactiveTintColor:'grey'
    }
}),
  
})


const App =createAppContainer(switchNavigator); 
export default()=>{
  return(
    <AuthProvider>
      <App ref={(navigator)=>{setNavigator(navigator)}}/>
      </AuthProvider>
  )
};