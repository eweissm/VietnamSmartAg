import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/Logo';
import { Card } from 'react-native-paper';
const num = 1+1;
const App = () => {
  const [state, setState] = useState(0);
  const onPress = () => setState((prevState) => prevState+1);

  if (state % 3 ==0) {
    return (
      <View style={styles.container1}>
        <AssetExample />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonStyle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (state % 3 ==1) {
    return (
      <View style={styles.container2}>
        <Text>Select Devices</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container3}>
        <Text>Select Devices</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonStyle}>Return</Text>
        </TouchableOpacity>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#b5d0d9',
    padding: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8fe388',
    padding: 10,
  },
  buttonStyle: {
    alignItems: 'center',
    padding: 10,
    fontSize: 20,
    color: '#943126',
  },
  container2: {
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#52D017',
    padding: 8,
  },
  container3: {
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#F3E5AB',
    padding: 8,
  }
});

export default App;
