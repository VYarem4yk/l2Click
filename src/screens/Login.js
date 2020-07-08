import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/logo.gif";

export const Login = ({ setLoading }) => {
  const {
    loginWrapper,
    logoStyle,
    startButtonStyle,
    startButtonTextStyle,
  } = styles;
  return (
    <View style={loginWrapper}>
      <Image source={logo} style={logoStyle} />

      <TouchableOpacity
        onPress={() => {
          setLoading(false);
        }}
        style={startButtonStyle}
      >
        <Text style={startButtonTextStyle}>START</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  logoStyle: {
    width: 305,
    height: 159,
  },

  startButtonStyle: {
    padding: 20,
  },
  startButtonTextStyle: { color: "white", fontSize: 32 },
});
