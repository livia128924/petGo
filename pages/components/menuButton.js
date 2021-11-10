import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

function MenuButtun({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity  onPress={()=> navigation.navigate("AgendarConsulta")}>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View style={styles.card_button_green}>
              <Image
                source={require("../../assets/veterinario.png")}
                resizeMode="contain"
                style={styles.image4}
              ></Image>
              <Text style={styles.agendarConsultas}>Agendar Consultas</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=> navigation.navigate("ProdutosLimpeza")}>
          <View
            style={{ display: "flex", flexDirection: "column", marginLeft: 28 }}
          >
            <View style={styles.card_button_yellow}>
              <Image
                source={require("../../assets/shampoo-pet.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image>
              <Text style={styles.produtosDeLimpeza}>Produtos de Limpeza</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
<View    style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
        }}>

      <View style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
        <TouchableOpacity  onPress={()=> navigation.navigate("BanhoTosa")}>
          <View style={styles.card_button_blue}>
            <View style={styles.image3Stack}>
              <Image
                source={require("../../assets/pet-shop.png")}
                resizeMode="contain"
                style={styles.image3}
                ></Image>
              <Text style={styles.banhoETosa}>Banho e Tosa</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ display: "flex", flexDirection: "column", marginTop: 20 }}>
        <TouchableOpacity  onPress={()=> navigation.navigate("RacoesPetisco")}>
          <View style={styles.rect34}>
            <View style={styles.image5Stack}>
              <Image
                source={require("../../assets/racao-para-animais-de-estimacao.png")}
                resizeMode="contain"
                style={styles.image5}
                ></Image>
              <Image
                source={require("../../assets/comida-de-cao.png")}
                resizeMode="contain"
                style={styles.image6}
                ></Image>
            </View>
            <Text style={styles.racoesEPetiscos}>Rações e Petiscos</Text>
          </View>
        </TouchableOpacity>
      </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    //flexDirection: "row",
    marginTop: 21,
    marginLeft: 30,
    marginRight: 37,
    // backgroundColor: "red",
  },
  card_button_yellow: {
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
    // elevation: 30,
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
  card_button_blue: {
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
    //  elevation: 30,
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  loremIpsum4: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 73,
  },
  image3Stack: {
    width: 90,
    height: 75,
    // marginLeft: 9,
    //backgroundColor:'red'
    //flexDirection: "row",
    //flex: 1,
    //marginRight: 34,
    marginLeft: 30,
    marginTop: 12,
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
  card_button_green: {
    width: 149,
    height: 100,
    backgroundColor: "rgba(109,222,167,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    // elevation: 3,
    shadowOpacity: 0.12,
    //shadowRadius: 10,
  },
  image4: {
    width: 54,
    height: 54,
    marginTop: 12,
    marginLeft: 48,
    //backgroundColor:'red'
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
    //elevation: 30,
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
