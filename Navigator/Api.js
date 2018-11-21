 export async function login(correo, contraseña){
   
    try {
      let response = await fetch('http://206.189.164.14/api/clientes/login/'+correo+'/'+contraseña);
      let error
      let nombre
      let id
      if(response.ok) {
        let responseJson = await response.json();
        if (responseJson != null) {
          nombre = responseJson.primerNombre + " " + responseJson.apellidos
          id = responseJson.id 
          error = null
        }
        else {
          
          error= 'Correo o contraseña incorrectos'
        }
      }
      else {
          error = 'Correo o contraseña incorrectos'
      }

      return {error,nombre,id}
    } 
    catch (error) {
      alert(error);
    }
  }