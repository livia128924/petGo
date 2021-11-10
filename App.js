import React, {useEffect, useState} from 'react';
import {AsyncStorage, Button, Text} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import camera from './pages/camera';
import leitor from './pages/leitor';
import ViewAllUser from './pages/listar';
import Login from "./pages/login";
import ExampleOne from './pages/socio/index'
import Formulario from "./pages/socio/Formulario";
import Untitled1 from './pages/login/Untitled1';
import ForgotPassword from './pages/login/ForgotPassWord';
import AgendarConsulta from './pages/AgendarConsulta';
import ProdutosLimpeza from './pages/ProdutosLimpeza';
import BanhoTosa from './pages/BanhoTosa';
import RacoesPetisco from './pages/RacoesPetisco';
import Chat from './pages/Chat';
import Sacola from './pages/Sacola';
import PerfilUsuario from './pages/PerfilUsuario';
import chatTalk from './assets/chatTalk';

const Stack = createStackNavigator();

const App = ({ navigation }) => {

        useEffect(() => {
            AsyncStorage.getItem('codigo').then(codigo => {
                console.log(codigo);
            });
        }, []);

        return (

            <NavigationContainer>

                <Stack.Navigator initialRouteName={'Untitled1'}>
                    <Stack.Screen
                        name='HomeScreen'
                        component={HomeScreen}
                        options={{
                            title: 'SGRF - SECT',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='Untitled1'
                        component={Untitled1}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name='ForgotPassword'
                        component={ForgotPassword}
                        options={{
                            title: 'Esqueci a senha',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='AgendarConsulta'
                        component={AgendarConsulta}
                        options={{
                            title: 'Agendar Consulta',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='ProdutosLimpeza'
                        component={ProdutosLimpeza}
                        options={{
                            title: 'Produtos de Limpeza',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='BanhoTosa'
                        component={BanhoTosa}
                        options={{
                            title: 'Banho e Tosa',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='RacoesPetisco'
                        component={RacoesPetisco}
                        options={{
                            title: 'Rações e Petisco',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='Chat'
                        component={Chat}
                        options={{
                            title: 'Chat de Conversa',
                            headerStyle: {
                                backgroundColor: 'rgba(32,121,225,0.73)',
                                height:100
                            },

                            headerTintColor: 'white',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='ChatTalk'
                        component={chatTalk}
                        //initialParams={{ ChatTalk: "itemId" }}
                        // options={{
                        //     title: navigation.getParam('itemId', 'A Nested Details Screen')
                        // }}
                    />
                    <Stack.Screen
                        name='Sacola'
                        component={Sacola}
                        options={{
                            title: 'Sacola',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },
                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='PerfilUsuario'
                        component={PerfilUsuario}
                        options={{
                            title: 'Peril do usuario',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            }
                        }}
                    />
                    <Stack.Screen
                        name='Stepper'
                        component={ExampleOne}
                        options={{
                            title: 'Stepper',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },
                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen
                        name='Formulario'
                        component={Formulario}
                        options={{
                            title: 'Formulario',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },
                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen
                        name='Câmera'
                        component={camera}
                        options={{
                            title: 'Câmera',
                            headerStyle: {
                                backgroundColor: '#FFF',
                            },

                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />


                </Stack.Navigator>
            </NavigationContainer>
        );
    }
;

export default App;