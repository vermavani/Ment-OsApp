import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
export default class Day2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/d2.jpg')}
          style={styles.icon}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  icon:{
    flex:0.7,
    width: RFValue(600),
    height: RFValue(200),
  
  },
});