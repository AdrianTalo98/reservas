import { useState } from "react"



function Registrar(props) {

    const [state , setState] = useState({
        correo : "",
        password : "",
        confirmPassword : "",
        Rut : "",
        nombre : "",
        apellido : "",
        fecha_nacimiento : "",
        telefono : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        
        if(state.password === state.confirmPassword) {

            async function postName() {
            
                const response = await fetch('http://localhost:5000/register', {//cambiar /register a /newUser
                  method: 'POST',
                  body: JSON.stringify(state),
                  headers: {
                    'Content-Type': 'application/json'}
                });
                const responseText = await response.status;
                
                //console.log(responseText); // logs 'OK'
                return responseText

                

            }         
            postName()
            alert("redyson")
            window.location.reload();

            
            
        } else {
            console.log("Contraseñas incorrectas sacowea");
        }
    }

    return(
          <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
              <form>
                  <div className="form-group text-left">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" 
                         className="form-control" 
                         id="correo" 
                         aria-describedby="emailHelp" 
                         placeholder="Enter correo"
                         value={state.correo}
                         onChange={handleChange}


                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group text-left">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" 
                          className="form-control" 
                          id="password" 
                          placeholder="Password"
                          value={state.password}
                          onChange={handleChange}
                      />
                  </div>
                  <div className="form-group text-left">
                      <label htmlFor="exampleInputPassword1">Confirm Password</label>
                      <input type="password" 
                          className="form-control" 
                          id="confirmPassword" 
                          placeholder="Confirm Password"
                          value={state.confirmPassword}
                          onChange={handleChange}

                      />
                  </div>
                  <div className="form-group text-left">
                      <label htmlFor="exampleInputRut">Rut</label>
                      <input type="text" 
                          className="form-control" 
                          id="Rut" 
                          placeholder="Ingrese su Rut"
                          value={state.Rut}
                          onChange={handleChange}
                      />
                  </div>

                  <div className="form-group text-left">
                      <label htmlFor="exampleInputPassword1">Nombre</label>
                      <input type="text" 
                          className="form-control" 
                          id="nombre" 
                          placeholder="Ingrese su nombre"
                          value={state.nombre}
                          onChange={handleChange}
                      />
                  </div>

                  <div className="form-group text-left">
                      <label htmlFor="exampleInputApellido">Apellido</label>
                      <input type="text" 
                          className="form-control" 
                          id="apellido" 
                          placeholder="Ingrese su apellido"
                          value={state.apellido}
                          onChange={handleChange}
                      />
                  </div>

                  <div className="form-group text-left">
                      <label htmlFor="exampleInputFecha">Fecha de nacimiento</label>
                      <input type="date" 
                          className="form-control" 
                          id="fecha_nacimiento" 
                          placeholder="Ingrese su fecha de nacimiento"
                          value={state.fecha_nacimiento}
                          onChange={handleChange}
                      />
                  </div>

                  <div className="form-group text-left">
                      <label htmlFor="exampleInputTelefono">Telefono</label>
                      <input type="text" 
                          className="form-control" 
                          id="telefono" 
                          placeholder="Ingrese su telefono"
                          value={state.telefono}
                          onChange={handleChange}
                      />
                  </div>




                  <button 
                      type="submit" 
                      className="btn btn-primary"
                      onClick={handleSubmitClick}
                  >
                      Register
                  </button>
              </form>
          </div>
      )
  }

export default Registrar;