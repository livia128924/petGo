import React, { Component, useEffect } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
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
    <>
    <View style={styles.container}>

      <View style={styles.rect}>
        <TextInput
        style={styles.eMail}
        placeholder="E-mail"
        ></TextInput>
      </View>
      <View style={styles.rect2}>
        <TextInput
        style={styles.senha}
        placeholder="Senha"
        ></TextInput>
      </View>
      <Text style={styles.login}>Login</Text>

      <Text style={styles.login1}>Entre com seu e-mail e senha</Text>
      <Image
        source={require("../../assets/image_SRrA..png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>

    <View style={{marginTop:250, alignSelf:'center'}}>
      <TouchableOpacity onPress={()=> navigation.navigate("ForgotPassword")}>
      <View style={{ alignSelf:'flex-end'}}>
    <Text >Esqueceu sua senha?</Text>
    </View>
    </TouchableOpacity>

    <View style={{ alignContent:'center'}}>
   <TouchableOpacity
    style={styles.materialButtonPrimary}
    onPress={()=> navigation.navigate("HomeScreen")}
    >
      <Text style={styles.buttonText}>Entrar</Text>
   </TouchableOpacity>
      </View>
     </View>


      <View style={{top:20}}>

        <Text style={styles.ou}>OU</Text>
        <TouchableOpacity onPress={()=>alert("google")}>
      <View style={styles.icon2Row}>
        <EvilIconsIcon
          name="sc-google-plus"
          style={styles.icon2}
          ></EvilIconsIcon>
        <Text style={styles.entrarComOGoogle}>Entrar com o Google</Text>
      </View>
</TouchableOpacity>


           {/* <Text style={styles.naoPossuoCadastro}>Nao possuo cadastro.</Text> */}
          <TouchableOpacity  onPress={()=>alert("facebook")}>
      <View style={styles.icon2Row}>
        <MaterialCommunityIconsIcon
          name="facebook"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.entrarPeloFacebook}>Entrar pelo Facebook</Text>
      </View>
      </TouchableOpacity>
          </View>
    </View>

   </>
  );
}

const styles = StyleSheet.create({
  buttonText:{
    alignSelf:'center',
    alignItems:'center',
    top:10,
    fontSize:20,
    color:'white'
  },
  container: {
    flex: 1,
   // backgroundColor:'red'
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
    alignSelf: "center",
   // marginTop: 20,
   // marginLeft: 69,
    //marginRight: 126
   // backgroundColor:'red'
  },
  ou: {
    color: "#121212",
    fontSize: 30,
    //marginTop: -144,
    alignSelf: "center"
  },
  login1: {
    color: "rgba(130,130,130,1)",
    fontSize: 13,
    marginTop: 10,
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

  },
  materialButtonPrimary: {
    height: 52,
    width: 277,
    borderRadius: 6,
    backgroundColor: "rgba(3,194,205,1)",
    marginTop: 14,
    //marginLeft: 52
  }
});

export default Untitled1;
