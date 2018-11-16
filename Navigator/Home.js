import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert, TouchableOpacity } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

const hola = () => {
  Alert.alert('You tapped the button!')
  };
  

export default ({history}) => (

    <View style={{flex: 1}}>
    
      
      <View style={{backgroundColor: 'white', flex: 1}}>
      </View> 

      <View style={{backgroundColor: '#53B4FF', flex: 2,flexDirection: 'row'}}>
        <View style={{flex:1,margin:5,backgroundColor:'#53B4FF', marginRight:295}}>
            <FontAwesome name="navicon" size={35} color="white" onPress={hola}/>
        </View>
        <View style={{flex:1,margin:5,backgroundColor:'#53B4FF', marginLeft:-600}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white',fontSize:30}}>Nuevo viaje</Text>
        </View>
        
      </View>

      <View style={{backgroundColor: 'white', flex: 25}}>

      </View>

      
    </View>
  );


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
