import React, { Component, useEffect, useState } from "react";
import { CheckBox, StyleSheet, View, Text, Image, AsyncStorage } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Avatar, Accessory } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
//import Checkbox from "expo-checkbox";
import RadioButton from 'react-native-radio-button'

function AgendarConsulta({ navigation }) {
  const [OpenService, setOpenService] = useState(false);
  const [ServiceValue, setServiceValue] = useState(null);
  const [ServiceItems, setServiceItems] = useState([
    { label: "Consulta CLinica", value: "1" },
    { label: "Vacina", value: "2" },
    { label: "Coleta de Sangue", value: "3" },
    { label: "Exame de Imagem*", value: "4" },
    { label: "Consulta Dermatológica", value: "5" },
    { label: "Retorno (30 minutos)*", value: "6" },
    { label: "Cirurgia (1 Hora)*", value: "7" },
    { label: "Cirurgia (2 horas)*", value: "8" },
    { label: "Cirurgia (3 horas)*", value: "9" },
    { label: "Atendimento Atestado de Saúde", value: "10" },
    { label: "Aplicação de Cytopoint*", value: "11" },
  ]);

  const [checkbox_value, set_checkbox_value] = useState([
   { label: "Usar minha localização", id: 1, isChecked:false},
   { label: "Meu endereço", id: 2, isChecked:false},
   { label: "Meu CEP", id: 3, isChecked:false},

  ]);


  const [isServico, setIsServico] = useState(false);


  const handleChange = (id) => {
    const newState = checkbox_value.map((el) => {
      const label = el;

      if (el.id === id) {
        // verificamos se o nome do label foi passado na função
        label.isChecked = !el.isChecked; // se sim, vamos alterar o estado do "checked"
      }

      return label;
    });

    set_checkbox_value(newState); // atualiza o estado
  };


  function muda() {
    //await api
    var str_valores = [];

    checkbox_value
      .filter((value) => value.isChecked === true)
      .map((item) => {
        // console.log(item);
        str_valores.push(item.id);
      });
    //console.log(ischecado);
    return str_valores.join(",");
  }



  return (
    <View style={styles.container}>
      <Text
        styles={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
        }}
      >
        Passo 1
      </Text>
      <Text
        style={{
          fontSize: 25,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
        }}
      >
        Selecione o Pet
      </Text>

      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          alignContent: "center",
        }}
      >
        {/* <View style={styles.rect37}></View> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <View style={{ marginRight: 15 }}>
            <Avatar
              rounded
              size="large"
              source={require("../assets/gato_imagem.jpg")}
            >
              <Avatar.Accessory size={20} onPress={() => alert("ok")} />
            </Avatar>
            <Text style={{ alignSelf: "center", alignContent: "center" }}>
              Gatin
            </Text>
          </View>
          <View>
            <Avatar
              rounded
              size="large"
              overlayContainerStyle={{ backgroundColor: "#AEAEAE" }}
              icon={{
                name: "plus-circle",
                size: 50,
                color: "white",
                type: "font-awesome",
              }}
              onPress={() => alert("ok")}
            ></Avatar>
            <Text style={{ alignSelf: "center", alignContent: "center" }}>
              Novo
            </Text>
          </View>
        </View>
      </View>

      <Text
        styles={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
        }}
      >
        Passo 2
      </Text>

      <Text
        style={{
          fontSize: 25,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
        }}
      >
        Selecione o Serviço
      </Text>

      <View>
        <DropDownPicker
          style={styles.input}
          open={OpenService}
          value={ServiceValue}
          items={ServiceItems}
          setOpen={setOpenService}
          setValue={setServiceValue}
          setItems={setServiceItems}
          placeholder="Selecione:"
          onChangeValue={() => setIsServico(true)}
        />
      </View>
      <View>
        {isServico ? (
          <View>
            <Text style={{ top: 10 }}>Passo 3</Text>

            <Text
              style={{
          fontSize: 25,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
          marginLeft: 20,
          marginTop:10
              }}
            >
              Escolha entre as 3 opções para selecionar a loja
            </Text>


            <View style={styles.checkboxlabel}>
            {[...checkbox_value].map((item, index) => (
              <View  key={item.id}>
                {/* <CheckBox
                  //style={styles.checkbox}
                  value={item.isChecked}
                  onValueChange={() => {
                    handleChange(item.id);
                    muda();
                    //onPressTitle("se_rrj", "checkbox_value", muda(), sync);
                  }}
                /> */}
                <Text>asdasd</Text>
                <RadioButton
                animation={'bounceIn'}
                isSelected={true}
                onPress={() => alert("ok")}
                />
                <Text>{item.label}</Text>
              </View>
            ))}
          </View>

          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  checkbox:{
    //marginTop:5,
//    marginLeft:30,
// alignContent:'center',
//    alignItems: 'center',
//    alignSelf: 'center',

  },
  checkboxlabel:{
    flexDirection:'row',
    marginTop:10,
    height: 25,
    width:'85%',
    //marginLeft:30,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',

  },
  checkboxText:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
   // position:'absolute',
    marginTop:9,
    //marginLeft:40,
  },
  input: {
    marginTop: 13,
    width: 324,
    marginLeft: 25,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
    color: "black",
    //fontSize: 18,
  },
  rect37: {
    top: 17,
    //left: 6,
    width: 65,
    height: 61,
    borderRadius: 30,
    // position: "absolute",
    backgroundColor: "#E6E6E6",
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
    marginTop: -181,
    alignSelf: "center",
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

export default AgendarConsulta;
