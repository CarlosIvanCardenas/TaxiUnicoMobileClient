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
        ID: this.props.user
        }
    }

    componentDidMount(){
      console.log(this.props.user)
    }

    async addcard() {
      var data = {
        'clienteId': this.state.ID,
        'numeroTarjeta': this.state.numero_tarjeta,
        'fechaExpiracion': this.state.fecha_expiracion,
        'cvc': this.state.CVC,
    }

      if(this.state.numero_tarjeta=='' ||this.state.fecha_expiracion==''||this.state.CVC==''){
        Alert.alert('Hace falta llenar algunos campos');
        return;
      }
      
      try {
        let response = await fetch('http://206.189.164.14:80/api/cards', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        if (response.ok) {
          Alert.alert('¡Tarjeta registrada!');
          Actions.Formas_pago({UserID:this.state.ID})
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
        <View style={{flex: 1, backgroundColor:'white'}}>

          <View style={{backgroundColor: 'white', flex: 4,marginLeft:10}}>
            <View style={{flex:1, backgroundColor:'white',justifyContent:'center',borderBottomColor:'black',borderBottomWidth:2}}>
                <View style={{backgroundColor:'white'}}>
                  <Text style={styles.titulo}>Número de tarjeta:</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                  <View style={{backgroundColor:'white', margin:10}}>
                    <Image style={{width: 120,height: 80, borderRadius: 10}}
                      source={require('../assets/images/visa.jpg')}
                    />
                  </View>

                  <View style={{backgroundColor:'white', marginTop:50}}>
                    <TextInput
                      style={styles.llenar}
                      placeholder="No. de tarjeta"
                      placeholderTextColor='#53B4FF'
                      keyboardType='numeric'
                      onChangeText={(numero_tarjeta) => this.setState({numero_tarjeta})}
                      value={this.state.numero_tarjeta}
                      />
                  </View>
                </View>
            </View>

            <View style={{backgroundColor:'white' ,flex:1, justifyContent:'center', marginTop:10,borderBottomColor:'black',borderBottomWidth:2}}>
              <Text style={styles.titulo}>Fecha de expiración:</Text>
              <TextInput
                style={styles.llenar}
                placeholder="MM/AA"
                placeholderTextColor='#53B4FF'
                onChangeText={(fecha_expiracion) => this.setState({fecha_expiracion})}
                value={this.state.fecha_expiracion}
                />
            </View>

            <View style={{backgroundColor:'white', flex:1,justifyContent:'center',marginTop:10,borderBottomColor:'black',borderBottomWidth:2}}>
              <Text style={styles.titulo}>Codigo de verificación:</Text>
              <TextInput
                style={styles.llenar}
                placeholder="CVC"
                placeholderTextColor='#53B4FF'
                onChangeText={(CVC) => this.setState({CVC})}
                value={this.state.CVC}
                />
            </View>
          </View>

          <View style={{flex:1, backgroundColor:'white', alignItems: 'center', justifyContent:'center'}}>
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
  titulo: {
    fontSize: 24,
    fontWeight:'bold'
  },
  llenar: {
    height: 20, 
    color: '#53B4FF', 
    borderBottomColor: '#53B4FF',
    borderBottomWidth: 1, 
    width: 210, 
    fontSize: 20, 
    textAlign: 'left',
    marginTop:10
  }
});

module.exports = Agregar_forma_pago;