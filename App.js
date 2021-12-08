import React, { useEffect, useState } from "react";
import {Text, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
//import { AsyncStorage} from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen";
import camera from "./pages/camera";
import leitor from "./pages/leitor";
import ViewAllUser from "./pages/listar";
import Login from "./pages/login";
import ExampleOne from "./pages/socio/index";
import Formulario from "./pages/socio/Formulario";
import Untitled1 from "./pages/login/Untitled1";
import ForgotPassword from "./pages/login/ForgotPassWord";
import AgendarConsulta from "./pages/AgendarConsulta";
import ProdutosLimpeza from "./pages/ProdutosLimpeza";
import BanhoTosa from "./pages/BanhoTosa";
import RacoesPetisco from "./pages/RacoesPetisco";
import Chat from "./pages/Chat";
import Sacola from "./pages/Sacola";
import PerfilUsuario from "./pages/PerfilUsuario";
import NovoPet from "./pages/NovoPet";
import ChatScreen from "./pages/chatScreen";
import AppChatScreen from "./pages/AppChatScreen";
import Cadastrar from "./pages/Cadastrar";
import AgendarBanho from "./pages/AgendarBanho";
import AgendarTosa from "./pages/AgendarTosa";

const Stack = createStackNavigator();

// function LogoTitle({navigation}) {
//   return (
//     <Button
//     buttonStyle={{backgroundColor:'white', width:'auto', height:'auto', marginRight:20}}
//     title=""

//     icon={
//       <Icon
//       name="shopping-cart"
//       size={20}
//       color="black"
//       />
//     }
//     onPress={()=> navigation.navigate("Sacola")}//verificar isso
//     />
//   );
// }

const App = () => {
  // useEffect(() => {
  //   AsyncStorage.getItem("codigo").then((codigo) => {
  //     console.log(codigo);
  //   });
  // }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Untitled1"}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            title: "Cadastre-se",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "normal",
            },
          }}
        />
        <Stack.Screen
          name="Untitled1"
          component={Untitled1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "Esqueci a senha",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="AgendarConsulta"
          component={AgendarConsulta}
          options={{
            title: "",
            // headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AppChatScreen"
          component={AppChatScreen}
          options={{
            title: "",
            // headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="NovoPet"
          component={NovoPet}
          options={{
            title: "",
            // headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "white",
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="ProdutosLimpeza"
          component={ProdutosLimpeza}
          options={{
            headerTitle: "Produtos de Limpeza"
          }}
        />
        <Stack.Screen
          name="BanhoTosa"
          component={BanhoTosa}
          options={{
            title: "Banho e Tosa",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="AgendarBanho"
          component={AgendarBanho}
          options={{
            title: "Banho e Tosa",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="AgendarTosa"
          component={AgendarTosa}
          options={{
            title: "Banho e Tosa",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="RacoesPetisco"
          component={RacoesPetisco}
          options={{
            headerTitle: "produtos",
            //headerRight:props => <LogoTitle {...props} />
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            title: "Chat de Conversa",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Sacola"
          component={Sacola}
          options={{
            title: "Sacola",
            headerStyle: {
              backgroundColor: "#FFF",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuario}
          options={{
            title: "Peril do usuario",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Stepper"
          component={ExampleOne}
          options={{
            title: "Stepper",
            headerStyle: {
              backgroundColor: "#FFF",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{
            title: "Formulario",
            headerStyle: {
              backgroundColor: "#FFF",
            },
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Câmera"
          component={camera}
          options={{
            title: "Câmera",
            headerStyle: {
              backgroundColor: "#FFF",
            },

            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
