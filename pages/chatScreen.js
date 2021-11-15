import React, { Component, useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Linking,
  Text,
  ScrollView,
  WebView,
  Platform,
  Button,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { List, ListItem } from "react-native-elements";

import { GiftedChat, InputToolbar } from "react-native-gifted-chat";

function ChatScreen(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { itemId } = props.route.params;
    props.navigation.setOptions({ title: itemId });
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  function renderInputToolbar(props) {
    return <InputToolbar {...props} containerStyle={styles.toolbar} />;
  }

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          height: 100,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          paddingTop:15

        }}
      >
        <Text style={{ fontSize: 20 }}>{ props.route.params.itemId }</Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderInputToolbar={renderInputToolbar}
        //wrapInSafeArea={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    borderRadius: 30,
    height: 50,
    // backgroundColor:'red'
  },
});
export default ChatScreen;