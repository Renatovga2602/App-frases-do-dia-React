import React from 'react';
import { Text, AppRegistry } from 'react-native';
//estilos

const Styles = {
  styleText: {
    fontSize: 30,
    backgroundColor: '#08509B',
    padding: 10,
    margin: 30
   
  }
};

//componentes
const App = () => {
  return (
    <Text style={Styles.styleText}>
      Frases do dia
    </Text>
  );

};
AppRegistry.registerComponent('app2', () => App);