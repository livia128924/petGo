import React, { Component, useEffect, useState } from "react";
import {
  CheckBox,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Avatar, Accessory } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
//import Checkbox from "expo-checkbox";
import RadioButton from "react-native-radio-button";
import { Button } from "react-native-elements";
import Constants from "expo-constants";

function NovoPet({ navigation }) {

  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
<View>
    <Text>lasjdnsldnfs</Text>
</View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ResultListContainerStyle: {
    flexDirection: "row",

  },
  ResultListStyle: {
    // marginTop: 13,
    width: "85%",
    //marginRight: 5,
    // marginTop: 20,
    height: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
    color: "black",
    padding: 10,
    //backgroundColor: "red",
    flexDirection: "row",
  },
  inputStyle: {
    // marginTop: 13,
    width: "70%",
    marginRight: 5,
    //marginTop: 20,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
    color: "black",
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  checkbox: {
    //marginTop:5,
    //    marginLeft:30,
    // alignContent:'center',
    //    alignItems: 'center',
    //    alignSelf: 'center',
  },
  checkboxlabel: {
    flexDirection: "row",
    marginTop: 25,
    height: 25,
    width: "85%",
    //marginLeft:30,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
  },
  checkboxlabelResult: {
    //flexDirection: "row",
    marginTop: 30,
    height: 25,
    width: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    // backgroundColor:'blue'
  },
  checkboxText: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // position:'absolute',
    marginTop: 9,
    //marginLeft:40,
  },

  rect37: {
    top: 17,
    //left: 6,
    width: 65,
    height: 61,
    borderRadius: 30,
    // position: "absolute",
    backgroundColor: "#E6E6E6",
  },
  rect: {
    width: 277,
    height: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(224,229,234,1)",
    marginTop: 320,
    marginLeft: 52,
  },
  eMail: {
    color: "rgba(144,144,144,1)",
    marginTop: 18,
    marginLeft: 23,
  },
  rect2: {
    width: 277,
    height: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(224,229,234,1)",
    marginTop: 11,
    marginLeft: 52,
  },
  senha: {
    color: "rgba(144,144,144,1)",
    fontSize: 14,
    marginTop: 17,
    marginLeft: 23,
  },
  login: {
    color: "rgba(3,194,205,1)",
    fontSize: 30,
    marginTop: -191,
    marginLeft: 52,
  },
  naoPossuoCadastro: {
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 468,
    marginLeft: 124,
  },
  icon: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
  },
  entrarPeloFacebook: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 11,
    marginTop: 11,
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: -173,
    marginLeft: 67,
    marginRight: 126,
  },
  icon2: {
    color: "rgba(74,144,226,1)",
    fontSize: 40,
  },
  entrarComOGoogle: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 12,
    marginTop: 9,
  },
  icon2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 69,
    marginRight: 126,
  },
  ou: {
    color: "#121212",
    fontSize: 20,
    marginTop: -144,
    alignSelf: "center",
  },
  login1: {
    color: "rgba(130,130,130,1)",
    fontSize: 13,
    marginTop: -300,
    marginLeft: 52,
  },
  image: {
    height: 96,
    width: 124,
    marginTop: -181,
    alignSelf: "center",
  },
  esqueceuSuaSenha: {
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 232,
    marginLeft: 196,
  },
  materialButtonPrimary: {
    height: 52,
    width: 277,
    borderRadius: 6,
    backgroundColor: "rgba(3,194,205,1)",
    marginTop: 14,
    marginLeft: 52,
  },
});

export default NovoPet;
