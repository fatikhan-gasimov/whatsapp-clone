
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { ChatsScreenParamList } from "../types";
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatsScreen from "../screens/ChatsScreen";

const MainTab = createMaterialTopTabNavigator();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <MainTab.Navigator
      initialRouteName="CHATS"
      tabBarOptions= {{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        labelStyle: {
          fontWeight: "bold",
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        showIcon: true,
      
      }}
    >
      <MainTab.Screen
        name="CAMERA"
        component={ChatsScreenStackNavigator}
        options={{
          tabBarIcon: () => <FontAwesome name="camera" size={22} color="white" />,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen name="CHATS" component={ChatsScreenStackNavigator} />
      <MainTab.Screen name="STATUS" component={ChatsScreenStackNavigator} />
      <MainTab.Screen name="CALLS" component={ChatsScreenStackNavigator} />
    </MainTab.Navigator>
  );
}

 
 
const ChatsScreenStack = createStackNavigator<ChatsScreenParamList>();

function ChatsScreenStackNavigator() {
  return (
    <ChatsScreenStack.Navigator>
      <ChatsScreenStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{
          headerShown: false,
        }}
      />
    </ChatsScreenStack.Navigator>
  );
}
 