import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    ScrollView,
    TextInput,
    Button,
    Alert
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import firebase from "firebase";
export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            dropdownHeight: 40
        };
    }

  async addStory() {
    if (
      this.state.caption &&
      this.state.story &&
      this.state.entry &&
      this.state.learn &&
      this.state.moment &&
      this.state.plan
    ) {
      let storyData = {
       
        caption: this.state.caption,
        story: this.state.story,
        entry: this.state.entry,
        learn: this.state.learn,
        moment: this.state.moment,
        plan: this.state.plan,
        author: firebase.auth().currentUser.displayName,
        created_on: new Date(),
        author_uid: firebase.auth().currentUser.uid,
        likes: 0
      };
      await firebase
        .database()
        .ref(
          "/posts/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(storyData)
        .then(function(snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("Records");
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }

  fetchUser = () => {
    let theme;
    firebase
      .database()
      .ref("/users/" + firebase.auth().currentUser.uid)
      .on("value", snapshot => {
      });
  };


    
    render() {
      
        return (
            <View style={styles.container}>
            <ScrollView>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image
                            source={require("../assets/logocare.png")}
                            style={styles.iconImage}
                        ></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Write-It-Out</Text>
                    </View>
                </View>
                
                        <TextInput
                            style={styles.question}
                            onChangeText={caption => this.setState({ caption })}
                            placeholder={"Date-Time"}
                            placeholderTextColor="white"
                        />
                 
                
               <TextInput
                  style={[
                   styles.inputFontB,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={story => this.setState({ story })}
                  placeholder={"How was your day?"}
                  multiline={true}
                  numberOfLines={20}
                  placeholderTextColor="white"
                   
                />
                 <TextInput
                  style={[
                   styles.inputFont,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={entry => this.setState({ entry })}
                  placeholder={"What are you grateful for?"}
                  multiline={true}
                  numberOfLines={10}
                  placeholderTextColor="white"
                   
                />
                  <TextInput
                  style={[
                   styles.inputFont,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={learn=> this.setState({learn})}
                  placeholder={"What did you learn from today?"}
                  multiline={true}
                  numberOfLines={30}
                  placeholderTextColor="white"
                   />

                   <TextInput
                  style={[
                   styles.inputFontBB,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={moment=> this.setState({ moment})}
                  placeholder={"What was the most peaceful moment during the day?"}
                  multiline={true}
                  numberOfLines={30}
                  placeholderTextColor="white"
                   />
                    <TextInput
                  style={[
                   styles.inputFontBB,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={plan=> this.setState({ plan})}
                  placeholder={"Plans for today/Tomorrow?"}
                  multiline={true}
                  numberOfLines={30}
                  placeholderTextColor="white"
                   />
                     <View style={styles.submitButton}>
                <Button
                  onPress={() => this.addStory()}
                  title="Submit"
                  color="#841584"
                  
                />
                <Text style={styles.appTitle}>added</Text>
              </View>
              </ScrollView>
                    </View>
               
        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
        flex: 0.3,
        flexDirection: "row"
    },
    appIcon: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
    },
    appTitleText: {
        color: "white",
        fontSize: RFValue(35)
    },
     inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
    question:{
      color:"white",
           height: RFValue(40),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
    },
    
    inputFont: {
        height: RFValue(50),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white"
    },
      inputFontB: {
        height: RFValue(90),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white"
    },
      submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  },
       inputFontBB:{
        height: RFValue(70),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        paddingLeft: RFValue(10),
        color: "white"
    }
});