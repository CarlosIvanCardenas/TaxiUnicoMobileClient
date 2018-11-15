import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert, TouchableOpacity } from 'react-native';

/*_onPressButton() {
    Alert.alert('You tapped the button!');
  };*/

export default ({history}) => (

    <View style={{flex: 1}}>
    
      
      <View style={{backgroundColor: 'white', flex: .26}}>
      </View> 

      <View style={{backgroundColor: '#53B4FF', flex: 2.6}}>
          <Image style={{width: 100,height: 100, marginBottom: -120, marginTop: 20, marginLeft: 15}}
            
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.iniciosesion}>TAXI UNICO</Text>
          <Text style={styles.iniciosesion1}>Ingresa a tu cuenta</Text>
      </View> 

      <View style={{backgroundColor: 'white', flex: 5, alignItems: 'center'}}>
        <Text style={{textAlign: 'center', marginTop: 30, fontSize: 30}}>Correo electrónico</Text>
        <TextInput
          style={{height: 40, color: '#53B4FF', borderBottomColor: '#53B4FF',borderBottomWidth: 1, width: 275, fontSize: 20, textAlign: 'center'}}
          placeholder="Ingresa tu correo electrónico"
          placeholderTextColor='#53B4FF'
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{textAlign: 'center', marginTop: 30, fontSize: 30}}>Contraseña</Text>
        <TextInput
          style={{height: 40, color: '#53B4FF', borderBottomColor: '#53B4FF',borderBottomWidth: 1, width: 275, fontSize: 20, textAlign: 'center', marginBottom: 1}}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor='#53B4FF'
          onChangeText={(text) => this.setState({text})}
        />
        <View style={{marginTop: 40, backgroundColor: '#FFC336', width: 250, borderRadius: 20}}>
          <Button
            onPress={() => history.push("")}//this._onPressButton}
            title="Iniciar sesión"
            color='white'
          />
        </View>
      </View> 

      <View style={{flex: 1,margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex:1, backgroundColor: 'white',alignItems: 'center'}}>
          <Text style={{fontSize: 14}}>¿Olvidaste tu contraseña?</Text>
          <TouchableOpacity style={{marginTop:10}} onPress={() => history.push("")}>
            <Text style={{textDecorationLine:'underline', color: '#53B4FF'}}>Presiona aquí</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{flex:1, backgroundColor: 'white',alignItems: 'center'}}>
          <Text style={{fontSize: 14}}>¿Aun no tienes cuenta?</Text>
          <TouchableOpacity style={{marginTop:10}} onPress={() => history.push("Registrarse")}>
            <Text style={{textDecorationLine:'underline', color: '#53B4FF'}}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View> 
    </View>
  );


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
