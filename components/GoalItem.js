import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const GoalItem = ({ goal, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(goal.id)}>
      <View style={styles.listItem}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
