import React from 'react';
import { Text, AppRegistry,View } from 'react-native';
//estilos

const Styles = {
  styleText: {
    fontSize: 30,
    backgroundColor: '#08509B',
    // padding: 10,
    // margin: 50
    color: '#fff',
    //textDecorationLine: 'underline'
    textAlign: 'center',
    heigth: 60,
    width: 60
    //fontStyle: 'italic',
    //fontWeight: 'bold'//100 e 900
  },
  styleView: {
    backgroundColor: 'skyblue',
    heigth: 300,
    justifyContent: 'center',//alinha na vertical
    alignItems: 'flex-end'//alinha na horizontal
    //flexDorection: 'row' --define a direção que as caixas ficaram;

  }
};

//componentes
const App = () => {
 
  const {styleText, styleView} = Styles;
   
    return (
  <View style= {styleView}>
     <Text style={styleText}>
       Frases do dia
        </Text>
          </View>
  );

};
AppRegistry.registerComponent('app2', () => App);