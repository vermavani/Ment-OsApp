import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigation";
import Profile from "../Screens/Profile"
import TabNavigator from "./TabNavigation"
import LogOut from "../Screens/LogOut"

import CustomSidebar from "../Screens/CustomBarStyle";
const Drawer=createDrawerNavigator()

export default class DrawerNavigator extends Component {
 render() {
 
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "pink",
          inactiveTintColor: "white",

          itemStyle: { marginVertical: 5 }
        }}
         drawerContent={props => <CustomSidebar {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ unmountOnBlur: true }}
        />
         <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="LogOut"
          component={LogOut}
          options={{ unmountOnBlur: true }}
        />

        
      </Drawer.Navigator>
    );
  }
}