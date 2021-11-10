import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CupertinoFooter2({navigation}) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={()=> navigation.navigate("Chat")} style={styles.btnWrapper1}>
        <EntypoIcon
          name="chat"
          style={styles.icon3}
        ></EntypoIcon>

      </TouchableOpacity>

      <TouchableOpacity style={styles.btnWrapper1} onPress={()=>alert("home")}>
        <MaterialCommunityIconsIcon
          name="home-outline"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>

      </TouchableOpacity>


      <TouchableOpacity style={styles.btnWrapper1}  onPress={()=> navigation.navigate("Sacola")} >
        <FontAwesomeIcon
          name="shopping-bag"
          style={styles.icon3}
        ></FontAwesomeIcon>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnWrapper1}  onPress={()=> navigation.navigate("PerfilUsuario")}>
        <FontAwesomeIcon
          name="user-circle-o"
          style={styles.icon3}
        ></FontAwesomeIcon>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:55,
    flexDirection: "row",
  //  backgroundColor: "red",
    justifyContent: "space-between",
   // position:'absolute'
   paddingLeft:20,
   paddingRight:20
  },
  btnWrapper1: {
   // backgroundColor: "white",
    width:50,
    height:50,
    flex: 0.16,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 0,
    marginRight: 0
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    marginRight: 0
  },
  btn1Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    marginRight: 0
  },
  btnWrapper3: {
    flex: 0.16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(74,144,226,1)",
    borderRadius: 42,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    marginRight: 0,
    color: "rgba(250,250,250,1)"
  },
  btn3Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper4: {
    flex: 0.16,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 0,
    marginRight: 0
  },
  icon3: {
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    //marginRight: 0,
    color: "#616161"
  },
  btn4Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper2: {
    flex: 0.16,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 0,
    marginRight: 0
  },
  icon1: {

    alignItems:'center',
    //alignContent:'center',
    alignSelf:'center',
    //opacity: 0.8,
    fontSize: 24,
    marginRight: 0,
    color: "#616161"
  },
  btnWrapper5: {
    flex: 0.16,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 0,
    marginRight: 0
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  btn5Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  }
});

export default CupertinoFooter2;
