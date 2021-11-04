import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function MenuButtun(props) {
  return (
    <View style={styles.container}>
        <View style={{display:'flex', flexDirection:'row', alignSelf:'center', alignItems:'center', alignContent:'space-around'}}>
<View style={{display:'flex', flexDirection:'column',}}>

      <View style={styles.rect33}>
        <Image
          source={require("../../assets/veterinario.png")}
          resizeMode="contain"
          style={styles.image4}
          ></Image>
        <Text style={styles.agendarConsultas}>Agendar Consultas</Text>
          </View>
      </View>

      <View style={{display:'flex', flexDirection:'column', marginLeft:40}}>

      <View style={styles.rect}>
        <Image
          source={require("../../assets/shampoo-pet.png")}
          resizeMode="contain"
          style={styles.image2}
          ></Image>
        <Text style={styles.produtosDeLimpeza}>Produtos de Limpeza</Text>
      </View>
      </View>
              </View>

      <View style={styles.rect30}>
          <View style={styles.loremIpsum4Row}>

          <View style={styles.image3Stack}>
            <Image
              source={require("../../assets/pet-shop.png")}
              resizeMode="contain"
              style={styles.image3}
              ></Image>
            <Text style={styles.banhoETosa}>Banho e Tosa</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    //flexDirection: "row",
    marginTop: 21,
    marginLeft: 18,
    marginRight: 37,
    backgroundColor: "red",
  },
  rect: {
    //top: 267,
    //left: 149,
    width: 149,
    height: 100,
    //position: "absolute",
    backgroundColor: "rgba(224,220,44,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    elevation: 30,
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  image2: {
    width: 56,
    height: 56,
    marginTop: 12,
    marginLeft: 47,
  },
  produtosDeLimpeza: {
    ////fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 13,
    marginTop: 2,
    marginLeft: 14,
  },
  rect30: {

    width: 149,
    height: 100,
    //position: "absolute",
    backgroundColor: "rgba(90,200,250,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    elevation: 30,
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  loremIpsum4Row: {
    height: 75,
    //flexDirection: "row",
    //flex: 1,
    //marginRight: 34,
    marginLeft: 22,
    marginTop: 12,
  },
  loremIpsum4: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 73,
  },
  image3Stack: {
    width: 84,
    height: 75,
    marginLeft: 9,
  },
  image3: {
    top: 0,
    left: 12,
    width: 60,
    height: 60,
    position: "absolute",
  },
  banhoETosa: {
    top: 57,

    //position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
  },
  rect33: {
    width: 149,
    height: 100,
    backgroundColor: "rgba(109,222,167,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    elevation: 30,
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  image4: {
    width: 54,
    height: 54,
    marginTop: 12,
    marginLeft: 48,
  },
  agendarConsultas: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 16,
  },
  rect34: {
    width: 149,
    height: 100,
    backgroundColor: "rgba(232,169,114,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    elevation: 30,
    shadowOpacity: 0.12,
    shadowRadius: 10,
    marginLeft: 22,
  },
  loremIpsum5: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 72,
  },
  image5Stack: {
    width: 76,
    height: 58,
    marginTop: 13,
    marginLeft: 36,
  },
  image5: {
    top: 0,
    left: 22,
    width: 54,
    height: 54,
    position: "absolute",
  },

  image6: {
    top: 34,
    left: 0,
    width: 24,
    height: 24,
    position: "absolute",
  },

  racoesEPetiscos: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 2,
    marginLeft: 18,
  },
});

export default MenuButtun;
