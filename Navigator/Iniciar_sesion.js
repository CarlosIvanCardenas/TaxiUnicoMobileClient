import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import { Actions } from "react-native-router-flux";

  export default class Iniciar_sesion extends Component{
    constructor(props) {
        super(props);
        this.state = {
          correo: 'flimflo2@hotmail.com',
          contraseña: '12345',
          nombre:'',
          IDCliente: '',
        };
    }

    _onPressButton() {
      Alert.alert('Te hemos enviado tu contraseña a tu correo');
    };

    login(){
      this.props.login(this.state.correo,this.state.contraseña)
    }

   
  
    render(){
      return(

        <View style={{flex: 1}}>
    
          <View style={{backgroundColor: 'white', flex: .26}}>
          </View> 

          <View style={{backgroundColor: '#53B4FF', flex: 2.6}}>
            <Image style={{width: 100,height: 100, marginBottom: -120, marginTop: 20, marginLeft: 15}}
            source={require('../assets/images/logo.png')}
            />
            <Text style={styles.iniciosesion}>TAXI UNICO</Text>
            <Text style={styles.iniciosesion1}>Ingresa a tu cuenta</Text>
          </View> 

          <View style={{backgroundColor: 'white', flex: 5, alignItems: 'center'}}>
            <Text style={{textAlign: 'center', marginTop: 30, fontSize: 30}}>Correo electrónico</Text>
            <TextInput
              style={{height: 40, color: '#53B4FF', borderBottomColor: '#53B4FF',borderBottomWidth: 1, width: 275, fontSize: 20, textAlign: 'center'}}
              placeholder="Ingresa tu correo electrónico"
              placeholderTextColor='#53B4FF'
              autoCapitalize='none'
              onChangeText={(correo) => this.setState({correo})}
              value={this.state.correo}
            />

            <Text style={{textAlign: 'center', marginTop: 30, fontSize: 30}}>Contraseña</Text>
            <TextInput
              style={{height: 40, color: '#53B4FF', borderBottomColor: '#53B4FF',borderBottomWidth: 1, width: 275, fontSize: 20, textAlign: 'center', marginBottom: 1}}
              placeholder="Ingresa tu contraseña"
              placeholderTextColor='#53B4FF'
              autoCapitalize='none'
              secureTextEntry={true}
              onChangeText={(contraseña) => this.setState({contraseña})}
              value={this.state.contraseña}
            />

            <View style={{marginTop: 40, backgroundColor: '#FFC336', width: 250, borderRadius: 20}}>
              <Button
                onPress={this.login.bind(this)}
                title="Iniciar sesión"
                color='white'
              />
            </View>
          </View> 

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flex:1, backgroundColor: 'white',alignItems: 'center'}}>
              <Text style={{fontSize: 14}}>¿Olvidaste tu contraseña?</Text>
              <TouchableOpacity style={{marginTop:10}} onPress={this._onPressButton.bind(this)}>
                <Text style={{textDecorationLine:'underline', color: '#53B4FF'}}>Presiona aquí</Text>
              </TouchableOpacity>
            </View>
        
            <View style={{flex:1, backgroundColor: 'white',alignItems: 'center'}}>
              <Text style={{fontSize: 14}}>¿Aun no tienes cuenta?</Text>
                <TouchableOpacity style={{marginTop:10}} onPress={() => Actions.Registrarse()}>
                  <Text style={{textDecorationLine:'underline', color: '#53B4FF'}}>Registrate</Text>
                </TouchableOpacity>
            </View>
          </View> 
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

module.exports = Iniciar_sesion;