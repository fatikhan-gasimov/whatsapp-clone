import * as React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import ChatListItem from "../components/ChatListItem";

import { Text, View } from "../components/Themed";

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHATS</Text>
      <ChatListItem chatRoom={{ lastMessage: { content: "Message" } }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
