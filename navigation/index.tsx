/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, TouchableOpacity, View } from "react-native";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import MainTabNavigator from "./MainTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "WhatsApp",
        headerStyle: {
          backgroundColor: Colors.primary,
          elevation: 0,
          shadowRadius: 0,
        },
        headerTitleStyle: {
          color: "white",
          fontWeight: "500",
        },
        headerTitleAlign: "left",

        headerRight: () => (
          <View
            style={{ backgroundColor: "transparent", flexDirection: "row" }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ marginHorizontal: 8 }}
            >
              <AntDesign name="search1" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ marginHorizontal: 8 }}
            >
              <Entypo name="dots-three-vertical" size={22} color="white" />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Stack.Screen name="Root" component={MainTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
