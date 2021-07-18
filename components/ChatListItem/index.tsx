import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChatRoom } from "../../types";

type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  return (
    <View>
      <Text>Hi from {chatRoom.lastMessage.content}</Text>
    </View>
  );
};

export default ChatListItem;
