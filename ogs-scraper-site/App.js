import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import TextInputExample from './components/TextInputExample';
import styles from './styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:2}}>Input username</Text>
      <TextInputExample style={styles.textInput}/>
      <StatusBar style="auto" />
    </View>
  );
}