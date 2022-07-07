import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../Navigation/DrawerNavigation";

export default function DashBoardScreen() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}