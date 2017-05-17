import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity,Alert } from 'react-native';
//estilos

const Styles = {
  principal: {
    paddingTop: 40,
    // backgroundColor: '#538530',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 50
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
var gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  
  numeroAleatorio = Math.floor(numeroAleatorio * 7);
  
  var frases= Array();
  frases[0] = 'Amo a Hanny o dia todo !';
  frases[1] = 'Amo a Hanny toda Hora !';
  frases[2] = 'Amo você minha princesa !'; 
  frases[3] = 'Amo seu pé !'; 
  frases[4] = 'Amo seu chulé, mentira kk !';
  frases[5] = 'Amo sair para sair com voce meu amor !';
  frases[6] = 'Amo você, mais amo mais seu pé !';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
   
}

//componentes
const App = () => {

  const { principal, botao, textoBotao } = Styles;

  return (
    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova Frase !</Text>
      </TouchableOpacity>
    </View>

  );

};
AppRegistry.registerComponent('app2', () => App);