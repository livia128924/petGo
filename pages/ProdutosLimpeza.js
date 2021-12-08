import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DatabaseConnection } from "../database/database";
const db = DatabaseConnection.getConnection();
import IconFont from 'react-native-vector-icons/FontAwesome';
import { Button } from "react-native-elements";

function ProdutosLimpeza({ navigation }) {


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
            buttonStyle={{backgroundColor:'white', width:'auto', height:'auto', marginRight:20}}
            title=""

            icon={
              <IconFont
              name="shopping-cart"
              size={20}
              color="black"
              />
            }
            onPress={()=> navigation.navigate("Sacola")}//verificar isso
            />
      ),
    });
  }, [navigation]);



  const [produto, setProduto] = useState("");

  function addTocart(codigo, descricao, valor, foto) {
    alert("adcionado com sucesso!")
    // console.log([codigo ,descricao, valor, foto])

  //   db.transaction((tx) => {tx.executeSql( "drop table carrinho",[]);}
  // );

    // db.transaction(
    //   (tx) => {
    //     tx.executeSql(
    //       "CREATE TABLE IF NOT EXISTS carrinho (codigo INTEGER, cod_Produto TEXT, descricao TEXT, valor TEXT, qtd TEXT, situacao TEXT, tipo TEXT, foto TEXT, PRIMARY KEY(codigo))",
    //       []
    //     );
    //   },
    //   (err) => {
    //     console.error("There was a problem with the log ", err);
    //     return true;
    //   },
    //   (success) => {
    //     console.log("criou a tabela", success);
    //   }
    // );




    // db.transaction(
    //   (tx) => {
    //     tx.executeSql(
    //       "INSERT INTO carrinho (cod_Produto, descricao, valor, situacao, foto) VALUES  (" +
    //         codigo +
    //         " ,'" +
    //         descricao +
    //         "', '" +
    //         valor +
    //         "', '1','" +
    //         foto +
    //         "')",
    //       [],
    //       (tx, results) => {}
    //     );
    //   },
    //   (err) => {
    //     console.error("There was a problem with the log ", err);
    //     return true;
    //   },
    //   (success) => {
    //     console.log("inseriu na tabela", success);
    //   }
    // );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Todos os Produtos de Limpeza para o seu pet</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <View>
            <View style={styles.productsContainer}>
              <View style={styles.cardProductRight}>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/PS_Care_Eliminador_de_Odores_Pet_Society_1932463.jpg")}
                    resizeMode="cover"
                    style={styles.image8}
                  ></Image>
                </View>
                <Text
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  PS Care Eliminador de Odores Pet Society
                </Text>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$18,90</Text>
                  <Text>/Kg</Text>
                </View>
                <Pressable
                  style={styles.buttonAdd}
                  onPress={() =>
                    addTocart(
                      "1",
                      "PS Care Eliminador de Odores Pet Society",
                      "18,90",
                      "PS_Care_Eliminador_de_Odores_Pet_Society_1932463.jpg"
                    )
                  }
                >
                  <View style={{ marginTop: 10 }}>
                    <Icon type="font-awesome" name="plus" color="white" />
                  </View>
                </Pressable>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={styles.cardProductRight}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/Pó_Higiênico_Easy_Pet___House_Dog_Almiscar_2464345.jpg")}
                      resizeMode="cover"
                      style={styles.image8}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50,
                    }}
                  >
                    Pó Higiênico Easy Pet {"&"} House Almiscar
                  </Text>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>R$24,74</Text>
                    <Text>/Kg</Text>
                  </View>
                  <Pressable
                    style={styles.buttonAdd}
                    onPress={() =>
                      addTocart(
                        "1",
                        "Pó Higiênico Easy Pet {" & "} House Almiscar",
                        "24,74",
                        "Pó_Higiênico_Easy_Pet___House_Dog_Almiscar_2464345.jpg"
                      )
                    }
                  >
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </Pressable>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={styles.cardProductRight}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/Desinfetante_Vet___20_Bactericida_Limão_e_Cravo_-_500_mL_3109789-1_1.jpg")}
                      resizeMode="cover"
                      style={styles.image8}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50,
                    }}
                  >
                    Desinfetante Vet+20 Bactericida - Limão e Cravo
                  </Text>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>R$37,08</Text>
                    <Text>/Kg</Text>
                  </View>
                  <Pressable
                    style={styles.buttonAdd}
                    onPress={() =>
                      addTocart(
                        "1",
                        "Desinfetante Vet+20 Bactericida - Limão e Cravo",
                        "37,08",
                        "Desinfetante_Vet___20_Bactericida_Limão_e_Cravo_-_500_mL_3109789-1_1.jpg"
                      )
                    }
                  >
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </Pressable>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={styles.cardProductRight}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/Limpa_Patinhas_Sunny_Pet_-_230_mL_310415.jpg")}
                      resizeMode="cover"
                      style={styles.image8}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50,
                    }}
                  >
                    Limpa Patinhas Sunny Pet
                  </Text>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>R$27,85</Text>
                    <Text>/Kg</Text>
                  </View>
                  <Pressable
                    style={styles.buttonAdd}
                    onPress={() =>
                      addTocart(
                        "1",
                        "Limpa Patinhas Sunny Pet",
                        "27,85",
                        "Limpa_Patinhas_Sunny_Pet_-_230_mL_310415.jpg"
                      )
                    }
                  >
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </Pressable>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={styles.cardProductRight}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/2692662_Limpa-Piso-Biowash-Pet-Mandarina-com-Limão_3.jpg")}
                      resizeMode="cover"
                      style={styles.image8}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50,
                    }}
                  >
                    Limpa Piso Biowash Pet Mandarina com Limão
                  </Text>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>R$24,51</Text>
                    <Text>/Kg</Text>
                  </View>
                  <Pressable
                    style={styles.buttonAdd}
                    onPress={() =>
                      addTocart(
                        "1",
                        "Limpa Piso Biowash Pet Mandarina com Limão",
                        "24,51",
                        "2692662_Limpa-Piso-Biowash-Pet-Mandarina-com-Limão_3.jpg"
                      )
                    }
                  >
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.productsContainer}>
              <View style={styles.cardProductRight}>
                <View
                  style={{
                    marginTop: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/dog's_7_Unid_2.jpg")}
                    resizeMode="cover"
                    style={styles.image8}
                  ></Image>
                </View>

                <Text
                  style={{
                    margin: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                >
                  Tapete Higiênico Dog's Care The New York Dogs - Grande
                </Text>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$19,71</Text>
                  <Text>/Kg</Text>
                </View>
                <Pressable style={styles.buttonAdd}
                  onPress={() =>
                    addTocart(
                      "1",
                      " Tapete Higiênico Dog's Care The New York Dogs - Grande",
                      "19,71",
                      "dog's_7_Unid_2.jpg"
                    )
                  }
                >

                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>

                </Pressable>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={styles.cardProductRight}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/85_2692182_Gel-Dental-docg.-Menta-para-Cães-e-Gatos_1.jpg")}
                      resizeMode="cover"
                      style={styles.image8}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    Gel Dental docg. Menta para Cães e Gatos
                  </Text>
                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>R$39,51</Text>
                    <Text>/Kg</Text>
                  </View>
                  <Pressable style={styles.buttonAdd}
                    onPress={() =>
                      addTocart(
                        "1",
                        " Gel Dental docg. Menta para Cães e Gatos",
                        "39,51",
                        "85_2692182_Gel-Dental-docg.-Menta-para-Cães-e-Gatos_1.jpg"
                      )
                    }
                  >

                      <View style={{ marginTop: 10 }}>
                        <Icon type="font-awesome" name="plus" color="white" />
                      </View>

                  </Pressable>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={styles.cardProductRight}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/2692207_Educador-Sanitário-docg.-Xixi-Pode-para-Cães-e-Gatos_1.jpg")}
                      resizeMode="cover"
                      style={styles.image8}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50,
                    }}
                  >
                    Educador Sanitário docg. Xixi Pode para Cães e Gatos
                  </Text>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>R$35,01</Text>
                    <Text>/Kg</Text>
                  </View>
                  <Pressable style={styles.buttonAdd}
                   onPress={() =>
                    addTocart(
                      "1",
                      "Educador Sanitário docg. Xixi Pode para Cães e Gatos",
                      "35,01",
                      "2692207_Educador-Sanitário-docg.-Xixi-Pode-para-Cães-e-Gatos_1.jpg"
                    )
                  }
                  >

                      <View style={{ marginTop: 10 }}>
                        <Icon type="font-awesome" name="plus" color="white" />
                      </View>

                  </Pressable>
                </View>
              </View>

              <View style={{ marginTop: 20 }}>
                <View style={styles.cardProductRight}>
                  <View
                    style={{
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/Shampoo_Hidratante_Bellokão_Pêssego_Premium__2653498_500ml.jpg")}
                      resizeMode="cover"
                      style={styles.image8}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      margin: 10,
                      justifyContent: "center",
                      alignSelf: "center",
                      height: 50,
                    }}
                  >
                    Shampoo Hidratante Bellokão Pêssego Premium
                  </Text>

                  <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{ fontSize: 17 }}>R$17,55</Text>
                    <Text>/Kg</Text>
                  </View>
                  <View style={styles.buttonAdd}
                   onPress={() =>
                    addTocart(
                      "1",
                      " Shampoo Hidratante Bellokão Pêssego Premium",
                      "17,55",
                      "Shampoo_Hidratante_Bellokão_Pêssego_Premium__2653498_500ml.jpg"
                    )
                  }
                  >

                      <View style={{ marginTop: 10 }}>
                        <Icon type="font-awesome" name="plus" color="white" />
                      </View>

                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardProduct: {
    backgroundColor: "#F1F4F3",
    height: 250,
    width: 180,
    borderRadius: 28,
    marginLeft: 5,
  },
  cardProductRight: {
    backgroundColor: "#F1F4F3",
    height: 290,
    width: 180,
    borderRadius: 28,
  },
  image8: {
    width: 100,
    height: 150,
  },
  buttonAdd: {
    backgroundColor: "#1a75ff",
    position: "absolute",
    bottom: 0,
    top: 240,
    right: 0,
    height: 50,
    width: 60,
    // justifyContent: "flex-end",
    borderTopLeftRadius: 28,
    borderBottomRightRadius: 28,
    // marginBottom:10
  },
  productsContainer: {
    flexDirection: "column",
    // alignItems: "stretch",
    width: "50%",
    height: "100%",
    // backgroundColor:'red'
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default ProdutosLimpeza;
