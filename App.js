import React, { useState } from "react";
import { Game } from "./src/screens/Game/Game.js";
import Character from "./src/screens/Character/Character.js";
import { Map } from "./src/screens/Map.js";
import { Settings } from "./src/screens/Settings.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "./src/screens/Login";
import { Image, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/redux";

const Tab = createBottomTabNavigator();
export default function App() {
  const [isLoading, setLoading] = useState(true);
  const { navigator, tabNavigator } = styles;

  return isLoading ? (
    <Login setLoading={setLoading} />
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Game"
          tabBarOptions={{
            style: tabNavigator,
          }}
        >
          <Tab.Screen
            name="Game"
            component={Game}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ focused }) => (
                <Image
                  style={[
                    navigator,
                    { borderColor: focused ? "gold" : "black" },
                  ]}
                  source={require("./assets/navigationIcons/game.png")}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Character"
            component={Character}
            options={{
              tabBarLabel: " ",
              tabBarIcon: ({ focused }) => (
                <Image
                  style={[
                    navigator,
                    { borderColor: focused ? "gold" : "black" },
                  ]}
                  source={require("./assets/navigationIcons/character.png")}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={Map}
            options={{
              tabBarLabel: " ",
              tabBarIcon: ({ focused }) => (
                <Image
                  style={[
                    navigator,
                    { borderColor: focused ? "gold" : "black" },
                  ]}
                  source={require("./assets/navigationIcons/map.png")}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: " ",
              tabBarIcon: ({ focused }) => (
                <Image
                  style={[
                    navigator,
                    { borderColor: focused ? "gold" : "black" },
                  ]}
                  source={require("./assets/navigationIcons/settings.png")}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  navigator: {
    width: 40,
    height: 40,
    padding: 10,
    borderWidth: 2,
  },
  tabNavigator: {
    backgroundColor: "transparent",
    position: "absolute",
    borderTopWidth: 0,
  },
});
