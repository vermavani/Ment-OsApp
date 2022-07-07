import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

export default class Entries extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logocare.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.title}>Journal</Text>
            </View>
          </View>
        </View>
        <View style={styles.middleConatiner}>
          <View style={styles.sideContainer}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate('Day1')}>
              <Text>DAY 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate('Day2')}>
              <Text>DAY 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate('Day3')}>
              <Text>DAY 3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sideContainer1}>
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate('Day4')}>
              <Text>DAY 4</Text>
            </TouchableOpacity>
            
             <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate('Day5')}>
              <Text>DAY 5</Text>
            </TouchableOpacity>        
            <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate('Day6')}>
              <Text>DAY 6</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#15193c"
  },
  topContainer: {
    flex:0.12,
    backgroundColor:"#cc6699",

    borderRadius: RFValue(10),
  },
  middleConatiner: {
    flex: 0.8,
    backgroundColor:"#ffcce6",
   borderRadius: RFValue(70),
  },
  sideContainer: {
    flex: 0.7,
    backgroundColor: '#ffcce6',
    borderRadius: RFValue(70),
    width: RFValue(180),
    height: RFValue(900),
    marginLeft: RFValue(10),
  },
  sideContainer1: {
    flex: 0.7,
    backgroundColor: '#ffcce6',

    borderRadius: RFValue(70),
    width: RFValue(180),
    height: RFValue(800),

    marginLeft: RFValue(180),
    marginTop: RFValue(-505),
  },
  box: {
    width: RFValue(100),
    height: RFValue(100),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: RFValue(40),
    marginLeft: RFValue(40),
    borderRadius: RFValue(0),
    backgroundColor: '#e6e6ff',
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginRight: -10,
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(10),
  },
  appTitle: {
    flex: 1.5,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',

    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 1.5,
    justifyContent: 'center',
    // backgroundColor:"pink"
  },
});
