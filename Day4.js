import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Day4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/d4.jpg')}
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
    resizeMode:"contain"
  
  },
});
