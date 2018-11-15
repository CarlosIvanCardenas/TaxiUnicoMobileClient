import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert, TouchableOpacity } from 'react-native';

/*_onPressButton() {
    Alert.alert('You tapped the button!');
  };*/

export default ({history}) => (

    <View style={{flex: 1}}>
    
      
      <View style={{backgroundColor: 'white', flex: .26}}>
      </View> 


      <View style={{backgroundColor: '#53B4FF', flex: 1.92}}>
        <Image style={{width: 100,height: 100, marginBottom: -120, marginTop: 20, marginLeft: 15}}
            
            source={require('../assets/images/logo.png')}
          />
          <Text style={styles.iniciosesion}>TAXI UNICO</Text>
          <Text style={styles.iniciosesion1}>Crea una cuenta</Text>
      </View> 


      <View style={{backgroundColor: 'white', flex: 5, alignItems: 'center'}}>
        <Text style={styles.campos}>Nombre</Text>
          <TextInput
            style={styles.llenar}
            placeholder="Ingresa tu nombre de usuario"
            placeholderTextColor='#53B4FF'
            onChangeText={(text) => this.setState({text})}
          />
        <Text style={styles.campos}>Correo electrónico</Text>
          <TextInput
            style={styles.llenar}
            placeholder="Ingresa tu correo electrónico"
            placeholderTextColor='#53B4FF'
            onChangeText={(text) => this.setState({text})}
          />
        <Text style={styles.campos}>Teléfono</Text>
          <TextInput
            style={styles.llenar}
            placeholder="Ingresa tu número de teléfono"
            placeholderTextColor='#53B4FF'
            onChangeText={(text) => this.setState({text})}
          />
        <Text style={styles.campos}>Contraseña</Text>
          <TextInput
            style={styles.llenar}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor='#53B4FF'
            onChangeText={(text) => this.setState({text})}
          />
        <Text style={styles.campos}>Valida tu contraseña</Text>
          <TextInput
            style={styles.llenar}
            placeholder="Ingresa otra vez tu contraseña"
            placeholderTextColor='#53B4FF'
            onChangeText={(text) => this.setState({text})}
          />
        <View style={{marginTop: 20, backgroundColor: '#FFC336', width: 250, borderRadius: 20}}>
          <Button
            //onPress={() => history.push("/Registrarse")}
            title="Registrarse"
            color='white'
          />
        </View>

        <View style={{flex:1, backgroundColor: 'white',alignItems: 'center',marginTop: 10}}>
          <Text style={{fontSize: 14}}>¿Ya tienes cuenta?</Text>
          <TouchableOpacity style={{marginTop:5}} onPress={() => history.push("/")}>
            <Text style={{textDecorationLine:'underline', color: '#53B4FF'}}>Inicia sesión</Text>
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
  },
  campos: {
    textAlign: 'center', 
    marginTop: 10, 
    fontSize: 30
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
