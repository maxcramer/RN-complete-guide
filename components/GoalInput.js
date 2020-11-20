import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }

    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goals" 
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="❌" color="red" onPress={props.onCancel}/>
          </View>
          <View style={styles.button}>
            <Button title="➕" onPress={addGoalHandler}/>
          </View>
        </View>
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent:'center', 
        alignItems:'center',
        flex: 1
      },
      input: {
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10, 
        width: '80%',
        marginBottom: 10
      },

      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
      },

      button: {
        width: '40%'
      }
});

export default GoalInput;