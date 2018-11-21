import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import Iniciar_sesion from "./Navigator/Iniciar_sesion"
import Registrarse from './Navigator/Registrarse';
import postviaje from './Navigator/postviaje';
import Home from './Navigator/Home';
import Menu from './Navigator/Menu';
import {Scene, Router, Actions, Drawer} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {login} from './Navigator/Api';
//import Icon from 'react-native-vector-icons/MaterialIcons';

/**
 * Lo primero que debes hacer es sacasr todas las llamadas al api de cada Scene para aca.
 * Entonces, este componente va a guardar la informacion de todos y se las va a pasar asi
 * 
 * voy a ponerle una propiedad 'state' y ahi guarda todo: un ejemplo 
 * es current User
 */
const MenuIcon = () => {
  return(
    <Icon name={'bars'} size={30} color='white'/>
  )
}


export default class App extends Component{
  state = {
    nombrecompleto:'',
    identificacion:''
  }

  /**
   * Luego, aqui yo defino mis llamadas al api (en teoria saca todo a otro archivo pero se ve algo asi)
   */
  getUser = async (correo,contraseña) => {
    let { error, nombre, id } = await login(correo,contraseña)
    this.setState({nombrecompleto: nombre})
    this.setState({identificacion: id})
    if(error){
      Alert.alert(error)
    }else{
      //console.log(this.state.nombrecompleto)
      Actions.Home({nombre:this.state.nombrecompleto})
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
            /**Lo mas importante, va a ser que aqui en vez de que el componente internamente haga login, se lo vas  apasar como prop. Al hacer esto, cuando ser corra esa funcion y llame
             * al api, te aseguras que le va a psara los datos a los hijos  y todos van a estar sin-
             * cronizados con la misma informacion
            */
            //onLoginButtonClicked={() => this.getUser()}
            />
          <Scene key="Registrarse" component={Registrarse} title="Sign Up" hideNavBar={true} />
          
          <Scene key="postviaje" component={postviaje} title="postviaje" hideNavBar={true} initial={false}  />
          <Drawer 
            key="drawer" 
            drawer={true} 
            contentComponent={Menu} 
            drawerIcon={MenuIcon} 
            drawerWidth={300} 
            hideNavBar={true}
            /** Luego aqui se pasan a este comonente asi */
            //userName={this.state.nombrecompleto}
            >
            <Scene 
            key="Home" 
            component={Home} 
            title="Nuevo viaje" 
            hideNavBar={false} 
            initial={false}
            userID={this.state.identificacion}
            />
            
            
          </Drawer>
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
