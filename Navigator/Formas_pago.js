import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Actions } from "react-native-router-flux";

  export default class Formas_pago extends Component{
    constructor(props) {
      super(props);
      this.state = { 
        ID: this.props.user,
        items: []
      };
    }

    async getCards(){
      try {
        let response = await fetch('http://206.189.164.14:80/api/cards/cliente/'+this.props.userID);
        if(response.ok) {
          let responseJson = await response.json();
          for (let index =0;index < responseJson.length;index++){
            let obj = responseJson[index];
            this.state.items.push(obj);
          }
          this.forceUpdate();
        }
        else {
            error = 'Correo o contraseña incorrectos2'
            console.log(error)
        }
      } 
      catch (error) {
        alert(error);
      }
    }

    componentDidMount(){
      //console.log(this.props.userID)
      this.getCards();
    }

    _onthis(){
      Actions.Agregar_forma_pago({user:this.props.userID})
    }
   
  
    render(){
      return(

        <View style={{flex: 1, backgroundColor:'white'}}>
          <View style={{backgroundColor: 'white', flex: 4,}}> //alignItems: 'center'}}>
            
              <FlatList 
                data ={this.state.items} 
                removeClippedSubviews={false}
                renderItem={({item,index}) =>
                  <View style={{backgroundColor: '#d1d8e0',flexDirection:'row',marginTop:30, borderTopStartRadius:20, borderTopEndRadius:20, borderBottomStartRadius:20, borderBottomEndRadius:20, margin:10}}>
            

                      <View style={{flex:2,margin:10}}>
                      <Image style={{width: 140,height: 80, borderRadius: 10}}
                        source={require('../assets/images/tarjeta.jpg')}
                        />
                        </View>
                        <View style={{flex:3, justifyContent:'center',margin:10}}>
                          <View style={{alignItems:'flex-start'}}>
                          <Text style={{color:'gray'}}>Numero de tarjeta:</Text>
                          </View>
                          <View style={{alignItems:'flex-end'}}>
                          <Text style={{fontSize:15}}>{item.numeroTarjeta}</Text>
                          </View>
                          <View style={{alignItems:'flex-start'}}>
                          <Text style={{color:'gray'}}>Fecha de expiración:</Text>
                          </View>
                          <View style={{alignItems:'flex-end'}}>
                          <Text style={{fontSize:15}}>{item.fechaExpiracion}</Text>
                          </View>
                      </View>
                  </View>
                }
              />
            
          </View>

          <View style={{flex:1, backgroundColor:'white', alignItems: 'center', justifyContent:'center',borderTopColor:'black', borderTopWidth:5,borderTopStartRadius:40,borderTopEndRadius:40}}>
            <View style={{backgroundColor: '#FFC336', width: 250, borderRadius: 20, alignItems: 'center'}}>
              <Button
                onPress={this._onthis.bind(this)}
                title="Agregar nueva forma de Pago"
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
  }
});

module.exports = Formas_pago;


/*
<Text>Numero de tarjeta:{item.numeroTarjeta}</Text>
<Text>Fecha de expiración:{item.fechaExpiracion}</Text>
*/