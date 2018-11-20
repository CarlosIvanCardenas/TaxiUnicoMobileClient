import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Content, List, ListItem, Thumbnail } from 'native-base';

export default class Menu extends Component{

    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'#FFC336',justifyContent:'center', alignItems:'center'}}>
                    <Thumbnail
                        source={{uri:'https://www.morpht.com/sites/morpht/files/styles/landscape_medium/public/dalibor-matura_1.jpg?itok=Wskh0jNP'}}
                        large
                    />
                    <Text>Hola</Text>
                </View>
                <View style={{flex:2}}>
                    <Content>
                        <List>
                        <ListItem onPress={() => Actions.Home()}>
                                <Text>Home</Text>
                            </ListItem>
                            <ListItem >
                                <Text>Historial</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Formas de pago</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Configuración</Text>
                            </ListItem>
                            <ListItem onPress={() => Actions.Iniciar_sesion()}>
                                <Text>Cerrar sesión</Text>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </View>
        )
    }
}

module.exports = Menu;