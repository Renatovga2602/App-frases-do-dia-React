import React from 'react';
import { Text, AppRegistry,View,Button,TouchableOpacity } from 'react-native';
//estilos

const Styles = {
  principal: {
 
    paddingTop: 40
  },
 
  botao:{
  
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#d8eb8',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width:0, heigth:2},
    shadowOpacity: 0.4
},
  textoBotao:{
   
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }

};
const buttonPress = () => {
  alert ('Butão pressionado');
}
//componentes
const App = () => {
 
  const {principal, botao,textoBotao} = Styles;
   
    return (
      <View style={principal}>
        

        <Button
          onPress={buttonPress}
          title= 'Clique aqui'
          color= '#841584'
          accessibilityLabel='Clique para abrir as noticias!!!'//recurso de acessibilidade
        
        />
        <TouchableOpacity style={botao}>
          <Text style={textoBotao}>Clique aqui!</Text>
        </TouchableOpacity>

      </View>
  
  );

};
AppRegistry.registerComponent('app2', () => App);