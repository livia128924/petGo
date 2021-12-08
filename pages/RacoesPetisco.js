import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import IconFont from 'react-native-vector-icons/FontAwesome';
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


function RacoesPetisco({navigation}) {

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



  return (
    <View style={styles.container}>
    <ScrollView>
      <Text>Todos os Produtos de Limpeza para o seu pet</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft:10, marginRight:10}}>
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
                  source={require("../assets/Ração_Premier_Golden_Special_Cães_Adultos_Frango_e_Carne_-_15_Kg_1213490_2.jpg")}
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
                Ração Seca PremieR Pet Golden Special Cães Adultos Frango e
                Carne
              </Text>
              <View style={{ flexDirection: "row", marginLeft: 15 }}>
                <Text style={{ fontSize: 17 }}>R$123,21</Text>
                <Text>/Kg</Text>
              </View>
              <View style={styles.buttonAdd}>
                <TouchableOpacity>
                  <View style={{ marginTop: 10 }}>
                    <Icon type="font-awesome" name="plus" color="white" />
                  </View>
                </TouchableOpacity>
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
                    source={require("../assets/Ração_Hills_Canine_Feline_Prescription_Diet_AD_Lata_-_156_g_3107868.jpg")}
                    resizeMode="contain"
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
                  Ração Úmida Prescription Diet a/d Condições Críticas para
                  Cães e Gatos - 156 g
                </Text>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$24,74</Text>
                  <Text>/Kg</Text>
                </View>
                <View style={styles.buttonAdd}>
                  <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
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
                    source={require("../assets/Biscoito_Premier_Pet_Cookie_para_Cães_Adultos_3110136.jpg")}
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
                  Imagem do produto Biscoito Premier Pet Cookie para Cães
                  Adultos
                </Text>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$14,76</Text>
                  <Text>/Kg</Text>
                </View>
                <View style={styles.buttonAdd}>
                  <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
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
                    source={require("../assets/Biscoito_Pedigree_Biscrok_Multi_para_Cães_Adultos_31019021_500g.jpg")}
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
                  Biscoito Pedigree Biscrok Multi para Cães Adultos
                </Text>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$17,99</Text>
                  <Text>/Kg</Text>
                </View>
                <View style={styles.buttonAdd}>
                  <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
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
                    source={require("../assets/1781065_filhotes_cópia.jpg")}
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
                  Ração Special Cat Premium para Gatos Filhotes
                </Text>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$9,07</Text>
                  <Text>/Kg</Text>
                </View>
                <View style={styles.buttonAdd}>
                  <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>


        <View >
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
                  source={require("../assets/Ração_Whiskas_Carne.jpg")}
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
                Ração Whiskas para Gatos Adultos Castrados Sabor Carne -
                10,1kg
              </Text>

              <View style={{ flexDirection: "row", marginLeft: 15 }}>
                <Text style={{ fontSize: 17 }}>R$167,32</Text>
                <Text>/Kg</Text>
              </View>
              <View style={styles.buttonAdd}>
                <TouchableOpacity>
                  <View style={{ marginTop: 10 }}>
                    <Icon type="font-awesome" name="plus" color="white" />
                  </View>
                </TouchableOpacity>
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
                    source={require("../assets/Ração_Whiskas_Carne.jpg")}
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
                  Ração Whiskas para Gatos Adultos Castrados Sabor Carne -
                  10,1kg
                </Text>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$167,32</Text>
                  <Text>/Kg</Text>
                </View>
                <View style={styles.buttonAdd}>
                  <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
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
                    source={require("../assets/2492302_FRENTE.jpg")}
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
                  Ração Seca Nutrilus Pro Frango {"&"} Carne para Cães Adultos
                </Text>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$106,03</Text>
                  <Text>/Kg</Text>
                </View>
                <View style={styles.buttonAdd}>
                  <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </TouchableOpacity>
                </View>
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
                    source={require("../assets/1193389_Ração_Úmida_Pedigree_Sachê_Cordeiro_ao_Molho_para_Cães_Adultos_de_Raças_Pequenas_1.jpg")}
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
                  Ração Úmida Pedigree Sachê Cordeiro ao Molho para Cães
                  Adultos de Raças Pequenas
                </Text>

                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                  <Text style={{ fontSize: 17 }}>R$2,70</Text>
                  <Text>/Kg</Text>
                </View>
                <View style={styles.buttonAdd}>
                  <TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                      <Icon type="font-awesome" name="plus" color="white" />
                    </View>
                  </TouchableOpacity>
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

export default RacoesPetisco;
