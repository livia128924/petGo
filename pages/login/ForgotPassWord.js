import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, AsyncStorage } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
//import Picker from 'react-native-picker-select';

function ForgotPassword({navigation}) {


  return (
    <View style={styles.container}>
      <Text style={styles.recsenha}> Recuperar Senha </Text>
      <View style={styles.rect1}>
   <TextInput style={styles.input} placeholder="E-mail" />
   </View>
   <Text style={styles.eMail1}> Enviaremos sua nova senha por e-mail. </Text>
   <TouchableOpacity
    style={styles.materialButtonSecondary}
    >
      <Text style={styles.buttonText}>Confirmar</Text>
   </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  recsenha: {
    color: "rgba(3,194,205,1)",
    marginTop: 40,
    fontSize: 30,
    marginLeft: 40
  },
  eMail1: {
    color: "rgba(130,130,130,1)",
    fontSize: 13,
    marginLeft: 50
  },
  input: {
    color: "rgba(144,144,144,1)",
    marginTop: 10,
    marginLeft: 20
  },
  rect: {
    width: 277,
    height: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(224,229,234,1)",
    marginTop: 320,
    marginLeft: 52
  },
  eMail: {
    color: "rgba(144,144,144,1)",
    marginTop: 18,
    marginLeft: 23
  },
  rect1: {
    width: 277,
    height: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(224,229,234,1)",
    marginTop: 50,
    marginLeft: 50
  },
  rect2: {
    width: 277,
    height: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgba(224,229,234,1)",
    marginTop: 11,
    marginLeft: 52
  },
  senha: {
    color: "rgba(144,144,144,1)",
    fontSize: 14,
    marginTop: 17,
    marginLeft: 23
  },
  login: {
    color: "rgba(3,194,205,1)",
    fontSize: 30,
    marginTop: -191,
    marginLeft: 52
  },
  naoPossuoCadastro: {
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 468,
    marginLeft: 124
  },
  icon: {
    color: "rgba(74,144,226,1)",
    fontSize: 40
  },
  entrarPeloFacebook: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 11,
    marginTop: 11
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: -173,
    marginLeft: 67,
    marginRight: 126
  },
  icon2: {
    color: "rgba(74,144,226,1)",
    fontSize: 40
  },
  entrarComOGoogle: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 12,
    marginTop: 9
  },
  icon2Row: {
    height: 44,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 69,
    marginRight: 126
  },
  ou: {
    color: "#121212",
    fontSize: 20,
    marginTop: -144,
    alignSelf: "center"
  },
  login1: {
    color: "rgba(130,130,130,1)",
    fontSize: 13,
    marginTop: -300,
    marginLeft: 52
  },
  image: {
    height: 96,
    width: 124,
    marginTop: -181,
    alignSelf: "center"
  },
  esqueceuSuaSenha: {
    color: "#121212",
    textDecorationLine: "underline",
    marginTop: 232,
    marginLeft: 196
  },
  buttonText:{
    marginTop: 10,
    marginLeft: 20
  },
  materialButtonPrimary: {
    height: 52,
    width: 277,
    borderRadius: 6,
    backgroundColor: "rgba(3,194,205,1)",
    marginTop: 14,
    marginLeft: 52
  },
  materialButtonSecondary: {
    height: 52,
    width: 277,
    borderRadius: 6,
    backgroundColor: "rgba(3,194,205,1)",
    marginTop: 30,
    marginLeft: 50
  },
});

export default ForgotPassword;
