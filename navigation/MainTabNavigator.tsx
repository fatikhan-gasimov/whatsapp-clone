/**
 * Learn more about createMainTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Text } from "react-native";
import { View } from "../components/Themed";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { TabOneParamList, TabTwoParamList } from "../types";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

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
        component={TabOneNavigator}
        options={{
          tabBarIcon: () => <FontAwesome name="camera" size={22} color="white" />,
          tabBarLabel: () => null,
        
        }}
      />
      <MainTab.Screen name="CHATS" component={TabOneNavigator} />
      <MainTab.Screen name="STATUS" component={TabOneNavigator} />
      <MainTab.Screen name="CALLS" component={TabTwoNavigator} />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          headerShown: false,
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
