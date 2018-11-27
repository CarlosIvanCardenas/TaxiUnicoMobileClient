import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Iniciar_sesion from "./Navigator/Iniciar_sesion"
import Registrarse from './Navigator/Registrarse';
import Home from './Navigator/Home';
import Menu from './Navigator/Menu';
import {Scene, Router, Actions, Drawer, Stack} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {login} from './Navigator/Api';
import Historial from './Navigator/Historial';
import Formas_pago from './Navigator/Formas_pago';
import Agregar_forma_pago from './Navigator/Agregar_forma_pago';
import miviaje from './Navigator/miviaje';


console.disableYellowBox = true;

const MenuIcon = () => {
  return(
    <Icon name={'bars'} size={30} color='white'/>
  )
}

const myIcon = (<Icon name="arrow-left" size={30} color="white" onPress={() => Actions.Formas_pago()} />)

export default class App extends Component{
  state = {
    nombrecompleto:'',
    identificacion:'',
    puntuacion: 0
  }

  getUser = async (correo,contraseña) => {
    let { error, nombre, id, calificacion } = await login(correo,contraseña)
    this.setState({nombrecompleto: nombre})
    this.setState({identificacion: id})
    this.setState({puntuacion: calificacion})
    if(error){
      Alert.alert(error)
    }else{
      
      Actions.drawer({ nombre:this.state.nombrecompleto, calificacion:this.state.puntuacion, id:this.state.identificacion})
    }

  }

  render() {
    return (
      <Router  >
        <Scene key="root" navigationBarStyle={{backgroundColor:'#53B4FF'}} titleStyle={styles.navTitle}>          
          <Scene 
            key="Iniciar_sesion" 
            component={Iniciar_sesion} 
            title="Login"
            login={this.getUser}
            initial={true}
            hideNavBar={true}
            />
            
          <Scene key="Registrarse" 
            component={Registrarse} 
            title="Sign Up" 
            hideNavBar={true} 
            gesturesEnabled={false} 
            />

                   
          <Drawer 
            key="drawer" 
            drawer={true} 
            contentComponent={Menu} 
            drawerIcon={MenuIcon} 
            drawerWidth={300} 
            hideNavBar={true}
            gesturesEnabled={false}
            >
            <Stack>
            <Scene 
            key="Home" 
            component={Home} 
            title="Nuevo viaje" 
            hideNavBar={false} 
            initial={false}
            userID={this.state.identificacion}
            nombrecompleto = {this.state.nombrecompleto}
            />
            <Scene 
            key="miviaje"
            component={miviaje}
            title="Mi viaje"
            hideNavBar={false}
            initial={false}
            />
            <Scene 
            key="Historial" 
            component={Historial} 
            title="Historial"
            initial={false}
            userID={this.state.identificacion}
            hideNavBar={false} 
            />
            <Scene 
            key="Formas_pago" 
            component={Formas_pago} 
            title="Formas de pago"
            userID={this.state.identificacion}
            initial={false}
            hideNavBar={false} 
            />
            <Scene 
            key="Agregar_forma_pago" 
            component={Agregar_forma_pago} 
            title="Detalles de la tarjeta"
            renderLeftButton={myIcon}
            gesturesEnabled={false}
            initial={false}
            hideNavBar={false} 
            /> 
            </Stack>
          </Drawer>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#1f2229', 
    paddingLeft: 20
  },
  navTitle: {
    color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
  },
});
