import React, { Component, useEffect, useState } from "react";

import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { icon } from "../assets/vet_icon.jpg";

function Chat({ navigation }) {
  const image = require("../assets/shampoo-pet.png");
  const imag2 = require("../assets/shampoo-pet.png");
  const SAM = require("../assets/shampoo-pet.png");
  const petHouse = require("../assets/shampoo-pet.png");
  const BanhoeCia = require("../assets/shampoo-pet.png");
  const Auau = require("../assets/shampoo-pet.png");

  const [users, setUsers] = useState([
    {
    name: "Clinica Amor Pet",
    avatar: image,
    description: "(92) 3024-6531"
   },
    {
      name: "Manaus Au Aus Clínica Veterinária",
      avatar: Auau,
      description: "(92) 98130-9090",
    },
    {
      name: "Banho e Cia",
      avatar: BanhoeCia,
      description: "(92) 99115-0283",
    },
    {
      name: "Pet House & Cia",
      avatar: petHouse,
      description: "(92) 98556-7881",
    },
    {
      name: "PET SAM",
      avatar: SAM,
      description: "(92) 98152-2998",
    },
  ]);

function chatW(i){
 // alert(i);
 navigation.navigate('ChatScreen', {
  itemId: i,
  //otherParam: 'anything you want here',
});
}
  return (

      <View style={styles.container}>
        <Text style={{fontSize:20, marginTop:20, marginLeft:20,marginRight:20}}>Converse com a clinica pelo chat</Text>



      <View style={{ marginTop: 20 }}>
        {users.map((l, i) => (
          <TouchableOpacity  key={i} onPress={()=> chatW(l.name)}>
          <ListItem bottomDivider>
            <Avatar size="medium" rounded source={l.avatar} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
        ))}
      </View>
      </View>

)
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
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
  materialButtonPrimary: {
    height: 52,
    width: 277,
    borderRadius: 6,
    backgroundColor: "rgba(3,194,205,1)",
    marginTop: 14,
    marginLeft: 52
  }
});

export default Chat;
