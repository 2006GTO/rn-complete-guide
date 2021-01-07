import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  useEffect(() => {}, []);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addCourseGoal = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString, value: enteredGoal },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"input here"}
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Change Text" onPress={addCourseGoal} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "60%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
