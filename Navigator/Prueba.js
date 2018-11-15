import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert, TouchableOpacity } from 'react-native';



export default ({history}) => (

    <View style={{flex: 1}}>
        <View style={{backgroundColor: 'white', flex: 1}}>
        </View> 

        <View style={{backgroundColor: 'white', flex: 1, alignItems:'center'}}>
        
        <TextInput
          style={{height: 40, color: '#53B4FF', borderBottomColor: '#53B4FF',borderBottomWidth: 1, width: 275, fontSize: 20, textAlign: 'center'}}
          placeholder="primero"
          placeholderTextColor='#53B4FF'
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40, color: '#53B4FF', borderBottomColor: '#53B4FF',borderBottomWidth: 1, width: 275, fontSize: 20, textAlign: 'center'}}
          placeholder="segundo"
          placeholderTextColor='#53B4FF'
          onChangeText={(text) => this.setState({text})}
        />
        <View style={{marginTop: 40, backgroundColor: '#FFC336', width: 250, borderRadius: 20}}>
          <Button
            onPress={this._onPressButton}
            title="boton"
            color='white'
          />
        </View>

        </View> 

        <View style={{backgroundColor: 'owhite', flex: 1}}>
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
