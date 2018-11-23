 export async function login(correo, contraseña){
   
    try {
      let response = await fetch('http://206.189.164.14/api/clientes/login/'+correo+'/'+contraseña);
      let error
      let nombre
      let id
      let calificacion
      if(response.ok) {
        let responseJson = await response.json();
        if (responseJson != null) {
          nombre = responseJson.primerNombre + " " + responseJson.apellidos
          id = responseJson.id 
          calificacion = responseJson.puntuacion
          error = null
        }
        else {
          
          error= 'Correo o contraseña incorrectos'
        }
      }
      else {
          error = 'Correo o contraseña incorrectos'
      }
      
      return {error,nombre,id,calificacion}
    } 
    catch (error) {
      alert(error);
    }
  }