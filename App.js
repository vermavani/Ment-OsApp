import * as React from "react";
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

import Login from "./Screens/Login"
import Loading from "./Screens/Loading";
import DashBoardScreen from "./Screens/DashBoardScreen";
import Card from "./Screens/Card"

import firebase from "firebase";
import { firebaseConfig } from "./Config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}


var AppNavigator = createSwitchNavigator({
 LoadingScreen:Loading,
 LoginScreen:Login,
 DashBoardScreen:DashBoardScreen,
 CardScreen:Card

 
})

const AppContainer = createAppContainer(AppNavigator)

export default function App() {
  return <AppContainer />;
}