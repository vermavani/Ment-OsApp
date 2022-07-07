import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";

import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

export default class CustomSidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }



  render() {
    let props = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "	 #ffd480"
        }}
      >
        <Image
          source={require("../assets/rainbow.png")}

          style={styles.sideMenuProfileIcon}
        ></Image>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: RFValue(180),
    height: RFValue(300),
    borderRadius: RFValue(70),
    alignSelf: "center",
    marginTop: RFValue(60),
    resizeMode: "contain"
  }
});