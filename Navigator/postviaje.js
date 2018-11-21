import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView} from 'react-native';
import { Actions } from "react-native-router-flux";

  class postviaje extends Component{
    constructor(props) {
        super(props);
        this.state = { 
        origen: '',
        destino:'',
        horaSolicitud: '',
        clienteId:this.props.text,
        numeroPasajeros:'',
        formaPago:'Tarjeta',
        estatus:'pendiente'
        };
    }

    async signup() {
      var data = {
        'origen': this.state.origen,
        'destino': this.state.destino,
        'kilometros': this.state.kilometros,
        'horaSolicitud': this.state.horaSolicitud,
        'horaPartida': this.state.horaPartida,
        'horaLlegada': this.state.horaLlegada,
        'clienteId': this.state.clienteId,
        'numeroPasajeros': this.state.numeroPasajeros,
        'formaPago': this.state.formaPago,
        'estatus': this.state.estatus
    }

      /*if(this.state.correo == ''||this.state.contraseña ==''||this.state.nombre==''||this.state.apellidos==''||this.state.telefono==''||this.state.direccion==''){
        Alert.alert('Hace falta llenar algunos campos');
        return;
      }

      if(this.state.contraseña != this.state.valcontraseña){
        Alert.alert('Tu contraseña no coincide');
        return;
      }*/
      
      try {
        let response = await fetch('http://206.189.164.14:80/api/viajes', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        if (response.ok) {
          Alert.alert('¡Bienvenido!');
          Actions.Home()
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
              <Text style={styles.campos}>Origen</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu origen"
                placeholderTextColor='#53B4FF'
                autoCapitalize='words'
                onChangeText={(origen) => this.setState({origen})}
                value={this.state.origen}
              />

              <Text style={styles.campos}>Destino</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu destino"
                placeholderTextColor='#53B4FF'
                autoCapitalize='words'
                onChangeText={(destino) => this.setState({destino})}
                value={this.state.destino}
              />

              <Text style={styles.campos}>horaSolicitud</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu hora de solicitud"
                placeholderTextColor='#53B4FF'
                onChangeText={(horaSolicitud) => this.setState({horaSolicitud})}
                value={this.state.horaSolicitud}
              />

              <Text style={styles.campos}>horaPartida</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa tu hora partida"
                placeholderTextColor='#53B4FF'
                autoCapitalize='sentences'
                onChangeText={(horaPartida) => this.setState({horaPartida})}
                value={this.state.horaPartida}
              />


              <Text style={styles.campos}>numeroPasajeros</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa otra vez tu"
                placeholderTextColor='#53B4FF'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={(numeroPasajeros) => this.setState({numeroPasajeros})}
                value={this.state.numeroPasajeros}
              />

              <Text style={styles.campos}>formaPago</Text>
              <TextInput
                style={styles.llenar}
                placeholder="Ingresa otra vez tu"
                placeholderTextColor='#53B4FF'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={(formaPago) => this.setState({formaPago})}
                value={this.state.formaPago}
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

module.exports = postviaje;