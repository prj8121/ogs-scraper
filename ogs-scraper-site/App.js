import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import TextInputExample from './components/TextInputExample';
import styles from './styles/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="S1"  
          component={Screen1} 
          options={{
            headerStyle: {
              backgroundColor: '#f2b844'
            }
          }}
        />
        <Stack.Screen name="S2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:2}}>Input username</Text>
      <TextInputExample style={styles.textInput}/>
      <Button title="to Page 2" onPress={()=>navigation.navigate("S2")}/>
      <StatusBar style="auto" />
    </View>
  )
}

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:2}}>Input username v2</Text>
      <TextInputExample style={styles.textInput}/>
      <StatusBar style="auto" />
    </View>
  )
}