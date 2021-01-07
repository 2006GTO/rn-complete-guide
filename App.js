import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function App() {
  const [dynamicText, setDynamicText] = useState("Click to change");
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder={"A Nice Placeholder"}
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
          }}
        />
        <Button
          title="Change Text"
          onPress={() => setDynamicText("you clicked it!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
