import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/Logo';
import { Card } from 'react-native-paper';
const num = 1+1;


const DATA = [
  {
    id: "1",
    title: "Sensor Selection ",
  },
   {
    id: "5",
    title: "Sensor Data ",
  },
  {
    id: "2",
    title: "Field Info",
  },
  {
    id: "3",
    title: "Watering Input",
  },
  {
    id: "4",
    title: "Your Field's Health",
  },
   {
    id: "6",
    title: "Watering Schedule",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);


const App = () => {
  const [state, setState] = useState(0);
  const onPress = () => setState((prevState) => prevState+1);
 const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#76D7C4" : 'green';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };



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

    <SafeAreaView style={styles.container2}>
    <Text style={styles.SelectionScreenText}>Select a category</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
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
    alignItems: 'center',
    backgroundColor: '#138D75',
    //marginTop: StatusBar.currentHeight || 0,

    paddingTop: 100,
  },
  item: {
    marginVertical: 10,//space between buttons 
    padding: 10, //box around text
    alignItems: 'center',
    justifyContent: 'Center',
    
  },
  title: {
    fontSize: 20,
    justifyContent: 'Center'
  },
  container3: {
    flex: 1,
    justifyContent: 'Center',
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#F3E5AB',
    padding: 8,
  },
  SelectionScreenText: {
    justifyContent: 'Center',
  fontSize: 20,
    color: '#FDFEFE',
  },
});

export default App;
