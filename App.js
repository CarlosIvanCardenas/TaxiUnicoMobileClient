import React, {Component} from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, AppRegistry, Image, TextInput, Keyboard, Button, Alert } from 'react-native';

export default class App extends Component{

  _onPressButton() {
    Alert.alert('You tapped the button!')
    
  }

  render(){
    return(
      <View style={styles.elementsContainer}>
        <View style={{flex: 2.6, backgroundColor: '#53B4FF', paddingVertical: 20}}>
          <Image style={{width: 100,height: 100, marginBottom: -120, marginTop: 10, marginLeft: 15}}
            
            source={require('./assets/images/logo.png')}
          />
          <Text style={styles.iniciosesion}>TAXI UNICO</Text>
          <Text style={styles.iniciosesion1}>Ingresa a tu cuenta</Text>
        </View>
        <View style={{flex: 5, backgroundColor: 'white', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', marginTop: 30, fontSize: 30}}>Correo electronico</Text>
          <TextInput
            style={{height: 40, color: '#53B4FF', borderBottomColor: '#53B4FF',borderBottomWidth: 1, width: 275, fontSize: 20, textAlign: 'center'}}
            placeholder="Ingresa tu correo electronico"
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
            onPress={this._onPressButton}
            //onPress={() => this.props.navigation.navigate("./screen/registro")}
            title="Iniciar sesión"
            color='white'
          />
          </View>
        </View>
        <View style={{flex: 2, backgroundColor: 'white', alignItems: 'center',margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{marginTop: -40, fontSize: 10}}>¿Olvidaste tu contraseña?</Text>
        <Text style={{marginTop: -40, fontSize: 10}}>¿Aun no tienes cuenta?</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    marginRight: 0,
    marginBottom: 0
  },
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
