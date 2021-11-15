import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
function Sacola({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity >


      <View
        style={{
          height: 200,
          width: "89%",
          backgroundColor: "white",
          alignContent: "center",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text>Adcione asdasdprodutos para sua sacola</Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Image
            source={require("../assets/Ração_Whiskas_Carne.jpg")}
            resizeMode="stretch"
            style={styles.image}
          ></Image>
          <View style={{ flexDirection: "column" }}>
            <Text>Racao para gato</Text>
            <Text
              style={{
                height: 55,
                width: 145,
                marginTop: 10,
                fontSize: 10,
                backgroundColor: "red",
              }}
            >
              -Receita sem corantes artificiais; - Com Taurina, vitaminas e
              minerais para os melhores cuidados;
            </Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text>R$ 35,90</Text>
            <View style={{flexDirection:'row'}}>

            <Button
              buttonStyle={{ width:'auto', height:'auto', alignContent:'center', alignItems:'center', alignSelf:'center' }}
              title=""
              icon={
                <Icon
                name="plus"
                size={15}
                color="white"
                style={{justifyContent:'center', alignSelf:'center', alignItems:'center',}}
                />
              }
              onPress={() => alert("mais")}
              />

            <Button
              buttonStyle={{ width:'auto', height:'auto', alignContent:'center', alignItems:'center', alignSelf:'center' }}
              title=""
              icon={
                <Icon
                name="minus"
                size={15}
                color="white"
                style={{justifyContent:'center', alignSelf:'center', alignItems:'center',}}
                />
              }
              onPress={() => alert("menos")}
              />
              </View>
          </View>
        </View>
        <View style={{width:'100%', height:1, backgroundColor:'black', marginTop:10}}>
          <View style={{flexDirection:'row', alignItems:'flex-end', alignSelf:'flex-end'}}>
            <Text>
              Preço Total
            </Text>
            <Text style={{marginLeft:10}}>
              R$ 100,00
            </Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    // marginTop: -181,
    alignSelf: "flex-start",
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

export default Sacola;
