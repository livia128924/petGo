import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { DatabaseConnection } from "../database/database";
import foto from "../assets/1781065_filhotes_cópia.jpg"
const db = DatabaseConnection.getConnection();
const SAM = require("../assets/1781065_filhotes_cópia.jpg");
const petHouse = require("../assets/Biscoito_Pedigree_Biscrok_Multi_para_Cães_Adultos_31019021_500g.jpg");
const eliminador = require("../assets/PS_Care_Eliminador_de_Odores_Pet_Society_1932463.jpg");
const Auau = require("../assets/shampoo-pet.png");

function Sacola({ navigation }) {
  const [precoValue, setPrecoValue] =useState(35);
  const [floatValue, setfloatValue] =useState(90);

  const [listItem, setListItem] =useState([

     {id:"1", valor:"24,90",descricao: "Ração para gato",foto: SAM},
     {id:"2", valor:"25,39",descricao: "Petisco para pet",foto: petHouse},
     {id:"3", valor:"18,90",descricao: "PS Care Eliminador de Odores Pet Society",foto: eliminador},
  ]);



  // useEffect(()=> {
  //   db.transaction(
  //     (tx) => {
  //       tx.executeSql(
  //         "select * from carrinho ",
  //         [],
  //         (tx, results) => {
  //           var temp = [];
  //           for (let i = 0; i < results.rows.length; ++i) {
  //             temp.push({
  //               id: results.rows.item(i).codigo,
  //               valor: results.rows.item(i).valor,
  //               descricao: results.rows.item(i).descricao,
  //               foto: results.rows.item(i).foto,
  //             });
  //           }
  //           setListItem(temp);
  //         }
  //       );
  //     },
  //     (err) => {
  //       console.error("There was a problem with the tx", err);
  //       return true;
  //     },
  //     (success) => {
  //       console.error("deu tudo certo", success);

  //     }
  //   );

  // })


  return (
    <View style={styles.container}>

    <View>
    {[...listItem].map((item, index) => (
      <TouchableOpacity  key={item.id}>
      <View
        style={{
          height: 150,
          width: "89%",
          backgroundColor: "white",
          alignContent: "center",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 20,
        }}
        >
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Image
           source={item.foto}
            resizeMode="stretch"
            style={styles.image}
            ></Image>
          <View style={{ flexDirection: "column", width:'35%', marginRight:20 }}>
            <Text>{item.descricao}</Text>
            <Text
              style={{
                height: 55,
                width: 145,
                marginTop: 10,
                fontSize: 10,
              }}
            >
              -Receita sem corantes artificiais; - Com Taurina, vitaminas e
              minerais para os melhores cuidados;
            </Text>
          </View>
          <View style={{ flexDirection: "column", }}>
            <Text>R${item.valor}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>

            <Button
              buttonStyle={{ width:'auto', height:'auto', marginRight:20}}
              title=""
              icon={
                <Icon
                name="plus"
                size={15}
                color="white"
                style={{justifyContent:'center', alignSelf:'center', alignItems:'center',}}
                />
              }
              //onPress={() => setPrecoValue(precoValue +1)}
              />

            <Button
              buttonStyle={{ width:'auto', height:'auto'}}
              title=""
              icon={
                <Icon
                name="minus"
                size={15}
                color="white"
                style={{justifyContent:'center', alignSelf:'center', alignItems:'center',}}
                />
              }
              //  onPress={() => setPrecoValue(precoValue -1)}
              />
              </View>
          </View>
        </View>
        {/* <View style={{width:'100%', height:1, backgroundColor:'black', marginTop:10}}></View> */}
        {/* <View style={{flexDirection:'row', alignItems:'flex-end', alignSelf:'flex-end', marginRight:10}}>
            <Text style={{color:'black'}}>
            Preço Total
            </Text>
            <Text style={{marginLeft:10}}>
            R$ {precoValue},00
            </Text>
          </View> */}
      </View>
    </TouchableOpacity>
     ))}
    </View>


    <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
        <TouchableOpacity
          style={styles.materialButtonPrimary}
          onPress={() => alert("Deseja finalizar a compra?")}
          >
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: "center",
    alignItems: "center",
    top: 10,
    fontSize: 20,
    color: "white",
  },

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
   // marginLeft: 52,
  },
});

export default Sacola;
