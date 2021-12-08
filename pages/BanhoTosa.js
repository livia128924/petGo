import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
import { TouchableOpacity } from "react-native-gesture-handler";

function BanhoTosa({navigation}) {


  return (
    <View style={styles.container}>
   <Text style={styles.selec}>Selecione a opção desejada:</Text>
   <View style={{justifyContent:'center', alignItems:'center'}}>


   <TouchableOpacity  onPress={()=> navigation.navigate("AgendarBanho")}>
     <BackgroundImage style={styles.imageBanhoTosa}
       source={require("../assets/banho.png")}/>
         <Text style={styles.textBanhoTosa}>Banho</Text>
   </TouchableOpacity>

   <TouchableOpacity onPress={()=> navigation.navigate("AgendarTosa")}>
     <BackgroundImage style={styles.imageBanhoTosa}
       source={require("../assets/tosa.jpg")}/>
         <Text style={styles.textBanhoTosa}>Tosa</Text>
   </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  selec: {
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20

  },
  imageBanhoTosa: {
    marginTop: 50,
   // marginLeft: 30,
    width: 300,
    height: 150,
    opacity: 0.5,
    borderRadius: 5,
    borderWidth: 2
  },
  textBanhoTosa: {
    fontSize: 40,
    alignSelf: "center",
    marginTop: 90,
    justifyContent: "center",
    position: "absolute",
    fontWeight: "bold",
  }
});

export default BanhoTosa;