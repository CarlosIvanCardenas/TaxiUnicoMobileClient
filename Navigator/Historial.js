import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Button, Alert, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import { Actions } from "react-native-router-flux";

  export default class Historial extends Component{
    constructor(props) {
      super(props);
      this.state = { 
        ID: this.props.UserID,
        items: []
      };
    }

    async getTrips(){
      try {
        let response = await fetch('http://206.189.164.14:80/api/viajes/cliente/'+this.state.ID);
        if(response.ok) {
          let responseJson = await response.json();
          for (let index =0;index < responseJson.length;index++){
            let obj = responseJson[index];
            this.state.items.push(obj);
          }
          this.forceUpdate();
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

    formatohora(date){
      var moment = require('moment');
      var date1 = moment(date).format('llll');
      return date1
    }

    componentDidMount(){
      this.getTrips();
      //console.log(this.props)
      console.log(this.props.UserID)
    }
  
    render(){
      return(

        <View style={{flex: 1, backgroundColor:'white'}}>
          <View style={{backgroundColor: 'white', flex: 4,}}> //alignItems: 'center'}}>
            
            <FlatList 
              data ={this.state.items} 
              removeClippedSubviews={false}
              renderItem={({item,index}) =>
                <View style={{backgroundColor: '#d1d8e0',flexDirection:'column',marginTop:30, borderTopStartRadius:20, borderTopEndRadius:20, borderBottomStartRadius:20, borderBottomEndRadius:20, margin:10}}>
            
                  <View style={{flex:2,margin:10}}>
                    <Image style={{width: 335,height: 160, borderRadius: 10}}
                      source={require('../assets/images/viaje.jpg')}
                    />
                  </View>

                  <View style={{flex:3, margin:10}}>

                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

                      <View style={{alignItems:'flex-start'}}>
                        <Text style={styles.texto}> {this.formatohora(item.horaPartida)}</Text>
                      </View>

                      <View style={{alignItems:'flex-end'}}>
                        <Text style={styles.texto}>MX ${(Math.floor(Math.random() * 61)+20)}</Text>
                      </View>

                    </View>

                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>

                      <View style={{alignItems:'flex-start'}}>
                        <Text style={styles.texto}>{item.vehiculo.marca}  {item.vehiculo.modelo}</Text>
                      </View>

                      <View style={{alignItems:'flex-end'}}>
                        <Text style={styles.texto}>{item.formaPago}</Text>
                      </View>
                    </View>  
                  </View>      
                </View>
              }
            />
          </View>
        </View>
      )
    }
  }


const styles = StyleSheet.create({
  texto: {
    color: 'black',
    fontSize: 15,
  }
});

module.exports = Historial;