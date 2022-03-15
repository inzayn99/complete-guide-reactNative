import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
      <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderWidth: 1 }}/>
      <Button title='ADD' />
      </View>
      <View>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
