import axios from 'axios';

const urlPag = "https://kakiback.herokuapp.com/api/auth"

export async function registerUser (registroUsuario) {
  try {  
    const response = await axios({
          url: `${urlPag}/registro`,
          method: 'POST',
          data: registroUsuario
        })

        console.log(response)
        if(response.status === 201){
          console.log('Usuario registrado de manera exitosa.')
          alert(`${registroUsuario.email} registrado de manera exitosa.`)
        }
        return response
  } catch (e) {
        alert("Error crear el usuario, intente nuevamente.")
        console.log(e)
  }

}

export async function loginUser (logueoUsuario) {
  try {
    const response = await axios({
      url: `${urlPag}/login`,
      method: 'POST',
      data: logueoUsuario
    })

    console.log(response)
    if(response.status === 200){
      alert(`Inicio de sesion exitoso, bienvenido/a ${logueoUsuario.email}`)
    }
    return response
  }  catch (e) {
      alert("Usuario o contraseña erroneos, intente nuevamente.")
      console.log(e)
  }
}
