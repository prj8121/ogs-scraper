import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! spooky like magic wow flexible</Text>
      <TextInputExample />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
        placeholder="Type something..."
        onChangeText={handleInputChange} // Call handleInputChange when the text input changes
        value={inputText} // Set the value of the input to the inputText state
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};