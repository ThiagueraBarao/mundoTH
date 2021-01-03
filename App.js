import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PrimeiroComponente from './src/PrimeiroComponente';

export default class App extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render (){
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <PrimeiroComponente text = "Agora foi"/>

      <PrimeiroComponente text = "Agora foi 3"/>

      <PrimeiroComponente text = "Agora foi 3"/>

    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
