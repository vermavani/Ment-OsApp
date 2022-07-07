import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import firebase from "firebase";

import Record from "../Screens/Records";
import Entries from "../Screens/Entries";
import CreateScreen from "../Screens/Create";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true,
      isUpdated: false
    };
  }

  renderFeed = props => {
    return <Record setUpdateToFalse={this.removeUpdated} {...props} />;
  };

  renderStory = props => {
    return <CreateScreen setUpdateToTrue={this.changeUpdated} {...props} />;
  };

  changeUpdated = () => {
    this.setState({ isUpdated: true });
  };

  removeUpdated = () => {
    this.setState({ isUpdated: false });
  };

  componentDidMount() {

    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", function(snapshot) {
     
      });
  
  }
  render(){
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                   if (route.name === "Entries Screen") {
                        iconName = focused ? "book" : "book-outline";
                    }else if (route.name === "Create Screen") {
                        iconName = focused ? "add-circle" : "add-circle-outline";
                    }
                     else if (route.name === "Record Screen") {
                        iconName = focused ? "folder-open" : "folder-outline";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={25}
                            color={color}
                            style={styles.icons}
                        />
                    );
                }
            })}
            activeColor={"white"}
            inactiveColor={"black"}
        >
           
            <Tab.Screen name="Entries Screen" component={Entries} />
            <Tab.Screen name="Create Screen" component={this.renderStory} />
             <Tab.Screen name="Record Screen"   component={this.renderFeed} />
        </Tab.Navigator>
    );
}}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#cc6699",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: 30,
        height: 30
    }
});
