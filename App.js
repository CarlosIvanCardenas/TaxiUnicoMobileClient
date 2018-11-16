import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Iniciar_sesion from "./Navigator/Iniciar_sesion"
import Registrarse from './Navigator/Registrarse';
import Prueba from './Navigator/Prueba';
import Home from './Navigator/Home';
import {Scene, Router, Actions, Drawer} from 'react-native-router-flux';

export default class App extends Component{
  render() {
    return (
      <Router  >
        <Scene key="root">
          <Scene key="Iniciar_sesion" component={Iniciar_sesion} title="Login" initial={true} hideNavBar={true} />
          <Scene key="Registrarse" component={Registrarse} title="Sign Up" hideNavBar={true} />
          <Scene key="Home" component={Home} title="Nuevo viaje" hideNavBar={true}  />
        </Scene>
      </Router>
    )
  }
  /*render(){
    return(
      <NativeRouter>
        <Switch> 
          <Route exact path="/" component={Iniciar_sesion}/>  
          <Route exact path="/Registrarse" component={Registrarse}/>
        </Switch>
      </NativeRouter>
        //<Iniciar_sesion/>
    );
  }*/
  
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
