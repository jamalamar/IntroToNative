import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Buttons from './Components/Buttons.js'



export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Hello World!</Text>
      <Buttons/>
    
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
  title: {
    color: '#000',
    fontSize: '50px',
    flexUp: 30,
  },
});
