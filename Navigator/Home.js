import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Iniciar_sesion from "./Iniciar_sesion"

export default class Home extends Component{
    constructor(props) {
      super(props);
      this.state = { 
        codigo: '',
        origen: '',
        destino:'',
        horaSolicitud: '',
        clienteId: this.props.userID,
        cliente:this.props.nombrecompleto,
        numeroPasajeros:'',
        formaPago:'Tarjeta',
        estatus:'Pendiente',
        tripid:''
      };
    }

    componentDidMount(){
      //console.log(this.props.userID)
    }

    async solicitar() {

        var moment = require('moment');
        
        var data = {
          'origen': this.state.origen,
          'destino': this.state.destino,
          'kilometros': Math.random() * (10 - 2) + 2,
          'horaSolicitud': moment().format('YYYY-MM-DDTHH:mm:ss'),
          'vehiculoId': "08d653cc-96c7-4959-88e1-3482ad13a524",
          'clienteId': this.state.clienteId,
          'numeroPasajeros': this.state.numeroPasajeros,
          'formaPago': this.state.formaPago,
          'estatus': this.state.estatus
      }
      
        if(this.state.codigo == ''){
          Alert.alert('Hace que ingreses tu código de viaje');
          return;
        }

        if(this.state.origen == ''){
          Alert.alert('Hace falta que ingreses el origen del viaje');
          return;
        }

        if(this.state.destino == ''){
          Alert.alert('Hace falta que ingreses el destino del viaje');
          return;
        }

        if(this.state.numeroPasajeros == ''){
          Alert.alert('Hace falta que indiques cuantos lugares necesitas');
          return;
        }
        
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
            let responseJson = await response.json();
            Actions.miviaje({viaje_id:responseJson.id})
            Alert.alert('¡Viaje registrado!');
            
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
            <ImageBackground source={require('../assets/images/mapa.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>
                 <View style={styles.input}>
                    <TextInput
                    style={{fontSize:30, color:'#7A7A7A'}}
                    placeholder="Codigo de viaje"
                    placeholderTextColor='#7A7A7A'
                    autoCapitalize='words'
                    onChangeText={(codigo) => this.setState({codigo})}
                    value={this.state.codigo}
                    />
                 </View>

                 <View style={styles.input}>
                    <TextInput
                    style={{fontSize:30, color:'#7A7A7A'}}
                    placeholder="Origen"
                    placeholderTextColor='#7A7A7A'
                    autoCapitalize='words'
                    onChangeText={(origen) => this.setState({origen})}
                    value={this.state.origen}
                    />
                 </View>

                 <View style={styles.input}>
                    <TextInput
                    style={{fontSize:30, color:'#7A7A7A'}}
                    placeholder="Destino"
                    placeholderTextColor='#7A7A7A'
                    autoCapitalize='words'
                    onChangeText={(destino) => this.setState({destino})}
                    value={this.state.destino}
                    />
                 </View>

                 <View style={styles.input}>
                    <TextInput
                    style={{fontSize:30, color:'#7A7A7A'}}
                    placeholder="Pasajeros"
                    placeholderTextColor='#7A7A7A'
                    keyboardType='numeric'
                    onChangeText={(numeroPasajeros) => this.setState({numeroPasajeros})}
                    value={this.state.numeroPasajeros}
                    />
                 </View>

                 <View style={{marginTop: 300, backgroundColor: '#FFC336', width: 150, borderRadius: 20, alignItems: 'center'}}>
                    <TouchableOpacity onPress={this.solicitar.bind(this)}>
                        <Text style={{fontSize:30, color:'white'}}>Pedir</Text>
                    </TouchableOpacity>
                 </View>
            </ImageBackground>
        )
    }
}
  


const styles = StyleSheet.create({
  input: {
    backgroundColor:'white',
    borderRadius: 40,
    borderWidth:2,
    borderColor:'#53B4FF',
    marginTop:10, 
    width:250,
    height:50,
    alignItems:'center',
    justifyContent:'center'
  }
});

module.exports = Home;