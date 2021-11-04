import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

function Untitled1({navigation}) {
//   useEffect(() => {

//     AsyncStorage.getItem('codigo').then(codigo => {
//         if (codigo) {
//             navigation.navigate('HomeScreen');
//             return false;
//         }
//     });
// }, []);
// const entrar = async () => {
//   alert("pkl");
// }

// const handleSignInPress = async () => {
//   // if (login.length === 0 || password.length === 0) {
//   //     setError('Preencha usuário e senha para continuar!');
//   // }
//     //AsyncStorage.setItem('codigo', codigo);

// };

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.eMail}>E-mail</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.senha}>Senha</Text>
      </View>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.naoPossuoCadastro}>Nao possuo cadastro.</Text>
      <View style={styles.iconRow}>
        <MaterialCommunityIconsIcon
          name="facebook"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.entrarPeloFacebook}>Entrar pelo Facebook</Text>
      </View>
      <View style={styles.icon2Row}>
        <EvilIconsIcon
          name="sc-google-plus"
          style={styles.icon2}
        ></EvilIconsIcon>
        <Text style={styles.entrarComOGoogle}>Entrar com o Google</Text>
      </View>
      <Text style={styles.ou}>OU</Text>
      <Text style={styles.login1}>Entre com seu e-mail e senha</Text>
      <Image
        source={require("../../assets/image_SRrA..png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.esqueceuSuaSenha}>Esqueceu sua senha?</Text>
     <TouchableOpacity
      style={styles.materialButtonPrimary}
      onPress={()=> navigation.navigate("HomeScreen")}
     >
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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

export default Untitled1;
