import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { Actions } from "react-native-router-flux";

  const newPost = post => {

    fetch('http://206.189.164.14:80/api/clientes', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });  
  }

  class Registrarse extends Component{
    constructor(props) {
        super(props);
        this.state = { 
        nombre: '',
        apellidos:'',
        direccion:'',
        correo: '',
        telefono:'',
        contraseña: '',
        valcontraseña:''};
    }

    signup() {
      var data = {
        'correo': this.state.correo,
        'contraseña': this.state.contraseña,
        'primerNombre': this.state.nombre,
        'apellidos': this.state.apellidos,
        'telefono': this.state.telefono,
        'direccion': this.state.direccion,
        'estatus': "Activo"
    }

      if(this.state.correo == ''||this.state.contraseña ==''||this.state.nombre==''||this.state.apellidos==''||this.state.telefono==''||this.state.direccion==''){
        Alert.alert('Hace falta llenar algunos campos');
        return;
      }

      if(this.state.contraseña != this.state.valcontraseña){
        Alert.alert('Tu contraseña no coincide');
        return;
      }
      
      newPost(data)
      Alert.alert('¡Bienvenido!');
      Actions.Home()
      //getPost()
      //console.log()
    }

    render(){
      return(
        <View style={{flex: 1}}>
    
          <View style={{backgroundColor: 'white', flex: .26}}>
          </View> 

          <View style={{backgroundColor: '#53B4FF', flex: 2.2}}>
            <Image style={{width: 100,height: 100, marginBottom: -120, marginTop: 20, marginLeft: 15}}
              source={require('../assets/images/logo.png')}
            />
            <Text style={styles.iniciosesion}>TAXI UNICO</Text>
            <Text style={styles.iniciosesion1}>Crea una cuenta</Text>
          </View> 

          <View style={{backgroundColor: 'white', flex: 4, alignItems: 'center'}}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
              <Text style={styles.campos}>Nombre</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu nombre"
                placeholderTextColor='#53B4FF'
                autoCapitalize='words'
                onChangeText={(nombre) => this.setState({nombre})}
                value={this.state.nombre}
              />

              <Text style={styles.campos}>Apellidos</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tus apellidos"
                placeholderTextColor='#53B4FF'
                autoCapitalize='words'
                onChangeText={(apellidos) => this.setState({apellidos})}
                value={this.state.apellidos}
              />

              <Text style={styles.campos}>Correo electrónico</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu correo electrónico"
                placeholderTextColor='#53B4FF'
                autoCapitalize='none'
                onChangeText={(correo) => this.setState({correo})}
                value={this.state.correo}
              />

              <Text style={styles.campos}>Teléfono</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu número de teléfono"
                placeholderTextColor='#53B4FF'
                keyboardType='numeric'
                onChangeText={(telefono) => this.setState({telefono})}
                value={this.state.telefono}
              />

              <Text style={styles.campos}>Dirección</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu dirección"
                placeholderTextColor='#53B4FF'
                autoCapitalize='sentences'
                onChangeText={(direccion) => this.setState({direccion})}
                value={this.state.direccion}
              />

              <Text style={styles.campos}>Contraseña</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu contraseña"
                placeholderTextColor='#53B4FF'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={(contraseña) => this.setState({contraseña})}
                value={this.state.contraseña}
              />

              <Text style={styles.campos}>Valida tu contraseña</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa otra vez tu contraseña"
                placeholderTextColor='#53B4FF'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={(valcontraseña) => this.setState({valcontraseña})}
                value={this.state.valcontraseña}
              />
            </ScrollView>
          </View>

          <View style={{flex:1.6, backgroundColor:'white', alignItems: 'center'}}>
            <View style={{marginTop: 20, backgroundColor: '#FFC336', width: 250, borderRadius: 20, alignItems: 'center'}}>
              <Button
                onPress={this.signup.bind(this)}
                title="Registrarse"
                color='white'
              />
            </View>

            <View style={{ backgroundColor: 'white',alignItems: 'center',marginTop: 20}}>
              <Text style={{fontSize: 14}}>¿Ya tienes cuenta?</Text>
              <TouchableOpacity style={{marginTop:5}} onPress={() => Actions.Iniciar_sesion()}>
                <Text style={{textDecorationLine:'underline', color: '#53B4FF'}}>Inicia sesión</Text>
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
  },
  campos: {
    textAlign: 'center', 
    marginTop: 10, 
    fontSize: 24
  },
  llenar: {
    height: 20, 
    color: '#53B4FF', 
    borderBottomColor: '#53B4FF',
    borderBottomWidth: 1, 
    width: 275, 
    fontSize: 20, 
    textAlign: 'center'
  }
});

module.exports = Registrarse;