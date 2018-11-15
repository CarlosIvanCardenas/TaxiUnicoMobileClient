import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert } from 'react-native';
import Iniciar_sesion from "./Navigator/Iniciar_sesion"
import {NativeRouter,Switch,Route} from "react-router-native";
import Registrarse from './Navigator/Registrarse';
import Prueba from './Navigator/Prueba';

export default class App extends Component{

  render(){
    return(
      /*<NativeRouter>
        <Switch> 
          <Route exact path="/" component={Iniciar_sesion}/>  
          <Route exact path="/Registrarse" component={Registrarse}/>
        </Switch>
      </NativeRouter>*/
        <Prueba/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    marginRight: 0,
    marginBottom: 0
  },
  iniciosesion: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 40,
    textAlign: 'right',
    lineHeight: 150,
    marginRight: 24,
    marginBottom: -25
  },
  iniciosesion1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize:30,
    textAlign: 'center',
    marginBottom:24
  }
});
