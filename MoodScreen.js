import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Button
} from 'react-native';

import {RFValue}  from 'react-native-responsive-fontsize';

export default class MoodScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.topContainer}>
          <Text style={styles.title}>Mood Screen</Text>
          
            <TouchableOpacity
              >
              <Image
                source={require('../assets/happy.png')}
                style={styles.con}></Image>
         
                <Text style={styles.iText}>EXCITED</Text>
            </TouchableOpacity>
            <TouchableOpacity   
              >
              <Image
                source={require('../assets/ok.png')}
                style={styles.con}></Image>
         
                <Text style={styles.iText1}>HAPPY</Text>
            </TouchableOpacity>
             <TouchableOpacity   
              >
              <Image
                source={require('../assets/ill.png')}
                style={styles.con1}></Image>
         
                <Text style={styles.iText}>OK</Text>
            </TouchableOpacity>
                <TouchableOpacity   
              >
              <Image
                source={require('../assets/frustrated.png')}
                style={styles.con2}></Image>
         
                <Text style={styles.iText1}>FRUSTRATED</Text>
            </TouchableOpacity>
             <TouchableOpacity   
              >
              <Image
                source={require('../assets/angry.png')}
                style={styles.con1}></Image>
         
                <Text style={styles.iText}>ANGRY</Text>
            </TouchableOpacity>
              <TouchableOpacity
              style={styles.box}
              onPress={() => this.props.navigation.navigate("Create")}>
              <Text>Next</Text>
            </TouchableOpacity>
       
          </View>
        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
  },
  topContainer: {
    flex: 0.1,
    backgroundColor: '#ff1a8c',
    borderRadius: RFValue(40),
  },

  title: {
    color: 'black',
    fontSize: 40,
    marginRight: 10,
    marginLeft: 45,
  },
 
  con:{
    marginTop:-40,
    marginLeft:30
  },
    box: {
    width: RFValue(180),
    height: RFValue(40),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: RFValue(40),
    marginLeft: RFValue(20),
    borderRadius: RFValue(0),
    backgroundColor: "#008ae6",
  },
  con1:{
    marginTop:-0,
    marginLeft:40
  },
  con2:{
    marginTop:-20,
    marginLeft:50
  },
  iText:{
    marginTop:-120,
    marginLeft:150,
    fontSize:30,
    color:"white"
  },
   iText1:{
    marginTop:-160,
    marginLeft:150,
    fontSize:30,
    color:"white"
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(5),
  },
});
