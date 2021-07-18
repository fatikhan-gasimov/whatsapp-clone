/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type ChatsScreenParamList = {
  ChatsScreen: undefined;
};


export type User = {
  id: String;
  name: String;
  imageUri: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: number;
};

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};
