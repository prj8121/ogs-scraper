import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

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
                placeholder=""
                onChangeText={handleInputChange} // Call handleInputChange when the text input changes
                value={inputText} // Set the value of the input to the inputText state
            />
            <View style={[styles.button, styles.iosShadow, styles.bordered]}>
                <Button color='black' title="Submit" onPress={handleSubmit}/>
            </View>
        </View>
    );
};

export default TextInputExample;