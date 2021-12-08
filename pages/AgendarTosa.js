import React, { Component, useEffect, useState } from "react";
import {
  CheckBox,
  StyleSheet,
  View,
  Text,
  Image,
  AsyncStorage,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Avatar, Accessory } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
//import Checkbox from "expo-checkbox";
import RadioButton from "react-native-radio-button";
import { Button } from "react-native-elements";
import Constants from "expo-constants";

function AgendarTosa({ navigation }) {
  const [enderecoText, setEnderecoText] = useState("");
  const [OpenTosa, setOpenTosa] = useState(false);
  const [TosaValue, setTosaValue] = useState(null);
  const [TosaItems, setTosaItems] = useState([
    { label: "Tosa de cachorro", value: "1" },
    { label: "Tosa de gato", value: "2" },
  ]);

  const [checkbox_value, set_checkbox_value] = useState([
    { label: "Usar minha localização", id: 1, isChecked: false },
    { label: "Meu endereço", id: 2, isChecked: false },
    { label: "Meu CEP", id: 3, isChecked: false },
  ]);

  const [isTosa, setIsTosa] = useState(false);
  const [isEndereco, setIsEndereco] = useState(false);
  const [isCep, setIsCep] = useState(false);
  const [isContainerResult, setIsContainerResult] = useState(false);

  const handleChange = (id) => {
    const newState = checkbox_value.map((el) => {
      const label = el;

      if (el.id === id) {
        // verificamos se o nome do label foi passado na função
        label.isChecked = !el.isChecked; // se sim, vamos alterar o estado do "checked"
        if (el.id === 2) {
          setIsEndereco(true);
        } else if (el.id === 1) {
          setIsEndereco(false);
          alert("Aceita usar sua localizacao");
        } else if (el.id === 3) {
          setIsCep(true);
        }
      }
      return label;
    });
    set_checkbox_value(newState); // atualiza o estado
  };

  function muda() {
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

  function PesquisarEndereco(enderecoValue) {
    //alert(enderecoValue);
    if (enderecoValue === "") {
      alert("Insire um endereço");
    } else {
      setIsContainerResult(true);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
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
                onPress={() => navigation.navigate("NovoPet")}
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

        <View style={{ marginTop: 20, marginLeft: 15, marginRight: 15 }}>
          <DropDownPicker
            style={styles.input}
            open={OpenTosa}
            value={TosaValue}
            items={TosaItems}
            setOpen={setOpenTosa}
            setValue={setTosaValue}
            setItems={setTosaItems}
            placeholder="Selecione:"
            onChangeValue={() => setIsTosa(true)}
          />
        </View>
        <View>
          {isTosa ? (
            <View>
              <Text style={{ top: 10 }}>Passo 3</Text>

              <Text
                style={{
                  fontSize: 25,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "flex-start",
                  marginLeft: 20,
                  marginTop: 10,
                }}
              >
                Escolha entre as 3 opções para selecionar a loja
              </Text>

              <View style={styles.checkboxlabel}>
                {[...checkbox_value].map((item, index) => (
                  <View key={item.id}>
                    {/* <CheckBox
                  //style={styles.checkbox}
                  value={item.isChecked}
                  onValueChange={() => {
                    handleChange(item.id);
                    muda();
                    //onPressTitle("se_rrj", "checkbox_value", muda(), sync);
                  }}
                /> */}

                    <RadioButton
                      animation={"bounceIn"}
                      isSelected={item.isChecked}
                      onPress={() => {
                        handleChange(item.id);
                        muda();
                      }}
                    />
                    <Text>{item.label}</Text>
                  </View>
                ))}
              </View>

              <View>
                {isCep ? (
                  <TextInput
                    style={styles.inputStyle}
                    placeholder="Insira o seu cep"
                  ></TextInput>
                ) : null}
              </View>

              <View>
                {isEndereco ? (
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 25,
                      justifyContent: "center",
                    }}
                  >
                    <TextInput
                      style={styles.inputStyle}
                      placeholder="Insira o endereço"
                      value={enderecoText}
                      onChangeText={setEnderecoText}
                      onBlur={() => alert("ok")}
                    ></TextInput>

                    <Button
                      buttonStyle={{ height: 45 }}
                      title="Pesquisar"
                      onPress={() => PesquisarEndereco(enderecoText)}
                    />
                  </View>
                ) : null}
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {isContainerResult ? (
                  <View style={{  marginTop: 25,
                    justifyContent: "space-around",
                    alignItems:'center',
                    alignContent: "center",
                    width: "100%",
                    height: 300,
                    borderRadius: 5,
                    //backgroundColor:'red'
                  }}>
                  <View style={styles.ResultListContainerStyle}>
                    <View style={styles.checkboxlabelResult}>

                      <RadioButton
                        animation={"bounceIn"}
                        isSelected={true}
                        onPress={() => {
                          alert("ok");
                        }}
                      />
                    </View>

                    <View style={styles.ResultListStyle}>
                      <View>
                        <Text> Titulo</Text>
                        <Text> dESCRICAO</Text>
                      </View>
                      <View style={{alignContent:'flex-end',marginLeft:160}}>
                        <Text> 0,5km</Text>
                      </View>


                    </View>

                  </View>
                  <Button
                  buttonStyle={{  height: 45, justifyContent:'center', alignItems:'center'}}
                  title="Pesquisar"
                  onPress={() => PesquisarEndereco(enderecoText)}
                />
                  </View>
                ) : null}

              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ResultListContainerStyle: {
    flexDirection: "row",

  },
  ResultListStyle: {
    // marginTop: 13,
    width: "85%",
    //marginRight: 5,
    // marginTop: 20,
    height: 90,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
    color: "black",
    padding: 10,
    //backgroundColor: "red",
    flexDirection: "row",
  },
  inputStyle: {
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
    justifyContent: "center",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  checkbox: {
    //marginTop:5,
    //    marginLeft:30,
    // alignContent:'center',
    //    alignItems: 'center',
    //    alignSelf: 'center',
  },
  checkboxlabel: {
    flexDirection: "row",
    marginTop: 25,
    height: 25,
    width: "85%",
    //marginLeft:30,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
  },
  checkboxlabelResult: {
    //flexDirection: "row",
    marginTop: 30,
    height: 25,
    width: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    // backgroundColor:'blue'
  },





});

export default AgendarTosa;
