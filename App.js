import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Course Goals" 
        style={styles.input}/>
        <Button title="➕"/>
      </View>
      <View>

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
  }
}); 
