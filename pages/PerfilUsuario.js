import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  SectionList,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogBox } from 'react-native'

// LogBox.ignoreWarnings([
// 	'VirtualizedLists should never be nested', // TODO: Remove when fixed
// ])
function PerfilUsuario({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
      style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ alignSelf: "center", marginTop: 30 }}>
          <Avatar
            rounded
            size="large"
            source={require("../assets/usericon.png")}
          >
            <Avatar.Accessory
              size={20}
              onPress={() => alert("alterar imagem de perfil")}
            />
          </Avatar>
        </View>

        <TextInput style={styles.username} placeholder="Nome de usuário" />
        <View style={styles.section}>
          <SectionList
            sections={[
              {
                title: "Pets",
                data: ["Animal 1", "Animal 2", "Animal 3", "Animal 4"],
              },
            ]}
            renderItem={({ item }) => <Text style={styles.bodies}>{item}</Text>}
            renderSectionHeader={({ section }) => (
              <Text style={styles.heads}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <TouchableOpacity
          style={styles.ButtonPet}
          onPress={() => navigation.navigate("NovoPet")}
        >
          <Text style={styles.buttonText1}>Adicionar Pet</Text>
        </TouchableOpacity>
        <View style={styles.section}>
          <Text style={styles.heads}> E-mail</Text>
          <TextInput style={styles.bodies} placeholder="E-mail" />
        </View>
        <View style={styles.section}>
          <Text style={styles.heads}>Telefone</Text>
          <TextInput style={styles.bodies} placeholder="Telefone" />
        </View>

        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity
            style={styles.ButtonConfirm}
            onPress={() => alert("Mudanças salvas com sucesso!")}
          >
            <Text style={styles.buttonText2}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  username: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 20
  },
  section:{
    width:"80%",
    alignSelf: "center",
    marginTop: 30
  },
  heads: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    color:"black"
  },
  bodies: {
    padding: 10,
    fontSize: 16,
    height: 44,
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  ButtonPet: {
    marginTop: 10,
    height: 44,
    width: "80%",
    backgroundColor: 'rgba(3,194,205,1)',
    alignSelf: "center",
    borderRadius: 6
  },
  buttonText1: {
     fontSize: 16,
     marginTop: 10,
     marginLeft: 10,
     alignSelf: "center"
  },
  ButtonConfirm: {
    marginTop: 40,
    height: 52,
    width: 150,
    borderRadius: 6,
    backgroundColor: "rgba(3,194,205,1)",
    alignSelf: "center",
    marginBottom: 60
  },
  buttonText2: {
    alignSelf: "center",
    marginTop: 15,
    fontSize: 20
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

export default PerfilUsuario;
