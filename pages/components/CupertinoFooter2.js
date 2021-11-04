import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <EntypoIcon
          name="chat"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "#616161"
            }
          ]}
        ></EntypoIcon>
        <Text
          style={[
            styles.btn1Caption,
            {
              color: props.active ? "#007AFF" : "#9E9E9E"
            }
          ]}
        ></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterialCommunityIconsIcon
          name="home-outline"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.btn3Caption}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <EntypoIcon name="shopping-cart" style={styles.icon3}></EntypoIcon>
        <Text style={styles.btn4Caption}></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <FontAwesomeIcon
          name="shopping-bag"
          style={styles.icon1}
        ></FontAwesomeIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <FontAwesomeIcon
          name="user-circle-o"
          style={styles.icon4}
        ></FontAwesomeIcon>
        <Text style={styles.btn5Caption}></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between"
  },
  btnWrapper1: {
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
    flex: 0.15,
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
    color: "rgba(250,250,250,1)"
  },
  btn3Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper4: {
    flex: 0.23,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  btn4Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper2: {
    flex: 0.23,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  btnWrapper5: {
    flex: 0.23,
    alignItems: "center",
    justifyContent: "center"
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
