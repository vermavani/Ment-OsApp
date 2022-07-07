import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Day1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/d1.jpg')}
          style={styles.appIcon}></Image>
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
});
