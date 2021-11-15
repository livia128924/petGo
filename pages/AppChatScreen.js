import React, { useState } from "react";
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

import { List, ListItem } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { TouchableOpacity } from "react-native-gesture-handler";

function AppChatScreen({ navigation }) {
  //   const { itemId } = props.route.params;
  // useEffect(() => {
  //     props.navigation.setOptions({ title: itemId });

  // }, []);

  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Liuka",
      email: "liuka@example.com",
      photoUrl:
        "https://raw.githubusercontent.com/paulsmal/talkjs-react-native/screens-example/assets/user1.jpg",
      welcomeMessage: "Bonjour",
    },
    {
      id: "2",
      name: "Silberstein",
      email: "silberstein@example.com",
      photoUrl:
        "https://raw.githubusercontent.com/paulsmal/talkjs-react-native/screens-example/assets/user2.jpg",
      welcomeMessage: "Hej",
    },
    {
      id: "_9",
      name: "Karem",
      email: "dev@example.com",
      photoUrl:
        "https://raw.githubusercontent.com/paulsmal/talkjs-react-native/screens-example/assets/user3.jpg",
      configuration: "booker",
      welcomeMessage: "Hello",
    },
  ]);
  function Chatbox(name,configuration, email, id, photoUrl, welcomeMessage) {
     //alert(name);
     navigation.navigate('ChatScreen', {
        name: name,
        //otherParam: 'anything you want here',
      });
  }

  return (
    <ScrollView>
      <Text>dfsdfsdfsdf</Text>
      <View>
        {users.map((user, index) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => Chatbox(user.name, user.configuration, user.email, user.id, user.photoUrl, user.welcomeMessage)}
          >
            <ListItem>
              {/* title={`${user.name.toUpperCase()}`} */}
              {/* subtitle={user.email} */}
              {/* //   onPress={() => {
                //    navigation.navigate('Chatbox', {
                //       userToChat: user
                //     });
                //   }} */}
              <Avatar roundAvatar source={{ uri: user.photoUrl }} />
              <ListItem.Content>
                <ListItem.Title>{`${user.name.toUpperCase()}`}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
        {/*
<ListItem bottomDivider>
            <Avatar size="medium" rounded source={l.avatar} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem> */}
      </View>
    </ScrollView>
  );
}
export default AppChatScreen;