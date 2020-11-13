import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, 
      {uid: Math.random().toString(), value: enteredGoal}]);
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
      <FlatList 
      keyExtractor={(item, index) => item.uid}
      data={courseGoals} 
      renderItem={itemData => <GoalItem title={itemData.item.value} />} 
      /> 
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


}); 
 