import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import { Actions } from "react-native-router-flux";

  export default class Configuracion extends Component{

   
  
    render(){
      return(

        <View style={{flex: 1}}>
    
        </View>
      )
    }
  }


const styles = StyleSheet.create({
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

module.exports = Configuracion;