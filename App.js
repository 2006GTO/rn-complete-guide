import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addCourseGoal = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const handleOnDelete = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalOpen(!modalOpen)} />
      <GoalInput
        visible={modalOpen}
        closeModal={() => setModalOpen(!modalOpen)}
        onAddGoal={addCourseGoal}
      />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem onDelete={handleOnDelete} goal={itemData.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
