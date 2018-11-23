import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { Actions } from "react-native-router-flux";

  class Agregar_forma_pago extends Component{
    constructor(props) {
        super(props);
        this.state = { 
        numero_tarjeta: '',
        fecha_expiracion:'',
        CVC:'',
        
        }
    }

    async addcard() {
        console.log(this.props.userID)
      var data = {
        'clienteId': this.props.userID,
        'numeroTarjeta': this.state.numero_tarjeta,
        'fechaExpiracion': this.state.fecha_expiracion,
        'cvc': this.state.CVC,
    }
    console.log(data)
    return

      if(this.state.correo == ''||this.state.contraseña ==''||this.state.nombre==''||this.state.apellidos==''||this.state.telefono==''||this.state.direccion==''){
        Alert.alert('Hace falta llenar algunos campos');
        return;
      }

      if(this.state.contraseña != this.state.valcontraseña){
        Alert.alert('Tu contraseña no coincide');
        return;
      }
      
      try {
        let response = await fetch('http://206.189.164.14:80/api/clientes', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        if (response.ok) {
          Alert.alert('¡Bienvenido!');
          Actions.Formas_pago()
        }
        else{
          Alert.alert('Error inesperado, intenta de nuevo');
        }
      } catch (error) {
        Alert.alert('Error');
        console.error(error);
      }
      
    }

    render(){
      return(
        <View style={{flex: 1}}>

          <View style={{backgroundColor: 'white', flex: 4, alignItems: 'center'}}>
            <Text>hola</Text>
              
          </View>

          <View style={{flex:1, backgroundColor:'white', alignItems: 'center', justifyContent:'center',borderTopColor:'black', borderTopWidth:5,borderTopStartRadius:40,borderTopEndRadius:40}}>
            <View style={{backgroundColor: '#FFC336', width: 250, borderRadius: 20, alignItems: 'center'}}>
              <Button
                onPress={this.addcard.bind(this)}
                title="Agregar tarjeta"
                color='white'
              />
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

module.exports = Agregar_forma_pago;