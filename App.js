import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goals" 
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="➕"
        onPress={addGoalHandler}
        />
      </View>
      <View>
        {courseGoals.map((goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  input: {
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10, 
    width: '80%'
  }, 
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }

}); 
