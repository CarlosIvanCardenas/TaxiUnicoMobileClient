import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Iniciar_sesion from "./Iniciar_sesion"

export default class miviaje extends Component{
    constructor(props) {
      super(props);
      this.state = { 
          Estatus_viaje: '',
          texto:'',
          interval:'',
          viaje: null,
      };
    }

    cancelarViaje(){
        let item = this.state.viaje;
        item.estatus = "Cancelado";
        try {
            fetch('http://206.189.164.14/api/viajes/' + item.id, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });
            Actions.reset('Home',{userID: item.clienteId});
            Alert.alert('Viaje cancelado');
        } catch (error) {
            console.log(error);
        }
        
    }

    async buscar(){
        try {
            let response = await fetch('http://206.189.164.14:80/api/viajes/'+this.props.viaje_id);
            if(response.ok) {
              let responseJson = await response.json();
              this.setState({viaje:responseJson})
              let estado = responseJson.estatus
              if(estado == "Cancelado"){
                let nombre = responseJson.vehiculo.taxista.primerNombre
                let apellido = responseJson.vehiculo.taxista.apellidos
                Actions.reset('Home',{userID: this.state.viaje.clienteId});
                Alert.alert(nombre+' '+apellido+' ha cancelado tu viaje');
              }
              else if(estado == "Pendiente"){
                this.setState({texto:"Buscando un conductor"})
              }
              else if(estado == "Esperando taxista"){
                  let nombre = responseJson.vehiculo.taxista.primerNombre
                  let apellido = responseJson.vehiculo.taxista.apellidos
                  let carro = responseJson.vehiculo.modelo
                  let color = responseJson.vehiculo.color
                  let placas = responseJson.vehiculo.placa
                this.setState({texto: nombre+" "+apellido+" esta en camino en un "+carro+" "+color+" con placas: "+placas})
              }
              else if(estado == "En curso"){
                this.setState({texto:"Disfruta tu viaje"})
              }
              else if(estado == "Terminado"){
                this.setState({texto:""})
                Alert.alert('Tu viaje ha terminado');
                Actions.reset('Home')
              }
            }
            else {
                error = 'Error'
                console.log(error)
            }
          } 
          catch (error) {
            alert(error);
          }
    }

    componentDidMount(){
      this.buscar()
      
      this.inter = setInterval(() => {this.buscar();},3000)
    }

    componentWillUnmount(){

        clearInterval(this.inter)
    }

    _onpress(){
        //Alert.alert('You tapped the button!')
        //console.log(this.props)
    }

    render(){
        return(
            <ImageBackground source={require('../assets/images/mapa.jpg')} style={{width: '100%', height: '100%',alignItems:'center'}}>

                <View style={styles.input}>
                    <Text style={{fontSize:20,textAlign:'center'}}>{this.state.texto}</Text>
                </View>

                <View style={{marginTop: 40, backgroundColor: 'red', width: 250, borderRadius: 20}}>
                    <Button
                        onPress={this.cancelarViaje.bind(this)}
                        title="Cancelar"
                        color='white'
                    />
                </View>

            </ImageBackground>
        )
    }
      
    
}
  


const styles = StyleSheet.create({
  input: {
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth:2,
    borderColor:'#FFC336',
    marginTop:120, 
    width:300,
    height:300,
    alignItems:'center',
    justifyContent:'center',
    alignItems:'center',
    margin:10
  }
});

module.exports = miviaje;

/*<View style={{backgroundColor: 'orange', flex: 1}}>
                    <Text style={{color:'red'}}>prueba</Text>
                    <Text style={{color:'red'}}>{this.props.data}</Text>
                        <View style={{marginTop: 40, backgroundColor: '#FFC336', width: 250, borderRadius: 20}}>
                            <Button
                                onPress={this._onpress()}
                                title="Iniciar sesión"
                                color='white'
                            />
                        </View>
                </View> */



/*
 <View style={{backgroundColor: 'white', flex: 1,alignItems: 'center'}}>
                    <Text style={styles.campos}>Origen</Text>
                    <TextInput
                    style={{backgroundColor:'#FFC336',borderRadius: 20, fontSize:40}}
                    placeholder="Ingresa tu origen"
                    placeholderTextColor='#53B4FF'
                    autoCapitalize='words'
                    onChangeText={(origen) => this.setState({origen})}
                    value={this.state.origen}
                    />
                </View>
 */