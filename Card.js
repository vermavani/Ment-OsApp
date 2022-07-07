import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import firebase from 'firebase';

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      caption: '',
      entry: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let caption, authorT, entry;
    await firebase
      .database()
      .ref('/posts/')
      .on('value', function (snapshot) {
        authorT = snapshot.val().author;
        caption = snapshot.val().caption;
        entry = snapshot.val().entry;
      });
    this.setState({
      author: authorT,
      caption: caption,
      entry: entry,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.screenContainer}>
          <Text style={styles.text}>Your entry has been added</Text>
          <View style={styles.dataContainer}>
            <Text style={styles.nameText}>{this.state.authorT}</Text>
            <Text style={styles.nameText}>{this.state.caption}</Text>
            <Text style={styles.nameText}>{this.state.entry}</Text>
          </View>

          <View style={{ flex: 0.3 }} />
        </View>
        <View style={{ flex: 0.08 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  dataContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
    text: {
    flex: 0.07,
    flexDirection: "center",
    marginLeft:20
  },

  screenContainer: {
    flex:0.06,

    margin: RFValue(50),
    backgroundColor: "white",
    borderRadius: RFValue(20),
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2
  },
});
