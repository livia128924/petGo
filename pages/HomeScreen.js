import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Svg, { Ellipse } from "react-native-svg";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import CupertinoFooter2 from "./components/CupertinoFooter2";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import MenuButtun from "./components/menuButton";
import { ScrollView } from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
      <View style={styles.icon3Stack}>
        <View>
          {/* //logo */}
          <Image
            source={require("../assets/image_SRrA..png")}
            resizeMode="contain"
            style={styles.logo_style}
          ></Image>
        </View>

        <Text style={styles.nomeUsuarioStyle}>Ola, Livsia Silva</Text>

        <EvilIconsIcon name="bell" style={styles.notif_icon}></EvilIconsIcon>
      </View>

      {/* ///folder */}
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <View style={styles.rect31}>
          <Text style={styles.loremIpsum3}>
            Encontre o melhor {"\n"}para o seu pet
          </Text>
          <TouchableOpacity
            style={styles.cliqueAqui_button}
            onPress={() => alert("Parabens! Voce ganhou 10% de desconto")}
          >
            <Text style={styles.cliqueAqui}>Clique aqui</Text>
          </TouchableOpacity>

          <ImageBackground
            source={require("../assets/sdfsdfsdfsdf.png")}
            resizeMode="stretch"
            style={styles.image}
          ></ImageBackground>
        </View>
        {/* //fim do folder */}
      </View>

      <View>
        <MenuButtun  navigation= {navigation}></MenuButtun>
      </View>

      <View style={styles.rect36Row}>
        {/* <View style={styles.rect36}></View> sem necessidade*/}
        <View style={styles.rect37Stack}>
        <TouchableOpacity onPress={() => alert("gato")}>
          <View  style={{  width: 100, height: 100 }}>
            <View style={styles.rect37}></View>
            <Image
              source={require("../assets/sdasdasdasd.png")}
              resizeMode="cover"
              style={styles.image8}
            ></Image>
          </View>
          <Text style={{width:'50%',alignItems:'center', alignContent:'center', alignSelf:'center',
          }}>Gatos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("dog")}>
            <View style={{  width: 100, height: 100 }}>
              <View style={styles.rect37}></View>
              <Image
                source={require("../assets/labrador-desenho-png.png")}
                resizeMode="cover"
                style={styles.image8}
              ></Image>
            </View>
            <Text style={{width:'50%',alignItems:'center', alignContent:'center', alignSelf:'center',
          }}>Dogs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert("aves")}>
            <View style={{  width: 100, height: 100 }}>
              <View style={styles.rect37}></View>
              <Image
               source={require("../assets/aves2.png")}
                resizeMode="cover"
                style={styles.image8}
              ></Image>
            </View>
            <Text style={{width:'50%',alignItems:'center', alignContent:'center', alignSelf:'center',
          }}>Aves</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert("peixinho")}>
            <View style={{  width: 100, height: 100 }}>
              <View style={styles.rect37}></View>
              <Image
                 source={require("../assets/categoria-peixes.png")}
                resizeMode="cover"
                style={styles.image8}
              ></Image>
            </View>
            <Text style={{width:'50%',alignItems:'center', alignContent:'center', alignSelf:'center',
          }}>Peixes</Text>

          </TouchableOpacity>

        </View>
      </View>

      {/* <Text style={styles.marcasBemAvaliadas}>Marcas bem Avaliadas</Text> */}
      {/* //containerRow */}
      {/* <View style={styles.rect39Row}>
                <View style={styles.rect39}><Text>asdfas</Text></View>
                <View style={styles.rect40}></View>
                <View style={styles.rect41}></View>
                <View style={styles.loremIpsum6Stack}>
                  <Text style={styles.loremIpsum6}></Text>
                  <View style={styles.rect42}></View>
                </View>
              </View> */}
