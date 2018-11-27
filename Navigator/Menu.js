import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Content, List, ListItem, Thumbnail } from 'native-base';

export default class Menu extends Component{

    componentDidMount(){
        console.log(this.props.items[0].params.id)
    }

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'#FFC336',justifyContent:'center', alignItems:'center'}}>
                    <Thumbnail
                        source={{uri:'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg?itok=Wskh0jNP'}}
                        large
                    />
                    <Text style={{fontWeight:'bold',color:'white', fontSize:15,marginTop:10}}>Bienvenido:</Text>
                    <Text style={{fontWeight:'bold',color:'white', fontSize:30, marginTop:10}}>{this.props.items[0].params.nombre}</Text>
                    <Text style={{fontWeight:'bold',color:'white', fontSize:25, marginTop:10}}>Calificación:    {this.props.items[0].params.calificacion}</Text>
                </View>
                <View style={{flex:2}}>
                    <Content>
                        <List>
                        <ListItem style={{borderRightColor:'green',borderRightWidth:10}} onPress={() => Actions.Home({UserID:this.props.items[0].params.id})}>
                                <Text style={styles.texto}>Home</Text>
                            </ListItem>
                            <ListItem style={{borderRightColor:'blueviolet',borderRightWidth:10}} onPress={() => Actions.Historial({UserID:this.props.items[0].params.id})}>
                                <Text style={styles.texto}>Historial</Text>
                            </ListItem>
                            <ListItem style={{borderRightColor:'gray',borderRightWidth:10}} onPress={() => Actions.Formas_pago({UserID:this.props.items[0].params.id})}>
                                <Text style={styles.texto}>Formas de pago</Text>
                            </ListItem>
                            <ListItem style={{borderRightColor:'red',borderRightWidth:10}} onPress={() => Actions.Iniciar_sesion()}>
                                <Text style={styles.texto}>Cerrar sesión</Text>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20,
    
      lineHeight: 50,
    }
  });

module.exports = Menu;