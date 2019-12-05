import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
//2h31min.

const GoalInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Goals"
        style={styles.input}
        onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
      />
      <Button title="Add" onPress={props.addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10
  }
});

export default GoalInput;
