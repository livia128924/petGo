import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import RadioButton from "react-native-radio-button";
//import Checkbox from "expo-checkbox";
import Toast from 'react-native-simple-toast';
import api from "../services/api";


function Cadastrar({ navigation }) {
  const [button, setButton] = useState(false);

  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    data_nascimento: "",
    telefone: "",
    cep: "",
    senha: "",
  });

  const handleEnter = async () => {

    const response = await api.post("register", cliente);
    const {data} = response;

    if (data) {
        Toast.showWithGravity(
            'Preencha todos os dados para continuar!',
            Toast.LONG,
            Toast.BOTTOM
            );


        navigation.navigate("Untitled1");
    } else {
        setTextMsg("Usuário não encontrado");
        setVisibleMsg(true);
    }
}





  return (
    <View style={styles.container}>
      <View style={styles.textStyle}>
        <Text>Nome</Text>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            value={cliente.nome}
            onChangeText={(value) => {
              setCliente({
                ...cliente,
                ["nome"]: value,
              });
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.textStyle}>
        <Text>Email</Text>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            value={cliente.email}
            onChangeText={(value) => {
              setCliente({
                ...cliente,
                ["email"]: value,
              });
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.textStyle}>
        <Text>Data de nascimento</Text>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="00/00/0000"
            value={cliente.data_nascimento}
            onChangeText={(value) => {
              setCliente({
                ...cliente,
                ["data_nascimento"]: value,
              });
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.textStyle}>
        <Text>Telefone para contato</Text>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="(99) 9999-9999"
            value={cliente.telefone}
            onChangeText={value => {
                setCliente({
                    ...cliente,
                    ["telefone"]: value,
                })
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.textStyle}>
        <Text>CEP</Text>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="(99) 9999-9999"
            value={cliente.cep}
            onChangeText={value => {
                setCliente({
                    ...cliente,
                    ["cep"]: value,
                })
            }}
          ></TextInput>
        </View>
      </View>
      <View style={styles.textStyle}>
        <Text>Senha</Text>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="(99) 9999-9999"
            value={cliente.senha}
            onChangeText={value => {
                setCliente({
                    ...cliente,
                    ["senha"]: value,
                })
            }}
          ></TextInput>
        </View>
      </View>
      <View style={{ marginLeft: 50, flexDirection: "row" }}>
        <CheckBox
          //style={styles.checkbox}
          value={button}
          onValueChange={() => {
            setButton(true);
            //onPressTitle("se_rrj", "checkbox_value", muda(), sync);
          }}
        />
        <Text style={{ marginTop: 15 }}>Aceito os termos e etc.</Text>
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
          onPress={() => handleEnter()}
        >
          <Text style={styles.buttonText}>Entrar</Text>
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
    // backgroundColor:'red'
  },
  materialButtonPrimary: {
    height: 52,
    width: 277,
    borderRadius: 6,
    backgroundColor: "rgba(3,194,205,1)",
    marginTop: 14,
    //marginLeft: 52
  },
  textStyle: {
    marginTop: 20,
    marginLeft: 55,
  },
  input: {
    // marginTop: 13,
    width: "70%",
    marginRight: 5,
    //marginTop: 20,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
    color: "black",
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Cadastrar;