</ScrollView>
<View style={{top:80}}>
      <CupertinoFooter2  navigation= {navigation}></CupertinoFooter2>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  rect16: {
    width: "auto",
    height: 812,
    //backgroundColor: "green",
    borderRadius: 7,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 0.3,
    shadowRadius: 25,
  },

  icon3: {
    top: 5,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    height: 38,
    width: 26,
  },

  image: {
    //zIndex:1,
    //top: 24,
    left: 80,
    width: 249,
    height: 170,
    //backgroundColor:'red'
    position: "absolute",
  },
  image_imageStyle: {},
  ellipse5: {
    width: 18,
    height: 18,
    marginTop: 60,
    marginLeft: 164,
  },
  ellipse2: {
    width: 24,
    height: 24,
  },
  ellipse4: {
    width: 10,
    height: 10,
    marginLeft: 100,
    marginTop: 10,
  },
  ellipse2Row: {
    height: 24,
    flexDirection: "row",
    marginLeft: 54,
    marginRight: 70,
  },
  ellipse3: {
    width: 11,
    height: 11,
    marginTop: 17,
    marginLeft: 65,
  },
  logo_style: {
    position: "absolute",
    top: 0,
    left: 25,
    height: 56,
    width: 64,
  },
  nomeUsuarioStyle: {
    top: 56,
    left: 11,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 25,
  },

  notif_icon: {
    top: 5,
    right: 0,
    marginRight: 10,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 34,
    height: 36,
    width: 34,
  },
  rect31: {
    width: 326,
    height: 170,
    //position: "absolute",
    backgroundColor: "rgba(32,121,225,0.73)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    //elevation: 30,//oque ta acontecendo aqqqq
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },
  loremIpsum3: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 37,
    marginLeft: 18,
  },
  cliqueAqui_button: {
    //zIndex:15,
    position: "relative",
    width: 89,
    height: 35,
    top: 30,
    backgroundColor: "rgba(248,231,28,1)",
    borderRadius: 11,
    shadowColor: "rgba(255,255,255,1)",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.17,
    shadowRadius: 10,
    marginTop: 24,
    marginLeft: 25,
  },
  cliqueAqui: {
    //fontFamily: "roboto-regular",
    color: "rgba(45,40,40,1)",
    marginTop: 7,
    marginLeft: 7,
  },
  icon3Stack: {
    width: "100%",
    height: 100,
    //marginTop: 36,
    //backgroundColor:"green"
  },

  rect36: {
    width: 65,
    height: 61,
    backgroundColor: "red",
    borderRadius: 27,
    marginTop: 17,
  },
  rect37: {
    top: 17,
    left: 6,
    width: 65,
    height: 61,
    borderRadius: 30,
    // position: "absolute",
    backgroundColor: "#E6E6E6",
  },
  image8: {
    //  top: 11,
    position: "absolute",
    left: 0,
    width: 79,
    height: 71,
  },
  rect38: {
    top: 17,
    left: 77,
    width: 65,
    height: 61,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 27,
  },
  image9: {
    top: 0,
    left: 61,
    width: 107,
    height: 97,
    position: "absolute",
  },
  rect43: {
    top: 17,
    left: 152,
    width: 65,
    height: 61,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 27,
  },
  image11: {
    top: 11,
    left: 157,
    width: 67,
    height: 67,
    position: "absolute",
  },
  rect37Stack: {
    width: "100%",
    //height: 97,
    display: "flex",
    flexDirection: "row",
    // alignContent:'center',
    //alignSelf:'center',
    // alignItems:'center',
   // backgroundColor: "red",
  },
  rect36Row: {
    width: "100%",
    height: 97,
    flexDirection: "row",
    marginTop: 24,
    //padding:20,
    //marginLeft: 19,
    //marginRight: 65,
   // backgroundColor: "green",
  },
  marcasBemAvaliadas: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 18,
    marginLeft: 24,
  },
  rect39: {
    width: 72,
    height: 61,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
  },
  rect40: {
    width: 72,
    height: 61,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    marginLeft: 22,
  },
  rect41: {
    width: 72,
    height: 61,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    marginLeft: 19,
  },
  loremIpsum6: {
    top: 29,
    left: 19,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
  },
  rect42: {
    top: 0,
    left: 0,
    width: 72,
    height: 61,
    position: "absolute",
    backgroundColor: "rgba(232,232,232,1)",
    borderRadius: 20,
  },
  loremIpsum6Stack: {
    width: 72,
    height: 61,
    marginLeft: 18,
  },
  rect39Row: {
    height: 61,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 27,
    marginRight: 1,
  },
  operacoes: {
    top: 231,
    left: 15,
    width: 442,
    height: 122,
    position: "absolute",
    flexDirection: "row",
  },
  containerAzul: {
    width: 144,
    height: 122,
  },
  rect12: {
    width: 144,
    height: 122,
    backgroundColor: "rgba(74,192,226,1)",
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 0.3,
    shadowRadius: 25,
  },
  text2: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: 18,
    marginLeft: 17,
  },
  azul2: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 12,
    marginLeft: 52,
  },
  text: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 60,
  },
  categorias: {
    // fontFamily: "verdana-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 19,
    marginTop: 7,
    marginLeft: 15,
  },
  group: {
    width: 123,
    height: 4,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 11,
  },
  rect18: {
    width: 46,
    height: 4,
    backgroundColor: "rgba(80,227,194,1)",
  },
  rect19: {
    width: 80,
    height: 4,
    backgroundColor: "#E6E6E6",
  },
  rect18Row: {
    height: 4,
    flexDirection: "row",
    flex: 1,
    marginRight: -1,
    marginLeft: -2,
  },
  loremIpsum2: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 10,
    marginLeft: 11,
  },
  containerRosa: {
    width: 142,
    height: 120,
    marginLeft: 16,
  },
  rect13: {
    width: 142,
    height: 120,
    backgroundColor: "rgba(246,97,173,1)",
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 0.3,
    shadowRadius: 25,
  },
  azul6: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 19,
    marginLeft: 20,
  },
  azul5: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 49,
  },
  azul4: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 7,
    marginLeft: 57,
  },
  group1: {
    width: 127,
    height: 3,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 11,
  },
  rect20: {
    width: 36,
    height: 4,
    backgroundColor: "rgba(80,227,194,1)",
  },
  rect21: {
    width: 88,
    height: 4,
    backgroundColor: "#E6E6E6",
  },
  rect20Row: {
    height: 4,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: -2,
  },
  processosEnviados: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 11,
    marginLeft: 12,
  },
  containerAmarelo: {
    width: 103,
    height: 77,
    marginLeft: 38,
    marginTop: 22,
  },
  rect17: {
    width: 142,
    height: 120,
    backgroundColor: "rgba(243,229,69,1)",
    borderRadius: 22,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 75,
    shadowOpacity: 0.3,
    shadowRadius: 25,
    marginTop: -22,
    marginLeft: -19,
  },
  azul7: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 22,
    marginLeft: 24,
  },
  azul8: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 9,
    marginLeft: 53,
  },
  azul9: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 61,
  },
  metasFinalizados: {
    //fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 34,
    marginLeft: 12,
  },
  group2: {
    width: 103,
    height: 4,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 19,
  },
  rect22: {
    width: 25,
    height: 4,
    backgroundColor: "rgba(80,227,194,1)",
  },
  rect23: {
    width: 79,
    height: 4,
    backgroundColor: "#E6E6E6",
  },
  rect22Row: {
    height: 4,
    flexDirection: "row",
    flex: 1,
    marginRight: 1,
    marginLeft: -2,
  },
  containerAzulRow: {
    height: 122,
    flexDirection: "row",
    flex: 1,
    marginRight: -1,
  },
  image7: {
    left: 150,
    width: 113,
    height: 102,
    // position: "absolute",
    // top: 547,
    backgroundColor: "white",
  },
  cupertinoFooter2: {
   height: 50,
    //width: 375,
  // position: "relative",
    //left: 2,
    //top: 738,

  },
  rect44: {
    top: 565,
    left: 319,
    width: 65,
    height: 61,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 27,
  },
  tudoParaGatosStack: {
    top: 0,
    left: 0,
    width: 457,
    height: 812,
    position: "absolute",
    backgroundColor: "red",
  },
  tudoParaDogs: {
    top: 709,
    left: 155,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
  },
  tudoParaAves: {
    top: 710,
    left: 289,
    position: "absolute",
    //fontFamily: "roboto-regular",
    color: "#121212",
  },
});

export default HomeScreen;
