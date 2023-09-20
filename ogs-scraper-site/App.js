import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:2}}>Input username</Text>
      <TextInputExample style={styles.textInput}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#ffe6b3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    borderColor: 'black',
    borderWidth:3,
    borderHeight:7,
  },
  button: {
    backgroundColor: '#668cff',
    padding: 1,
    borderRadius: 10,
  },
  iosShadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bordered: {
    borderColor: 'black',
    borderWidth:3,
  }
});


const TextInputExample = () => {
  const [inputText, setInputText] = useState(''); // Initialize a state variable to store the input text

  const handleInputChange = (text) => {
    setInputText(text); // Update the inputText state with the current text input
  };

  const handleSubmit = () => {
    // Handle the submitted input text, e.g., you can log it or use it in some way
    console.log('Input Text:', inputText);
  };

  return (
    <View>
      <TextInput
        style={[styles.textInput, styles.iosShadow, {marginBottom: 4} ]}
        placeholder="goPlayer123"
        onChangeText={handleInputChange} // Call handleInputChange when the text input changes
        value={inputText} // Set the value of the input to the inputText state
      />
      <View style={[styles.button, styles.iosShadow, styles.bordered, {borderWidth:2}]}>
        <Button title="Submit" onPress={handleSubmit}/>
      </View>
    </View>
  );
};